'use strict';

var mongoose = require('mongoose'),
    Check = mongoose.model('Check'),
    ExAss = mongoose.model('ExAss'),
    User = mongoose.model('User'),
    Proposal = mongoose.model('Proposal'),
    https = require("https"),
    fs = require('fs');

exports.getContent = function (req, res) {
    var url = "https://fizban05.rz.tu-harburg.de/itbh/kompetenzcheck/" + req.params.id;
    https.get(url, function (a) {
        var data = '';
        a.setEncoding('utf8');
        a.on('data', function (chunk) {
            data += chunk;
        });
        a.on('end', function () {
            data = data.replace(new RegExp('<script src="gitbook(.*)script>', 'g'), '');
            data = data.replace(new RegExp('document[.]write(.*);'), '');
            data = data.replace(new RegExp('src="', 'g'), 'src="https://fizban05.rz.tu-harburg.de/itbh/kompetenzcheck/');
            data = data.replace(new RegExp('<link rel="stylesheet" href="', 'g'), '<link rel="stylesheet" href="https://fizban05.rz.tu-harburg.de/itbh/kompetenzcheck/');
            fs.writeFile('app/_book/' + req.params.id, data, function (err) {
                if (err) return console.log(err);
            });

            res.send(data);
        });
        a.on('error', function (e) {
            res.json({message: e.message}, 400);
        });
    });
};
