'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Proposal = mongoose.model('Proposal');

exports.getOne = function (req, res) {

    var users_profession = req.user.profession || null;
    var user_logged_in = req.user.username || null;

    if (user_logged_in) {

        if (users_profession !== null) {
            Proposal.findOne({'abbreviation': users_profession }, function (err, proposal) {
                if (!err) {
                    res.json(proposal);
                } else {
                    console.log(err);
                    res.json({"status": "error", "error": "Error finding competences for profession"});
                }
            });
        } else {
            console.log(err);
            res.json({"status": "error", "error": "No profession given!"});
        }
    }
};