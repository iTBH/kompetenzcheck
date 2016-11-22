'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = mongoose.model('User'),
    ExAss = mongoose.model('ExAss'),
    passport = require('passport'),
    Invitation = mongoose.model('Invitation'),
    Check = mongoose.model('Check');

var nodemailer = require("nodemailer");

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
var _doSendMail = function (inv, req) {
    var port = process.env.PORT;
    var env = process.env.NODE_ENV;
    var host = req.headers.host;

    console.log(env, host, port);


    if (env == 'production') {
        host = 'ausbildungs-check.net';
        port = 80;
    }

    var invName = "";
    if (inv.firstname != "") {
        invName += " " + inv.firstname;
    }
    if (inv.lastname != "") {
        invName += " " + inv.lastname;
    }
    var mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: inv.mail,
        subject: 'Kompetenzwerkstatt - Mein Beruf | Einladung zur Fremdeinschätzung',
        text: 'Guten Tag' + invName + ',\n\nSie wurden von ' + inv.inviter + ' zu einer Fremdeinschätzung im Kompetenz-Check ' +
        'der Kompetenzwerkstatt - Mein Beruf eingeladen.\n\n' +
        'Bitte klicken Sie zur Abgabe Ihrer Fremdeinschätzung auf diesen Link: http://' + host + '/external-assessment/' + inv.hash +
        '\n\nWir wünschen Ihnen viel Spaß mit dem Kompetenz-Check. Nutzen Sie die Hilfeseiten für Ihre ersten ' +
        'Schritte in der Anwendung.\n\n\n' +
        'Mit besten Grüßen,\n\n' +
        'das Team der Kompetenzwerkstatt - Mein Beruf\n\n' +
        '==============================================\n\n' +
        'www.kompetenzwerkstatt.net\n' +
        'www.itbh-hh.de\n\n' +
        'Technische Universität Hamburg\n' +
        'Institut für Technische Bildung und Hochschuldidaktik (G-3)\n\n' +
        'Am Irrgarten 3-9 (Q)\n' +
        '21073 Hamburg'
        //'http://' + host + ':' + port + '/external-assessment/' + inv.hash
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
 * Einladung zur Fremdeinschätzung verschicken
 */
exports.sendInvitationViaMail = function (req, res) {
    var user_logged_in = req.user.username || null;

    if (user_logged_in) {

        var origin_id = req.body.data.check._id;

        // Die Daten des Eingeladenen speichern
        var invitee = {
            saluation: req.body.data.invitee.salutation,
            firstname: req.body.data.invitee.firstname,
            lastname: req.body.data.invitee.lastname,
            mail: req.body.data.invitee.mail
        };


        console.log(req.body.data.check);
        // Copy neccessary data to the exasses-collection
        var exass = {
            origin_id: origin_id,
            inviter: {
                firstname: req.user.firstname || '',
                lastname: req.user.lastname || '',
                mail: req.user.email
            },
            invitee: invitee,
            created: Date.now(),
            title: req.body.data.check.title,
            description: req.body.data.check.description,
            purpose: req.body.data.check.purpose,
            keywords: req.body.data.check.keywords,
            invited_by: req.user._id,
            phrases: req.body.data.check.phrases
        };

        ExAss.create(exass, function (err, check) {
            if (!err) {
                var exassId = check._id;
                // Speichern des Einladungsvorgangs
                var invitation = new Invitation(
                    {
                        hash: exassId,
                        salutation: invitee.saluation || '',
                        mail: invitee.mail,
                        firstname: invitee.firstname || '',
                        lastname: invitee.lastname || '',
                        date: Date.now(),
                        status: 'invited'
                    }
                );

                // Vor- und Nachname aufbereiten, wenn vorhanden, sonst Email-Adresse für das Statusupdate im Check
                var addressee = (invitation.firstname !== '' && invitation.lastname !== '') ? invitation.firstname + ' ' + invitation.lastname : invitation.mail;

                var update = {
                    "event": "inviteexass",
                    "date": Date.now(),
                    "perspective": "me",
                    "addressee": addressee
                };

                // Den Check des Einladenden raussuchen...
                Check.findById(check.origin_id, function (err, check) {
                    if (!err) {

                        // Die Einladung als Subdokument hinzufügen...
                        check.invitations.push(invitation);

                        // ... und speichern
                        check.save(function (err, check) {
                            if (!err) {
                                invitation.inviter = req.user.firstname + ' ' + req.user.lastname;
                                _doSendMail(invitation, req);
                                res.json({status: 'success', message: 'Die Einladung zur Fremdeinschätzung wurde erfolgreich verschickt.'}, 200);
                            } else {
                                res.json({status: 'error', message: 'Die Einladung konnte nicht gespeichert werden.'}, 500);
                            }
                        });

                    } else {
                        res.json({status: 'error', message: 'Die Einladung konnte nicht gespeichert werden.'}, 500);
                    }
                });
            } else {
                console.log("Es ist ein Fehler beim Anlegen des Datensatzes für die Fremdeinschätzung aufgetreten.");
                res.json({
                    status: 'error',
                    message: 'Es ist ein Fehler beim Anlegen des Datensatzes für die Fremdeinschätzung aufgetreten.'
                }, 500);
            }
        });

    } else {
        // Fehlermeldung
        res.send('Nicht eingeloggt!', 400);
    }
};


/**
 * Add a token from an Invitee to the user record
 */
exports.addNewInvitee = function (req, res) {
    console.log(req.body.token);

    var user_logged_in = req.user.username || null;

    if (user_logged_in) {

        console.log(req.body.mail);

        // Token validieren
        if (req.body.token && req.body.token.length > 0) {
            var token = req.body.token;

            // Prüfen, ob das Token überhaupt vorhanden ist und einem Azubi gehört
            User.findOne({mailToken: token}, {firstname: 1, lastname: 1, _id: 1}, function (err, invitees) {
                if (!err && invitees) {
                    // Aktuellen User suchen und Token hinzufügen
                    User.findOneAndUpdate({_id: req.user._id}, {$addToSet: {invitees: token}}, function (err, result) {
                        if (!err) {
                            // Gibt den geänderten Datensatz zurück
                            res.json(result);
                        } else {
                            res.json('Beim Eintragen des Schlüssels ist ein Fehler aufgetreten', 400);
                        }
                    });
                } else {
                    res.json({
                        "status": "error",
                        "error": "Der Schlüssel existiert nicht. Vergleichen Sie den Schlüssel erneut mit den Angaben der Person, die Sie einladen möchten."
                    }, 400);
                }
            });
        } else {
            res.send('Kein Token!', 400);
        }

    } else {
        // Fehlermeldung
        res.send('Nicht eingeloggt!', 400);
    }
};


/**
 * List invitees
 * TODO Do not send the email or anything else that is not need in the client!
 */

exports.listInvitees = function (req, res) {

    console.log(req.user._id);

    var user_logged_in = req.user.username || null;

    if (user_logged_in) {

        Check.find({owner: req.user._id.toString()}, function (err, checks) {
            if (!err && checks.length > 0) {
                res.json(checks);
            } else {
                console.log(err);
                res.json({"status": "error", "error": "Sie haben noch keine Einladungen verschickt."}, 400);
            }
        });
    }
};
