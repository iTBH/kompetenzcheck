'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Fake = require('../config/fakedata/fakecheck'),
    passport = require('passport'),
    Check = mongoose.model('Check');
//crypto = require('crypto');

var nodemailer = require("nodemailer");

var emailFooter = '==============================================\n\n' +
    'www.kompetenzwerkstatt.net\n' +
    'www.itbh-hh.de\n\n' +
    'Technische Universität Hamburg\n' +
    'Institut für Technische Bildung und Hochschuldidaktik (G-3)\n\n' +
    'Am Irrgarten 3-9 (Q)\n' +
    '21073 Hamburg';

var smtpTransport = nodemailer.createTransport("SMTP", {

    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD
    }
});


/**
 * Einladungsmail verschicken
 * @private
 */
var _doSendMail = function (mail, check) {

    var mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: mail,
        subject: 'Kompetenzwerkstatt - Mein Beruf | Einladung zur Fremdeinschätzung',
        text: 'Guten Tag, bitte geben Sie eine Fremdeinschätzung ab!\n\n' +
        'http://localhost:3001/external-assessment.html'
    };

    smtpTransport.sendMail(mailOptions, function (error, responseStatus) {

        if (!error) {
            console.log(responseStatus.message); // response from the server
            console.log(responseStatus.messageId); // Message-ID value used
        } else {
            console.log(error);
        }
    });
};

/**
 * Return some fake check with a lot of competence
 */
exports.getfakedata = function (req, res) {
    res.json(Fake.fakecheck);
};


/**
 * Create user
 */
exports.create = function (req, res) {
    var newUser = new User(req.body);
    newUser.provider = 'local';

    var host = req.headers.host;

    var authenticationURL = 'http://' + host + '/verify_email?token=' + newUser.authToken;

    newUser.save(function (err) {
        if (err) {
            // Manually provide our own message for 'unique' validation errors, can't do it from schema
//      if(err.errors.email.type === 'Value is not unique.') {
//         err.errors.email.type = 'The specified email address is already in use.';
//      }
            return res.json(400, err);
        }
        var mailOptions = {
            from: process.env.SMTP_EMAIL,
            to: req.body.email,
            subject: "Um Ihr Benutzerkonto zu aktivieren, klicken Sie bitte auf den Aktivierungslink",
            text: 'Guten Tag ' + req.body.firstname + ',\n\nvielen Dank für Ihre Registrierung beim Kompetenz-Check der Kompetenzwerkstatt - Mein Beruf!\n' +
            'Bitte klicken Sie zur Aktivierung Ihres Benutzerkontos auf folgenden Link: ' + authenticationURL + '\n' +
            'Wir wünschen Ihnen viel Spaß mit dem Kompetenz-Check. Nutzen Sie die Hilfeseiten für Ihre ersten ' +
            'Schritte in der Anwendung.\n\n\n' +
            'Mit besten Grüßen,\n\n' +
            'das Team der Kompetenzwerkstatt - Mein Beruf\n\n' +
            '==============================================\n\n' +
            emailFooter
        };

        smtpTransport.sendMail(mailOptions, function (error, response) {
            if (error) {
                console.log(error);
                res.end("error");
            } else {
                console.log("Message sent: " + response.message);
                res.end("sent");
            }
        });
        //console.log(req.body);

    });
};


exports.verify = function (req, res, next) {
    //console.log('verify_email token: ', req.query.token);
    User.findOne({authToken: req.query.token}, function (err, user) {
        if (err) {
            return console.error(err);
        }
        //console.dir(user);
        user.isAuthenticated = true;
        user.save(function (err) {
            if (err) return console.error(err);
            console.log('succesfully updated user');
            console.log(user);
            res.send(user);

            //update page
            req.logIn(user, function (err) {
                if (err) return next(err);

                return res.json(req.user.userInfo);
            });
        });

    });

    res.render('index', {title: 'Authenticating...'});
};


