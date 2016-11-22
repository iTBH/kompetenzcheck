'use strict';

exports.loadFixtures = function () {

    var mongoose = require('mongoose'),
        User = mongoose.model('User'),
        Proposal = mongoose.model('Proposal'),
        Check = mongoose.model('Check'),

        // Fixtures
        mdpData = require('./assistentData/mdp'),
        mbtData = require('./assistentData/mbt'),
        fvtData = require('./assistentData/fvt'),
        eegData = require('./assistentData/eeg'),

        fakeCheck = require('./fakedata/fakecheck');

    // Remove all proposals
    console.log('### Removing existing proposals...');
    var p = Proposal.find({}).remove(function () {
    }).exec();

    // Success...
    p.then(function() {
        console.log('Successfully removed proposals from database.');
    });

    // Fill in MDP data
    p.then(function () {
        console.log('### Populating database with proposals for MDP...');
        Proposal.create(mdpData,function (err) {
            if (err) {
                throw new Error('!!! Error populating database with MDP proposals.').end();
            }
        }).exec();
    });

    // Success...
    p.then(function() {
        console.log('Successfully finished populating Proposals MDP.');
    });

    // Fill in EEG data
    p.then(function () {
        console.log('### Populating database with proposals for EEG...');
        Proposal.create(eegData,function (err) {
            if (err) {
                throw new Error('!!! Error populating database with EEG proposals.').end();
            }
        }).exec();
    });

    // Success...
    p.then(function() {
        console.log('Successfully finished populating Proposals EEG.');
    });

    // Fillin FVT data
    p.then(function () {
        console.log('### Populating database with proposals for FVT...');
        Proposal.create(fvtData,function (err) {
            if (err) {
                throw new Error('!!! Error populating database with FVT proposals.').end();
            }
        }).exec();
    });

    // Success...
    p.then(function() {
        console.log('Successfully finished population proposals FVT.');
    });

    // Fillin MBT data
    p.then(function () {
        console.log('### Populating database with proposals for MBT...');
        Proposal.create(mbtData,function (err) {
            if (err) {
                throw new Error('!!! Error populating database with MBT proposals.').end();
            }
        }).exec();
    });

    // Success...
    p.then(function() {
        console.log('Successfully finished population proposals MBT.');
    });

    // Remove all checks
    p.then(function() {
        Check.find({}).remove().exec();
    });

    // Success...
    p.then(function() {
        console.log('Successfully removed all checks.');
    });

    // Fillin MBT data
    p.then(function () {
        console.log('### Populating database with checks for MDP...');
        Check.create(fakeCheck,function (err) {
            if (err) {
                throw new Error('!!! Error populating database with MDP check.').end();
            }
        }).exec();
    });

    // Success...
    p.then(function() {
        console.log('Successfully finished population checks MDP.');
    });

    // Remove user accounts
    p.then(function () {
        console.log('### Removing all user accounts from database...');

        User.find({}).remove(function () {
        }).exec();
    });

    // Create dummy user accounts
    p.then(function () {
        console.log('Successfully finished removing user accounts from database.');
        console.log('### Creating dummy user accounts...');

        User.create([
            {
                provider: 'local',
                username: 'mechthild',
                email: 'mal',
                lastname: 'Malerin',
                firstname: 'Mechthild',
                profession: 'mal',
                professionlong: 'Malerin und Lackiererin',
                password: 'mal'
            },
            {
                provider: 'local',
                username: 'ferdi',
                email: 'ver',
                lastname: 'Veranstaltungstechniker',
                firstname: 'Ferdinand',
                profession: 'fvt',
                professionlong: 'Fachkraft für Veranstaltungstechnik',
                password: 'ver'
            },
            {
                provider: 'local',
                username: 'ecki',
                email: 'ele',
                lastname: 'Elektroniker',
                firstname: 'Eckhardt',
                profession: 'eeg',
                professionlong: 'Elektroniker für Gebäude- und Infrastruktursysteme',
                password: 'ele'
            },
            {
                provider: 'local',
                username: 'margret',
                email: 'm',
                lastname: 'Mediengestalterin',
                firstname: 'Margret',
                profession: 'mdp',
                professionlong: 'Mediengestalterin Digital/Print',
                password: 'm'
            },
            // Alexander Schmitt
            {
                provider: 'local',
                username: 'alex',
                email: '7ways@gmx.de',
                lastname: 'Schmitt',
                firstname: 'Alex',
                profession: 'mdp',
                professionlong: 'Mediengestalterin Digital/Print',
                password: 'm'
            },
            {
                provider: 'local',
                username: 'meinulf',
                email: 'mbt',
                lastname: 'Mediengestalter',
                firstname: 'Meinulf',
                profession: 'mbt',
                professionlong: 'Mediengestalter Bild/Ton',
                password: 'mbt'
            },
            {
                provider: 'local',
                username: 'didi',
                email: 'dach',
                lastname: 'Dachdecker',
                firstname: 'Dietmar',
                profession: 'dach',
                professionlong: 'Dachdecker',
                password: 'dach'
            },
            {
                provider: 'local',
                username: 'ansgar',
                email: 'an',
                lastname: 'Anlagenmechaniker',
                firstname: 'Ansgar',
                profession: 'amshk',
                professionlong: 'Anlagenmechaniker SHK',
                password: 'an'
            },
            {
                provider: 'local',
                username: 'p',
                email: 'support@trainxl.de',
                lastname: 'Paulsen',
                firstname: 'Paul',
                profession: 'mdp',
                professionlong: 'Mediengestalter Digital/Print',
                password: 'p',
                year: 2

            },
            {
                provider: 'local',
                username: 'j',
                email: 'kontakt@trainxl.de',
                lastname: 'Kniepenkötter',
                firstname: 'Jaqueline Chayenne',
                profession: 'mdp',
                professionlong: 'Mediengestalterin Digital/Print',
                password: 'j',
                year: 1
            }],
            function (err) {
                if (err) {
                    throw new Error('!!! There was an error creating dummy user accounts!');
                } else {
                    mongoose.disconnect();
                    console.log('Successfully finished creating dummy user accounts.')
                }
            }
        ).exec().end();
    });
};