'use strict';

var mongoose = require('mongoose'),
    Check = mongoose.model('Check'),
    ExAss = mongoose.model('ExAss'),
    User = mongoose.model('User'),
    Proposal = mongoose.model('Proposal'),
    Partner = mongoose.model('partner');

var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP", {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD
    }
});

var _sendInfoMailOfClosedCheck = function (invitation, req) {
    //var port = process.env.PORT;
    //var env = process.env.NODE_ENV;
    var host = req.headers.host;

    //if (env == 'production') {
    //  host = 'ausbildungs-check.net';
    //  port = 80;
    //}

    var invName = "";
    if (invitation.firstname != "") {
        invName += " " + invitation.firstname;
    }
    if (invitation.lastname != "") {
        invName += " " + invitation.lastname;
    }
    var mailOptions = {
        from: process.env.SMTP_EMAIL,

        to: invitation.mail,

        subject: 'Kompetenzwerkstatt - Mein Beruf | Abgeschlossener Kompetenzcheck',

        text: 'Guten Tag' + invName + ',\n\n' +
        'der Kompetenz-Check, zu dem Sie von ' + invitation.inviter + ' eingeladen wurden, ist nun ' +
        'abgeschlossen. Eine weitere Teilnahme kann nicht mehr berücksichtigt werden.\n' +
        'Bitte vereinbaren Sie zur Durchführung des Auswertungsgesprächs einen Termin mit ' + invitation.inviter + '.\n\n\n' +
        'Mit besten Grüßen,\n\n' +
        'das Team der Kompetenzwerkstatt - Mein Beruf\n\n' +
        '==============================================\n\n' +
        'www.kompetenzwerkstatt.net\n' +
        'www.itbh-hh.de\n\n' +
        'Technische Universität Hamburg\n' +
        'Institut für Technische Bildung und Hochschuldidaktik (G-3)\n\n' +
        'Am Irrgarten 3-9 (Q)\n' +
        '21073 Hamburg'
    };

    smtpTransport.sendMail(mailOptions, function (error, responseStatus) {

        if (!error) {
            //console.log(responseStatus.message); // response from the server
            console.log(responseStatus.messageId); // Message-ID value used
        } else {
            console.log(error);
        }
    });
};


exports.new = function (req, res) {

    var users_profession = req.user.profession || null;

    Proposal.findOne({'abbreviation': users_profession}, function (err, proposal) {
        if (!err) {
            console.log(proposal);
            res.json(proposal);
        } else {
            console.log(err);
            res.json({"status": "error", "error": "Error finding competences for profession"});
        }
    });
};

exports.create = function (req, res) {

    var user_logged_in = req.user.username || null;

    if (user_logged_in) {

        var update = {
            "event": "created",
            "date": Date.now(),
            "perspective": "me"
        };

        Check.create({
            title: req.body.title,
            purpose: req.body.purpose,
            description: req.body.description,
            created: Date.now(),
            profession: req.body.profession,
            phrases: req.body.phrases,
            owner: req.user._id.toString(),
            updates: [update],
            keywords: req.body.keywords

        }, function (err, check_created) {
            if (!err) {
                // !!! In der Antwort wird ausnahmsweise noch die ID des neu angelegten Checks mitgeschickt,
                // damit aus dem Editieren des Checks heraus gespeichert und mit der neuen
                // ID die Route zum AssessCtrl aufgerufen werden kann.
                res.json({
                        status: "success",
                        message: "Der Check wurde erstellt.",
                        id: check_created._id
                    }
                    , 200);
            } else {
                console.log(err);
                res.json({status: "error", message: "Der Check konnte nicht erstellt werden."}, 400);
            }
        });
    }
};

exports.index = function (req, res) {

    var user_logged_in = req.user.username || null;

    if (user_logged_in) {

        Check.find({'owner': req.user._id}, function (err, checks) {
            if (!err) {
                res.json(checks);
            } else {
                console.log(err);
                res.json({"status": "error", "error": "Error finding checks for user"});
            }
        });
    }

};


/**
 * Holt einen bestimmten Check und alle Proposals des Berufs
 * @param req
 * @param res
 * @return object check
 */
