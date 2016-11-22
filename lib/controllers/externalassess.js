'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Check = mongoose.model('Check'),
    ExAss = mongoose.model('ExAss'),
    Run = mongoose.model('Run'),
    User = mongoose.model('User'),
    Proposal = mongoose.model('Proposal');

/**
 * Holt einen bestimmten Check
 * @param req
 * @param res
 * @return array 0: check
 */
exports.show = function (req, res) {

    ExAss.findOne({_id: req.params.id}, function (err, checkToAssess) {
        if (!err) {
            res.json(checkToAssess);
        } else {
            res.json({"status": "error", "error": "Error finding check"}, 404);
        }
    });
};


/**
 * holt eine fremdeinschätzung anhand der origin_id des eigentlichen Checks
 *
 * */
exports.getAllForOneCheck = function (req, res) {

    ExAss.find({origin_id: req.params.id}, function (err, checks) {

        if (!err) {
            res.json(checks);
        } else {
            console.log(err);
            res.json({"status": "error", "error": "Error finding checks"}, 404);
        }
    });
};

/**
 * Ermittelt den Namen des eingeladenen Fremdeinschätzers, um diesen später
 * in das Statusupdate schreiben zu können.
 * @param hash
 * @param invitations
 * @returns {*}
 */
var getAddresseeFromInvitation = function (hash, invitations) {

    var addressee;

    for (var i = 0; i < invitations.length; i++) {
        if (invitations[i].hash == hash) {

            var inv = invitations[i];
            // Vor- und Nachname aufbereiten, wenn vorhanden, sonst Email-Adresse für das Statusupdate im Check
            addressee = (inv.firstname !== '' && inv.lastname !== '') ? inv.firstname + ' ' + inv.lastname : inv.mail;
        }
    }

    return addressee;
};

/**
 * Prüfen, ob ein Event schon in den Updates vorhanden ist
 * @param check
 * @param event
 * @returns {boolean}
 */
var checkIfEventAlreadyInUpdates = function (check, event) {

    // Prüfen, ob es schon einen Eintrag "exassstart" gibt (mit der Fremdeinschätzung begonnen)
    var updates = check.updates;

    // Erstmal alle vorhandenen Events in einem Array sammeln
    var events = [];
    for (var i = 0; i < updates.length; i++) {
        events.push(updates[i].event);
    }

    return events.indexOf(event) === -1;
};

/**
 * Aktualisiert den Stand der Fremdeinschätzungen immer dann, wenn der User mit "Fertig" eine Einschätzung abschließt.
 * @param req
 * @param res
 */
exports.update = function (req, res) {

    ExAss.findById(req.body._id, function (err, check_to_be_updated) {
        if (!err) {

            // Explizite Angabe der Felder, die geändert werden sollen

            check_to_be_updated.phrases = req.body.phrases;

            check_to_be_updated.save(function (err, check_to_be_updated) {
                if (!err) {

                    // Die Id der Fremdeinschätzung speichern, um später den Namen des Fremdeinschätzers
                    // in den Status schreiben zu können.
                    var exassHash = check_to_be_updated._id;

                    // Im Check des Users einmalig den Status aktualisieren und eintragen, dass mit der Bearbeitung begonnen wurde
                    Check.findById(check_to_be_updated.origin_id, function (err, check) {
                        if (!err) {

                            // Prüfen, ob das Event "exassstart" schon drinsteht
                            if (checkIfEventAlreadyInUpdates(check, 'exassstart')) {

                                var addressee = getAddresseeFromInvitation(exassHash, check.invitations);

                                var update = {
                                    "event": "exassstart",
                                    "date": Date.now(),
                                    "perspective": "they",
                                    addressee: addressee
                                };

                                Check.update({_id: check._id}, {
                                    $push: {
                                        updates: {
                                            $position: 0,
                                            $each: [update]
                                        }
                                    }
                                }, function (err, numberAffected, raw) {
                                    if (!err) {
                                        console.log("Statusupdate 'exassstart' wurde eingetragen.");
                                    } else {
                                        console.log("Statusupdate konnte nicht eingetragen werden.");
                                        res.json(500);
                                    }
                                });
                            }

                            res.json({status: "success", message: "Ihre Selbsteinschätzung wurde erfolgreich gespeichert."}, 200);

                        } else {
                            console.log(err);
                            res.json({status: "error", message: "Ihre Selbsteinschätzung konnte nicht gespeichert werden."}, 500);
                        }
                    });

                    res.json({status: "success", message: "Ihre Bewertung wurde erfolgreich gespeichert."});
                } else {
                    console.log('Error: ' + err);
                    res.json({status: "error", message: "Ihre Bewertung konnte nicht gespeichert werden!"}, 400);
                }
            });
        } else {
            console.log(err);
            res.json({"status": "error", "message": "Es ist ein Fehler aufgetreten."}, 400);
        }
    });
};

