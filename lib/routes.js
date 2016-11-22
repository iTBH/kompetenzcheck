'use strict';

var index = require('./controllers'),
    users = require('./controllers/users'),
    help = require('./controllers/help'),
    check = require('./controllers/check'),
    proposal = require('./controllers/proposal'),
    assess = require('./controllers/assess'),
    session = require('./controllers/session'),
    externalassess = require('./controllers/externalassess'),
    evaluation = require('./controllers/evaluation'),
    invitation = require('./controllers/invitation'),
    keyword = require('./controllers/keyword'),
    partner = require('./controllers/partner');
//resulttopdf = require('./controllers/resulttopdf');

var middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function (app) {

    var ensureAuthenticated = function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        console.log('Not logged in!');
        res.redirect('/login');
    };

    // Server API Routes

    // Dashboard
    app.get('/api/dashboard', ensureAuthenticated, check.index);

    // Checks
    app.get('/api/checks', ensureAuthenticated, check.index);
    app.get('/api/checks/new', ensureAuthenticated, check.new_and_edit);

    app.get('/api/checks/:id', ensureAuthenticated, check.new_and_edit);

    app.get('/api/checks/import/:id', ensureAuthenticated, check.import);

    app.post('/api/checks', ensureAuthenticated, check.create);
    app.put('/api/checks/:id', ensureAuthenticated, check.update);
    app.del('/api/checks/:id', ensureAuthenticated, check.delete);
    app.post('/api/checks/:id/copy', ensureAuthenticated, check.copy);
    app.post('/api/checks/:id/share', ensureAuthenticated, check.share);
    app.put('/api/checks/:id/close', ensureAuthenticated, check.close);
    app.put('/api/checks/:id/anonymize', ensureAuthenticated, check.anonymize);
    // Assignment akzeptieren/ablehnen
    app.put('/api/checks/:id/accept', ensureAuthenticated, check.acceptAssignment);
    app.put('/api/checks/:id/reject', ensureAuthenticated, check.rejectAssignment);

    // Proposals
    app.get('/api/proposals', ensureAuthenticated, proposal.getOne);

    // Evaluation
    app.get('/api/evaluate/:id', ensureAuthenticated, evaluation.show);
    app.get('/api/evaluate/csv/:id', ensureAuthenticated, evaluation.getCSV);

    // Assessment
    app.get('/api/assess/:id', ensureAuthenticated, assess.show);
    app.put('/api/assess/:id/cache', ensureAuthenticated, assess.cache);
    app.put('/api/assess/:id/create', ensureAuthenticated, assess.create);


    app.put('/api/users', ensureAuthenticated, users.changePassword);
    app.put('/api/users/profession', ensureAuthenticated, users.changeProfession);
    app.put('/api/users/settings', ensureAuthenticated, users.changeSettings);
    app.get('/api/users/me', ensureAuthenticated, users.me);
    app.post('/api/users/find', users.find);
    app.get('/api/users/:id', ensureAuthenticated, users.show);
    app.post('/api/users/updateResetPassword', users.updateResetPassword);
    app.post('/api/users/deleteAccount', users.deleteAccount);

    app.get('/api/invitees', ensureAuthenticated, invitation.listInvitees);
    app.put('/api/invitees/add', ensureAuthenticated, invitation.addNewInvitee);
    app.put('/api/invitees/inviteViaMail', ensureAuthenticated, invitation.sendInvitationViaMail);

    // Keywords
    app.get('/api/keywords', ensureAuthenticated, keyword.getAll);
    app.get('/api/keywords/:id', ensureAuthenticated, keyword.loadById);
    app.put('/api/keywords/add', keyword.create);
    //app.put('/api/keywords/add', ensureAuthenticated, keyword.create);
    app.del('/api/keywords/:id', ensureAuthenticated, keyword.delete);


    //Partners
    app.put('/api/partners/add', ensureAuthenticated, partner.create);
    app.get('/api/partners', ensureAuthenticated, partner.getAll);
    app.get('/api/partners/:id', ensureAuthenticated, partner.loadById);
    app.del('/api/partners/:id', ensureAuthenticated, partner.delete);

    //double optin on signin
    app.post('/api/users', users.create);
    app.get('/verify_email', users.verify);

    // External Assessment
    app.get('/api/external-assessment/:id', externalassess.show);
    app.post('/api/external-assessment', externalassess.create);
    app.put('/api/external-assessment/:id', externalassess.update);
    app.get('/api/external-assessment/getByOrigin/:id', externalassess.getAllForOneCheck);

    //app.post('/api/result/:id', resulttopdf.generate);

    app.post('/api/session', session.login);
    app.del('/api/session', session.logout);

    app.get('/api/fakedata', users.getfakedata);


    app.get('/api/help/:id', ensureAuthenticated, help.getContent);

// #####################################

    // All other routes to use Angular routing in app/scripts/app.js
    app.get('/partials/*', index.partials);
    app.get('/*', middleware.setUserCookie, index.index);
};