exports.new_and_edit = function (req, res) {

    var users_profession = req.user.profession || null;
    var user_logged_in = req.user.username || null;

    if (user_logged_in) {

        // Ist es ein neuer Check?
        if (req.params.id == 0) {
            var singlecheck = {};
            res.json(singlecheck);
        } else {
            Check.findOne({'_id': req.params.id}, function (err, singlecheck) {
                if (!err) {
                    // Prüfen, ob der Check dem User gehört
                    if (req.user._id.toString() !== singlecheck.owner.toString()) {
                        res.json({"status": "error", "error": "Error: You don't have access to this check!"});
                    } else {
                        res.json(singlecheck);
                    }
                } else {
                    console.log(err);
                    res.json({"status": "error", "error": "Error finding check"});
                }
            });
        }
    }
};

exports.delete = function (req, res) {
    var user_logged_in = req.user.username || null;

    if (user_logged_in) {

        ExAss.find({origin_id: req.params.id}, function (err, checks) {
            for (var index = 0; index < checks.length; ++index) {
                checks[index].remove(function (err) {
                    res.json({message: "Fremdeinschätzungen des Checks erfolgreich gelöscht."}, 200);
                });
            }
        });

        Check.findOne({'_id': req.params.id}, function (err, singlecheck) {
            if (!err) {
                singlecheck.remove(function (err) {
                    res.json({message: "Der Check wurde erfolgreich gelöscht."}, 200);
                });
            } else {
                console.log(err);
                res.json({message: "Der Check konnte nicht gelöscht werden."}, 500);

            }
        });
    }
};

exports.update = function (req, res) {

    Check.findById(req.body._id, function (err, check_to_be_updated) {
        if (!err) {

            // Explizite Angabe der Felder, die geändert werden sollen
            check_to_be_updated.title = req.body.title;
            check_to_be_updated.description = req.body.description;
            check_to_be_updated.purpose = req.body.purpose;
            check_to_be_updated.phrases = req.body.phrases;
            check_to_be_updated.keywords = req.body.keywords;

            check_to_be_updated.save(function (err, check_to_be_updated) {
                if (!err) {
                    res.json({status: "success", message: "Der Check wurde erfolgreich aktualisiert."});
                    console.log('Record saved:', check_to_be_updated);
                } else {
                    console.log('Error: ' + err);
                    res.json({status: "error", message: "Der Check konnte nicht aktualisiert werden!"}, 400);
                }
            });
        } else {
            console.log(err);
            res.json({"status": "error", "message": "Fehler: Datensatz zum Löschen wurde nicht gefunden."}, 400);
        }
    });
};

/**
 * Mail an Azubi
 * @param uid User-ID
 * @param cid Check-ID
 * @private
 */
var _informInvitee = function (uid, cid) {

    // Get user for id
    User.findById(uid, function (err, appr) {
        if (!err) {

            var mailOptions = {
                from: "developer@ausbildungsportfolio.net",
                to: appr.email,
                subject: "Neuer Kompetenz-Check für " + appr.firstname + ' ' + appr.lastname,
                text: 'Hallo ' + appr.firstname + ' ' + appr.lastname + ',\n\nbitte melde Dich in Deinem ' +
                'Kompetenz-Check-Account an, Du hast einen neuen Check mit der Nummer ' + cid + ' bekommen.' +
                '\n\nGrüße von der Kompetenzwerkstatt - Mein Beruf'
            }

            smtpTransport.sendMail(mailOptions, function (error, responseStatus) {

                if (!error) {
                    console.log(responseStatus.message); // response from the server
                    console.log(responseStatus.messageId); // Message-ID value used

                    Check.update(
                        {_id: cid},
                        {
                            $set: {
                                candidate_id: uid,
                                candidate_fullname: appr.firstname + ' ' + appr.lastname
                            }
                        }, function (err, numberAffected, raw) {
                            if (!err) {
                                console.log('Anzahl: ' + numberAffected, raw);
                            } else {
                                console.log(err);
                            }
                            ;
                        });

                } else {
                    console.log(error);
                }
            });

        } else {
            console.log(err);
        }
    });
};