/**
 * Die Einladung zur Fremdeinschätzung aktualisieren
 */
var markExternalAssessmentFinished = function (hash, invitations) {

    for (var i = 0; i < invitations.length; i++) {
        if (invitations[i].hash == hash) {
            console.log("Found invitation id: " + hash);
            return invitations[i]._id;

        }
    }

};

/**
 * Speichert eine Fremdeinschätzung, wenn der User sie mit "Abschließen" beendet.
 * @param req
 * @param res
 */
exports.create = function (req, res) {

    ExAss.findById(req.body._id, function (err, check_to_be_updated) {
        if (!err) {
            // Check abschließen
            check_to_be_updated.status = 'locked';


            // check_to_be_updated.update(check_to_be_updated);

            check_to_be_updated.save(function (err, check_to_be_updated) {
                if (!err) {

                    // Die Id der Fremdeinschätzung speichern, um später den Status schreiben zu können.
                    var exassHash = check_to_be_updated._id;

                    // Im Check des Users einmalig den Status aktualisieren und eintragen, dass mit der Bearbeitung begonnen wurde
                    Check.findById(check_to_be_updated.origin_id, function (err, check) {
                        if (!err) {

                            // Prüfen, ob schon eingetragen wurde, dass die Fremdeinschätzung beendet wurde,
                            // damit das anschließende Statusupdate beim User S nicht mehrfach eingetragen wird.
                            // Edit Wabsolute :  Auskommentiert damit mehrere Fremdeinschätzungen möglich sind
                            //if (checkIfEventAlreadyInUpdates(check, 'exassend')) {

                            // ============ Einladung im Check des Users mit abgeschlossener Fremdeinschätzung kennzeichnen

                            // Die Id des Subdocuments der Einladung holen mithilfe des Hash, der da drinsteht

                            var invitation_id = markExternalAssessmentFinished(exassHash, check.invitations);

                            Check.findById(check_to_be_updated.origin_id, function (err, check) {
                                if (!err) {

                                    // Einladung finden, deren Id zuvor ermittelt wurde
                                    var inv = check.invitations.id(invitation_id);

                                    // Kennzeichnen
                                    inv.finished = true;
                                    inv.exassend = Date.now();

                                    // Zurückspeichern
                                    check.save(function (err, check) {
                                        if (!err) {
                                            console.log('Die Einladung wurde mit dem Ende der Fremdeinschätzung gekennzeichnet!');
                                            res.json({status: 'success', message: 'Einschätzung erfolgreich gespeichert'}, 200);
                                        } else {
                                            console.log('Beim Kennzeichnen der Einladung ist ein Fehler aufgetreten!');
                                            res.json({
                                                status: 'error',
                                                message: 'Es ist ein Fehler beim speichern aufgetreten, haben sie diese einschätzung schonmal gespeichert?'
                                            }, 500);
                                        }
                                    })

                                } else {
                                    console.log("Check konnte nicht gefunden werden!");
                                    res.json({status: 'error', message: 'Check konnte nicht gefunden werden!'}, 500);
                                }
                            });

                            // ============ Statusupdate schreiben =====================

                            var addressee = getAddresseeFromInvitation(exassHash, check.invitations);

                            var update = {
                                // -------------------------------------------------
                                "event": "exassend",
                                "date": Date.now(),
                                "perspective": "they",
                                addressee: addressee
                            };

                            Check.update({_id: check._id}, {
                                $push: {
                                    updates: {
                                        $position: 0,
                                        $each: [update]
                                    }
                                }
                            }, function (err, numberAffected, raw) {
                                if (!err) {
                                    console.log("Statusupdate 'exassend' wurde eingetragen.");
                                    res.json(200);
                                } else {
                                    console.log("Statusupdate konnte nicht eingetragen werden.");
                                    res.json(500);
                                }
                            });
                            //}else{
                            //  res.json({status: 'error', message: 'Dieser Check wurde bereits abgeschlossen'}, 500);
                            //}

                        } else {
                            res.json({status: "error", message: "Der Check konnte nicht gefunden werden."}, 500);
                        }
                    });

                } else {
                    console.log('Error: ' + err);
                    res.json({status: "error", message: "Ihre Bewertung konnte nicht gespeichert werden!"}, 400);
                }
            });
        } else {
            console.log(err);
            res.json({"status": "error", "message": "Es ist ein Fehler aufgetreten."}, 400);
        }
    });


};
