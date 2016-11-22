'use strict';
var ObjectId = require('mongoose').Schema.ObjectId,
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = mongoose.model('User'),
    ExAss = mongoose.model('ExAss'),
    Check = mongoose.model('Check'),
    Keyword = mongoose.model('keyword');

/**
 * Add a keyword to the user record
 */
exports.create = function (req, res) {
    /**
     *
     * zum anlegen von Schlagworten,
     * die ein Benutzer zu Anfang standardmäßig hat,
     * wird hier die authentifizierungseinschränkung aufgehoben
     * */
        //var user_logged_in = req.user.username || null;
        //
        //// nur wenn wir eingeloggt sind
        //if (user_logged_in) {

    var username = req.body.user,
        id = req.body._id,
        name = req.body.name,
        description = req.body.description,
        username_keyword = req.body.username_keyword;

    var keyword = new Keyword({
        _id: id,
        username: username,
        name: name,
        description: description || '',
        username_keyword: username_keyword
    });

    if (keyword._id != null) {
        Keyword.findByIdAndUpdate(keyword._id, {
            "username": username,
            "name": name,
            "description": description,
            "username_keyword": username_keyword
        }, function (err, keyword) {
            if (err) {
                throw new Error(err);
            }
            res.send(keyword);
        });

    }
    else {

        keyword.save(function (err) {
            if (!err) {
                res.json({status: 'success', message: 'Das Schlagwort wurde gespeichert.'}, 200);
            } else {
                res.json({status: 'error', message: 'Das Schlagwort konnte nicht gespeichert werden, existiert dieses bereits?'}, 500);
            }
        });
    }

    //} else {
    //  // Fehlermeldung
    //  res.send({status: 'error', message: 'NOT_LOOGED_IN'}, 400);
    //}
};

/**
 * Get all keywords
 */
exports.getAll = function (req, res) {
    var user_logged_in = req.user.email || req.user.username || null;
    var user_id = req.user._id || null;

    // nur wenn wir eingeloggt sind
    if (user_logged_in) {

        var itemsProcessed = 0;
        //var keyword = new Keyword();
        Keyword.find({username: {$eq: user_logged_in}}).exec(function (err, keywords) {
            keywords.forEach(function (keyword) {
                Check.find({keywords: keyword.name, owner: user_id}).count(function (err, count) {
                    keyword.count = count;
                    keyword.save();
                });
            });
            res.jsonp(keywords);
        });

    } else {
        // Fehlermeldung
        res.send('Nicht eingeloggt!', 400);
    }
};


/*
 *
 * Delete a keyword by its id, given by the DB
 * */
exports.delete = function (req, res) {

    var user_id = req.user._id;
    var user_logged_in = req.user.username || null;
    if (user_logged_in) {

        // Keyword aus den bestehenden Checks löschen
        Keyword.findById(req.params.id, function (err, keyword) {
            var keywordName = keyword.name;
            Check.find({keywords: keywordName, owner: user_id}, function (err, checks) {
                checks.forEach(function (check) {
                    var checkKeywords = check.keywords;
                    checkKeywords.remove(keywordName);
                    check.keywords = checkKeywords;
                    check.save();
                });
            });
        });

        // Keyword löschen
        Keyword.findByIdAndRemove(req.params.id, function (err, keyword) {
            if (err) {
                throw new Error(err);
            }
            res.send(keyword);
        });
    } else {
        // Fehlermeldung
        res.send('Nicht eingeloggt!', 400);
    }
};


exports.loadById = function (req, res) {
    var user_logged_in = req.user.username || null;
    // nur wenn wir eingeloggt sind
    if (user_logged_in) {

        Keyword.findById(req.params.id, function (err, keyword) {
            if (err) {
                throw new Error(err);
            }
            res.send(keyword);
        });


    } else {
        // Fehlermeldung
        res.send('Nicht eingeloggt!', 400);
    }
};