exports.share = function (req, res) {

    var shareType = req.query.sharetype || null;
    var addresseeMail = req.query.email || null;
    var shareNumber = req.query.shareNumber || null;
    var id = req.params.id || null;

    // Der Zuweisende (fürs Statusupdate unten)
    var assignerFirstname = req.user.firstname;
    var assignerLastname = req.user.lastname;
    var assignerId = req.user.id;

    if (!id) {
        res.json({"status": "error", "message": "Es wurde keine ID übergeben!"});
    }

    switch (shareType) {

        case 'number':

            if (!shareNumber) {
                res.json({"status": "error", "message": "Es wurde keine Nummer angegeben!"});
            }

            // shareNumber dem check hinzufügen
            Check.findOne({'_id': id}, function (err, check) {
                if (!err) {
                    if (check) {

                        check.shareNumber = shareNumber;
                        check.save();

                        res.json({
                            "status": "success",
                            "message": "Der Check wurde zum Importieren vorbereitet."
                        }, 200);

                    } else {
                        res.json({"status": "error", "message": "Kein Check mit dieser ID gefunden!"}, 404);
                    }
                } else {
                    res.json({
                        "status": "error",
                        "message": "Der Check mit der ID konnte nicht gefunden werden!"
                    }, 500);
                }
            });

            break;

        case 'email':

            if (!addresseeMail) {
                res.json({"status": "error", "message": "Es wurde keine Mailadresse angegeben!"});
            }

            // Den User suchen auf Basis der Mailadresse
            User.findOne({email: addresseeMail}, function (err, user) {
                if (!err) {
                    if (user) {

                        var partnerFrom = new Partner({
                            _id: null,
                            username: req.user.username,
                            firstname: user.firstname,
                            lastname: user.lastname,
                            email: user.email,
                            user_id: user._id
                        });
                        var partnerTo = new Partner({
                            _id: null,
                            username: user.username,
                            firstname: req.user.firstname,
                            lastname: req.user.lastname,
                            email: req.user.email,
                            user_id: req.user._id
                        });

                        var userId = user._id;

                        // Den Check finden, der zugewiesen werden soll
                        Check.findOne({'_id': id}, function (err, check) {
                            if (!err) {
                                if (check) {

                                    partnerFrom.save();
                                    partnerTo.save();
                                    // Als Besitzer den User eintragen, dessen User-ID zur Mailadresse gehört
                                    check.owner = userId.toString();

                                    // Für das Statusupdate später speichern
                                    var savedIdForLater = check._id;
                                    // Id entfernen, damit beim Kopieren eine neue erstellt werden kann
                                    check._id = null;

                                    // Status schreiben, dass es sich um einen Import handelt - notwendig für die
                                    // Aktionsmöglichkeiten im Dashboard
                                    check.assignedFrom = assignerId;

                                    // Der Check muss noch akzeptiert werden
                                    check.accepted = false;
                                    check.rejected = false;

                                    // UserID des Empfängers; kommt später ins Array der Empfänger (assignedTo)
                                    var assignedTo = user.id;

                                    // Statusupdate für den User, dem der Check zugewiesen wurde
                                    var update = {
                                        "event": "assignedFrom",
                                        "date": Date.now(),
                                        "perspective": "they",
                                        // Der Empfänger (addressee ist hier falsch, muss aber einheitlich sein
                                        // wegen der Auswertung in CheckService!
                                        addressee: assignerFirstname + ' ' + assignerLastname
                                    };
                                    check.updates = [update];
                                    check.originated_from = savedIdForLater;

                                    // Neuen Check erstellen, der eine Kopie ist
                                    Check.create(check, function (err, check_shared) {
                                        if (!err) {
                                            // Dem zuweisenden User ein Statusupdate schreiben
                                            var update = {
                                                "event": "assignedTo",
                                                "date": Date.now(),
                                                "perspective": "me",
                                                // Der Zuweisende
                                                addressee: user.firstname + ' ' + user.lastname,
                                                "assigner_user_id": assignedTo
                                            };

                                            Check.update({_id: savedIdForLater}, {
                                                $push: {
                                                    updates: {$position: 0, $each: [update]},
                                                    assignedTo: {$position: 0, $each: [assignedTo]}
                                                }
                                            }, function (err, numberAffected, raw) {
                                                if (!err) {
                                                    console.log("Statusupdate 'asigned' wurde eingetragen.");
                                                } else {
                                                    console.log("Statusupdate konnte nicht eingetragen werden.");
                                                    res.json(500);
                                                }
                                            });

                                            res.json({
                                                "status": "success",
                                                "message": "Der Check wurde dem User zugewiesen."
                                            }, 200);
                                        } else {
                                            res.json({"status": "error", "message": "Es ist ein Fehler aufgetreten."}, 500);
                                        }

                                    });
                                } else {
                                    res.json({"status": "error", "message": "Kein Check mit dieser ID gefunden!"}, 404);
                                }
                            } else {
                                res.json({
                                    "status": "error",
                                    "message": "Der Check mit der ID konnte nicht gefunden werden!"
                                }, 500);
                            }
                        });
                    } else {
                        res.json({"status": "error", "message": "Es ist kein User mit dieser Mailadresse vorhanden!"}, 500);
                    }
                } else {
                    res.json({"status": "error", "message": "Es ist kein User mit dieser Mailadresse vorhanden!"}, 500);
                }
            });

            break;

    }

};