/**
 *  Get profile of specified user
 */
exports.show = function (req, res, next) {
    var userId = req.params.id;

    User.findById(userId, function (err, user) {
        if (err) return next(new Error('Failed to load User'));

        if (user) {
            res.send({profile: user.profile});
        } else {
            res.send(404, 'USER_NOT_FOUND');
        }
    });
};

/**
 * Change password
 */
exports.changePassword = function (req, res, next) {
    var userId = req.user._id;
    var oldPass = String(req.body.oldPassword);
    var newPass = String(req.body.newPassword);

    User.findById(userId, function (err, user) {
        if (user.authenticate(oldPass)) {

            user.password = newPass;
            user.save(function (err) {
                if (err) {
                    res.send(500, err);
                } else {
                    res.send(200);
                }
            });
        } else {
            res.send(400);
        }
    });
};

/**
 * Ändert die Berufsbezeichnung
 * @param req
 * @param res
 * @param next
 */
exports.changeProfession = function (req, res, next) {

    var newProfession = req.body.professionlong;
    var userId = req.user._id;

    console.log(newProfession, userId);

    User.update({_id: userId}, {$set: {professionlong: newProfession}}, function (err, user) {
        if (!err) {
            res.json({"status": "success", "message": "Die Berufsbezeichnung wurde erfolgreich geändert."}, 200);
        } else {
            res.json(500);
        }
    })
};

/**
 * Ändert die Einstellungen (EMail, Vorname, Nachname)
 * @param req
 * @param res
 * @param next
 */
exports.changeSettings = function (req, res, next) {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var userId = req.user._id;

    User.findById(userId, function (err, user) {
        user.firstname = firstname;
        user.lastname = lastname;
        user.email = email;
        user.save(function (err) {
            if (err) {
                res.send(500, err);
            } else {
                res.json({"status": "success", "message": "Die Einstellungen wurde erfolgreich geändert."}, 200);
            }
        });
    });
};


/**
 * Get current user
 */
exports.me = function (req, res) {
    res.json(req.user || null);
};


/**
 * Update the Password from Reset form
 */
exports.updateResetPassword = function (req, res) {
    var password = String(req.body.password);
    var token = req.body.token;
    User.findOne({"resetToken": token}, function (err, user) {
        console.log(user);
        if (err) {
            res.send(500, err);
        }
        else if (!user) {
            res.json({status: "error", message: 'Kein Benutzer gefunden. Ist die E-Mail-Adresse richtig?'}, 404);
        }
        else {
            console.log(password);
            user.password = password;
            user.resetToken = Math.random().toString(36).substring(10);
            user.save(function (err) {
                console.log(user);
                if (err) {
                    res.send(500, err);
                } else {
                    res.json({"status": "success", "message": "Passwort erfoglreich aktualisiert."}, 200);
                }
            });
        }
        res.json(req.user || null);
    });
};


/**
 * Find a user by mail
 */
exports.find = function (req, res) {
    var email = req.body.email;
    // console.log(r);
    User.findOne({"email": email}, function (err, user) {
        if (err) {
            res.send(500, err);
        }
        else if (!user) {
            res.json({status: "error", message: 'Kein Benutzer gefunden. Ist die E-Mail-Adresse richtig?'}, 404);
        }
        else {
            var host = req.headers.host;
            user.resetToken = Math.random().toString(36).substring(10);
            user.save();
            var authenticationURL = 'http://' + host + '/resetPassword/' + user.resetToken;

            var mailOptions = {
                from: process.env.SMTP_EMAIL,
                to: req.body.email,
                subject: "Um Ihr Passwort zurückzusetzen, klicken Sie bitte auf den Link",
                text: 'Guten Tag ' + user.firstname + ',\n\nSie haben eine Zurücksetzung Ihres Passworts angefordert.\n' +
                'Bitte klicken Sie zum Setzen eines neuen Passworts auf folgenden Link: ' + authenticationURL + '\n' +
                'Wir wünschen Ihnen viel Spaß mit dem Kompetenz-Check.\n\n\n' +
                'Mit besten Grüßen,\n\n' +
                'das Team der Kompetenzwerkstatt - Mein Beruf\n\n' +
                emailFooter
            };

            smtpTransport.sendMail(mailOptions, function (error, response) {
                if (error) {
                    console.log(error);
                    res.end("error");
                } else {
                    console.log("Message sent: " + response.message);
                    res.json({status: "success", message: 'E-Mail mit Zurücksetzungslink wurde verschickt.'}, 200);
                }
            });
        }
    });
    res.json(500);
};

