'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Check = mongoose.model('Check'),
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

    var user_logged_in = req.user.username || null;

    if (user_logged_in) {
        Check.findOne({'_id': req.params.id}, function (err, singlecheck) {
            if (!err) {

                // Prüfen, ob der Check dem User gehört
                if (req.user._id.toString() !== singlecheck.owner.toString()) {
                    res.json({"status": "error", "error": "Error: You don't have access to this check!"}, 403);
                } else {
                    res.json(singlecheck);
                }
            } else {
                console.log(err);
                res.json({"status": "error", "error": "Error finding check"}, 404);
            }
        });
    }
};

exports.create = function (req, res) {
    // console.log(req.body.runs[0]);

    var user_logged_in = req.user.username || null;

    if (user_logged_in) {

        var runModel = new Run();

        var run = req.body.runs[0];

        run.start_date = Date.now();
        run.end_date = Date.now();
        run.finished = true;

        runModel = run;


        // console.log(req.body._id);
        Check.findOne({_id: req.body._id}, function (err, data) {
            if (data.runs.length > 1) {
                var update = {
                    "event": "updateSelf",
                    "date": Date.now(),
                    "perspective": "me"
                };
                Check.update({_id: req.body._id},
                    {
                        $set: {
                            "runs.1": runModel
                        },
                        $push: {
                            updates: {$position: 0, $each: [update]}
                        }
                    }, function (err, numberAffected, raw) {
                        res.json({status: "success", message: "Ihre Selbsteinschätzung wurde erfolgreich gespeichert."}, 200);
                        console.log('Number of Rows affected:' + numberAffected);
                        console.log(raw);
                    });
            }
            else {
                var update = {
                    "event": "self",
                    "date": Date.now(),
                    "perspective": "me"
                };

                // Dem Check eine Einschätzung hinzufügen und den Check als unveränderlich kennzeichnen
                Check.update({_id: req.body._id}, {$set: {locked: true}, $push: {updates: {$position: 0, $each: [update]}, runs: runModel}}, function (err, numberAffected, raw) {
                    if (!err) {

                        res.json({status: "success", message: "Ihre Selbsteinschätzung wurde erfolgreich gespeichert."}, 200);
                        console.log('Number of Rows affected:' + numberAffected);
                        console.log(raw);

                    } else {
                        console.log(err);
                        res.json({status: "error", message: "Ihre Selbsteinschätzung konnte nicht gespeichert werden."}, 500);
                    }
                });
            }
        });
    }
    else {
        console.log(err);
        res.json({"status": "error", "message": "Fehler: Nicht eingeloggt!."}, 400);
    }
}
;

exports.cache = function (req, res) {
    // console.log(req.body);
    var user_logged_in = req.user.username || null;

    if (user_logged_in) {

        // var runModel = new Run();
        //
        // var run = req.body.runs[0];
        //
        // run.start_date = Date.now();
        // run.end_date = Date.now();
        // run.finished = false;
        //
        // runModel = run;
        //
        // var update = {
        //     "event": "self",
        //     "date": Date.now(),
        //     "perspective": "me"
        // };

        Check.findById(req.body._id, function (err, check) {
            var runModel = new Run();
            var run = check.runs[1];
            runModel = run;
            var update = {
                "event": "self",
                "date": Date.now(),
                "perspective": "me"
            };
            // // Dem Check eine Einschätzung hinzufügen und den Check als unveränderlich kennzeichnen
            Check.update({_id: req.body._id}, {$set: {locked: true}, $push: {updates: {$position: 0, $each: [update]}, runs: runModel}}, function (err, numberAffected, raw) {
                if (!err) {
                    res.json({status: "success", message: "Ihre Selbsteinschätzung wurde erfolgreich zwischengespeichert."}, 200);
                    console.log('Number of Rows affected:' + numberAffected);
                    console.log(raw);

                } else {
                    console.log(err);
                    res.json({status: "error", message: "Ihre Selbsteinschätzung konnte nicht zwischengespeichert werden."}, 500);
                }
            });
        });

    } else {
        console.log(err);
        res.json({"status": "error", "message": "Fehler: Nicht eingeloggt!."}, 400);
    }
};