exports.acceptAssignment = function (req, res) {

    // TODO Prüfen, ob der Check mit dieser ID überhaupt dem sendenden User gehört!

    var assignedFrom = req.user._id;

    var checkId = req.body._id;

    var accepted = true;

    // Dem akzeptierenden User ein Update schreiben
    var update = {
        "event": "accepted",
        "date": Date.now(),
        "perspective": "me"
    };

    Check.update({_id: checkId}, {
        $set: {accepted: accepted},
        $push: {updates: {$position: 0, $each: [update]}}
    }, function (err, numberAffected, raw) {
        if (!err) {

            // Dem zuweisenden User ein Update schreiben
            var update = {
                "event": "acceptedBy",
                "date": Date.now(),
                "perspective": "they",
                "addressee": req.user.firstname + ' ' + req.user.lastname,
                "assigner_user_id": String(assignedFrom)
            };

            Check.update({_id: req.body.originated_from}, {
                $push: {
                    updates: {
                        $position: 0,
                        $each: [update]
                    }
                }
            }, function (err, numberAffected, raw) {

            });

            res.json({
                "status": "success",
                "message": "Sie haben den zugewiesenen Check angenommen. Ihr Partner/ihre Partnerin erhält dazu eine Nachricht."
            }, 200);
        } else {
            res.json({}, 500);
        }
    });
};

exports.rejectAssignment = function (req, res) {
    var user_logged_in = req.user.username || null;

    if (user_logged_in) {
        // Check finden und löschen
        Check.findOne({'_id': req.params.id}, function (err, singlecheck) {
            if (!err) {
                singlecheck.remove(function (err) {
                    // Update beim Sender des Checks setzen
                    var update = {
                        "event": "rejectedBy",
                        "date": Date.now(),
                        "perspective": "they",
                        "addressee": req.user.firstname + ' ' + req.user.lastname,
                        "assigner_user_id": String(req.user._id)
                    };

                    Check.update({_id: req.body.originated_from}, {
                        $push: {
                            updates: {
                                $position: 0,
                                $each: [update]
                            }
                        }
                    }, function (err, numberAffected, raw) {

                    });

                    res.json({message: "Der Check wurde erfolgreich abegelehnt."}, 200);
                });
            } else {
                console.log(err);
                res.json({message: "Der Check konnte nicht abgelehnt werden."}, 500);

            }
        });
    }
    //
    // var checkId = req.body._id;
    //
    // var accepted = false;
    // var rejected = true;
    //
    // // Dem akzeptierenden User ein Update schreiben
    // var update = {
    //     "event": "rejected",
    //     "date": Date.now(),
    //     "perspective": "me"
    // };
    //
    // Check.update({_id: checkId}, {
    //     $set: {accepted: accepted, rejected: rejected},
    //     $push: {updates: {$position: 0, $each: [update]}}
    // }, function (err, numberAffected, raw) {
    //     if (!err) {
    //
    //         // Dem zuweisenden User ein Update schreiben
    //         var update = {
    //             "event": "rejectedBy",
    //             "date": Date.now(),
    //             "perspective": "they",
    //             "addressee": req.user.firstname + ' ' + req.user.lastname
    //         };
    //
    //         Check.update({_id: req.body.originated_from}, {
    //             $push: {
    //                 updates: {
    //                     $position: 0,
    //                     $each: [update]
    //                 }
    //             }
    //         }, function (err, numberAffected, raw) {
    //
    //         });
    //
    //         res.json({
    //             "status": "success",
    //             "message": "Sie haben den zugewiesenen Check abgelehnt. Ihr Partner/ihre Partnerin wird davon benachrichtigt."
    //         }, 200);
    //     } else {
    //         res.json({}, 500);
    //     }
    // });
};