/**
 * Change password
 */
exports.deleteAccount = function (req, res, next) {
    // console.log(req);
    var userId = req.user._id;
    var password = String(req.body.password);

    var b = String(userId);

    Check.find({updates: {$elemMatch: {assigner_user_id: b}}}, function (err, checks) {
        checks.forEach(function (check) {
            var updates = check.updates;
            check.updates = null;

            updates.forEach(function (update) {
                if (update.assigner_user_id == userId) {
                    update.addressee = "'Account gelöscht'";
                }
            });
            check.updates = updates;
            check.save();
        });
    });

    User.findById(userId, function (err, user) {
        if (user.authenticate(password)) {
            var mail = user.email;
            var name = user.firstname;
            var newName = "account_deleted_" + Math.random().toString(36).substring(7);

            user.firstname = "'Account";
            user.lastname = "gelöscht'";
            user.username = newName;
            user.email = newName;

            user.save(function (err) {
                if (err) {
                    res.send(500, err);
                } else {
                    var mailOptions = {
                        from: process.env.SMTP_EMAIL,
                        to: mail,
                        subject: 'Kompetenzwerkstatt - Mein Beruf | Abgeschlossener Kompetenzcheck',
                        text: 'Guten Tag ' + name + ',\n\n' +
                        'Sie haben Ihren Account im Kompetenz-Check der Kompetenzwerkstatt - Mein Beruf erfolgreich gelöscht.' +
                        '.\n\n\n' +
                        'Mit besten Grüßen,\n\n' +
                        'das Team der Kompetenzwerkstatt - Mein Beruf\n\n' +
                        emailFooter
                    };

                    smtpTransport.sendMail(mailOptions, function (error, responseStatus) {

                        if (!error) {
                            //console.log(responseStatus.message); // response from the server
                            console.log(responseStatus.messageId); // Message-ID value used
                        } else {
                            console.log(error);
                        }
                    });

                    res.send(200);
                }
            });
        } else {
            res.send(400);
        }
    });
};


/*_______________________________________USER-VERIFICATION______________________________________________*/

//exports.send = function (req, res) {
//
//  rand = Math.floor((Math.random() * 100) + 54);
//  host = req.get('host');
//  link = "http://" + req.get('host') + "/verify?id=" + rand;
//
//  mailOptions = {
//    to: req.query.to,
//    subject: "Please confirm your Email account",
//    html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"
//  };
//
//  console.log(mailOptions);
//
//  smtpTransport.sendMail(mailOptions, function (error, response) {
//    if (error) {
//      console.log(error);
//      res.end("error");
//    } else {
//      console.log("Message sent: " + response.message);
//      res.end("sent");
//    }
//  });
//};

//exports.verify = function (req, res) {
//
//  console.log(req.protocol + ":/" + req.get('host'));
//
//  if ((req.protocol + "://" + req.get('host')) == ("http://" + host)) {
//
//    console.log("Domain is matched. Information is from Authentic email");
//
//    if (req.query.id == rand) {
//      console.log("email is verified");
//      res.end("<h1>Email " + mailOptions.to + " is been Successfully verified");
//    }
//    else {
//      console.log("email is not verified");
//      res.end("<h1>Bad Request</h1>");
//    }
//  }
//
//  else {
//    res.end("<h1>Request is from unknown source");
//  }

