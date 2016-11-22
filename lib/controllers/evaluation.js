'use strict';

var mongoose = require('mongoose'),
    csv = require('express-csv'),
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
exports.show = function(req, res) {

    var user_logged_in = req.user.username || null;

    if (user_logged_in) {
        Check.findOne({'_id' : req.params.id }, function (err, singlecheck) {
            if(!err) {

                // Prüfen, ob der Check dem User gehört
                if ( req.user._id.toString() !== singlecheck.owner.toString() ) {
                    res.json({"status":"error", "error":"Error: You don't have access to this check!"}, 403);
                } else {
                    res.json(singlecheck);
                }
            } else {
                console.log(err);
                res.json({"status":"error", "error":"Error finding check"}, 404);
            }
        });
    }
};

var buildCSV_ = function(check) {

    var obj = [{ name: 'Kompetenz', a: 'A', b: 'B',c: 'C', d:'D' }];

    var tmp1 = { kompetenz: 'Hühner rupfen', ratea: 1, rateb: 4, ratec: 3, rated: 1 };
    var tmp2 = { kompetenz: 'Hühner füttern', ratea: 4, rateb: 1, ratec: 1, rated: 2 };

    obj.push(tmp1);
    obj.push(tmp2);

    return obj;

};

var buildCSV = function(check) {

    var obj = [
        { name: 'Kompetenz', a: 'A', b: 'B',c: 'C', d:'D' },
        { name: 'Hühner rupfen', a: 1 }
    ];

    // Konstruiert die erste Zeile mit den Spaltenüberschriften
    var data = [];
    var firstRow = {};
    firstRow.label = 'Kompetenz';

    for ( var i = 0; i < check.runs.length; i++) {
        firstRow['a' + i] = check.runs[i].type + ', ' + check.runs[i].start_date;
    }
    data.push(firstRow);

    // Baut die Daten für die einzelnen Kompetenzen zusammen
//    var tmp = { competence: 'Hühner rupfen', a1: 1, a2: 3, a3: 1, a4: 4 };
//    data.push(tmp);
//    var tmp = { competence: 'Hühner füttern', a1: 4, a2: 1, a3: 2, a4: 4 };
//    data.push(tmp);

    for ( var i = 0; i < check.phrases.length; i++) {

        var tmp = {};

        for ( var j = 0; j < check.runs.length; j++) {
            for ( var k = 0; k < check.runs[j].phrases.length; k++) {
                if (check.runs[j].phrases[k].statement === check.phrases[i].statement) {
                    tmp.competence = check.runs[j].phrases[k].statement;
                    tmp['run' + j] = check.runs[j].phrases[k].rating;
                }
            }
        }
        data.push(tmp);
    }



    return data;

    // Aggregate the statements

    var statements = [];

    for ( var i = 0; i < check.runs.length; i++) {

        for ( var j = 0; j < check.runs[i].phrases.length; j++) {
            console.log(check.runs[i].phrases[j].rating);
        }

    }

    return obj;

};


/**
 * Holt einen bestimmten Check für die Aufbereitung mit CSV
 * @param req
 * @param res
 * @return array 0: check
 */
exports.getCSV = function(req, res) {

    var user_logged_in = req.user.username || null;

    if (user_logged_in) {
        Check.findOne({'_id' : req.params.id }, function (err, singlecheck) {
            if(!err) {

                // Prüfen, ob der Check dem User gehört
                if ( req.user._id.toString() !== singlecheck.owner.toString() ) {
                    res.json({"status":"error", "error":"Error: You don't have access to this check!"}, 403);
                } else {
                    res.csv(buildCSV(singlecheck));
                }
            } else {
                console.log(err);
                res.json({"status":"error", "error":"Error finding check"}, 404);
            }
        });
    }
};