exports.copy = function (req, res) {

    var user_logged_in = req.user.username || null;

    var update = {
        "event": "copied",
        "date": Date.now(),
        "perspective": "me"
    };


    var checkTitle = "";
    if (req.body.title.substring(0, 7) == "(Kopie)") {
        checkTitle = req.body.title;
    } else {
        checkTitle = '(Kopie) ' + req.body.title;
    }

    Check.create({
        title: checkTitle,
        description: ( req.body.description !== undefined) ? req.body.description : '',
        purpose: req.body.purpose,
        created: Date.now(),
        profession: req.body.profession,
        phrases: req.body.phrases,
        owner: req.user._id.toString(),
        keywords: req.body.keywords,
        updates: [update]
    }, function (err, check_copied) {
        if (!err) {
            res.json({message: "Der Check wurde erfolgreich dupliziert.", data: check_copied}, 200);
        } else {
            res.json({message: "Der Check konnte nicht kopiert werden."}, 400);

        }
    });
};
/**
 * abschließen eines checks und versenden von mails an alle die zu einer Fremdeinschätzung eingeladen wurden
 *
 * */
exports.close = function (req, res) {
    Check.update(
        {_id: req.body._id},
        {
            $set: {
                closed: true
            }
        }, function (err, numberAffected, raw) {
            if (!err) {

                if (req.body.invitations.length > 0) {
                    User.findOne({_id: req.body.owner}, function (err, user) {

                        for (var i = 0, len = req.body.invitations.length; i < len; i++) {
                            var finishingMail = {
                                salutation: req.body.invitations[i].salutation,
                                mail: req.body.invitations[i].mail,
                                firstname: req.body.invitations[i].firstname || '',
                                lastname: req.body.invitations[i].lastname || '',
                                date: Date.now(),
                                inviter: user.firstname + ' ' + user.lastname
                            };
                            console.log(finishingMail);
                            _sendInfoMailOfClosedCheck(finishingMail, req);
                        }
                    });

                    console.log('Abschlussmail(s) versendet');
                } else {
                    console.log('Da is was schiefgelaufen');
                }

                res.json({
                    status: 'success',
                    message: 'Der Check wurde erfolgreich abgeschlossen. Gehen Sie weiter zur Auswertung.'
                }, 200);
            } else {
                res.json({status: 'error', message: 'Der Check konnte nicht abgeschlossen werden.'}, 500);

            }
            ;
        });
};

/**
 * anonymisiert einen checks und löscht alle personenbezogenen Daten
 *
 * */
exports.anonymize = function (req, res) {
    var user_logged_in = req.user.username || null;

    if (user_logged_in) {
        var update = {
            "event": "anonymize",
            "date": Date.now(),
            "perspective": "me"
        };

        // Löscht die Selbsteinschätzungen, aktualisiert die Updates und setzt den Wert anonymize
        Check.update({_id: req.params.id}, {
            $set: {
                anonymize: true
            }
            ,
            $push: {
                updates: {
                    $position: 0,
                    $each: [update]
                }
            },
            $unset: {
                runs: '',
                invitations: '',
                assignedTo: ''
            }
        }, function (err, numberAffected, raw) {

        });

        // Löscht alle Fremdeinschätzungen
        ExAss.find({origin_id: req.params.id}, function (err, checks) {
            for (var index = 0; index < checks.length; ++index) {
                checks[index].remove(function (err) {
                    res.json({message: "Der Check wurde erfolgreich anonymisiert."}, 200);
                });
            }
        });

        res.json({
            status: 'success',
            message: 'Der Check wurde erfolgreich anonymisiert.'
        }, 200);
    }
};

exports.import = function (req, res) {

    var user_logged_in = req.user.username || null;

    if (user_logged_in) {

        Check.findOne({'shareNumber': req.params.id}, function (err, originalCheck) {
            if (!err) {

                if (originalCheck == 'undefined' || originalCheck == null || originalCheck == '') {
                    res.json({message: "Der Check konnte nicht gefunden werden."}, 400);
                    return false;
                }

                var update = {
                    "event": "copied",
                    "date": Date.now(),
                    "perspective": "me"
                };

                Check.create({
                    title: originalCheck.title + ' (Kopie)',
                    description: ( originalCheck.description !== undefined) ? originalCheck.description + ' (Kopie)' : '',
                    purpose: originalCheck.purpose + ' (Kopie)',
                    created: Date.now(),
                    profession: originalCheck.profession,
                    phrases: originalCheck.phrases,
                    owner: req.user._id.toString(),
                    keywords: originalCheck.keywords,
                    updates: [update]
                }, function (err, check_copied) {
                    if (!err) {
                        res.json({message: "Der Check wurde erfolgreich importiert.", data: check_copied}, 200);
                    } else {
                        res.json({message: "Der Check konnte nicht importiert werden."}, 400);
                    }
                });

            }
        });
    }
};