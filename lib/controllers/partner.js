'use strict';
var ObjectId = require('mongoose').Schema.ObjectId,
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  User = mongoose.model('User'),
  ExAss = mongoose.model('ExAss'),
  Partner = mongoose.model('partner');


/**
 * Add a partner
 */
exports.create = function (req, res) {

  var user_logged_in = req.user.username || null;

  // nur wenn wir eingeloggt sind
  if (user_logged_in) {

    var username = req.body.user,
      id = req.body._id,
      firstname = req.body.firstname,
      lastname = req.body.lastname,
      email = req.body.email;

    var partner = new Partner({
      _id: id,
      username: username,
      firstname: firstname,
      lastname: lastname,
      email: email
    });

    if (partner._id != null) {
      Partner.findByIdAndUpdate(partner._id, {
        "username": username,
        "firstname": firstname,
        "lastname": lastname,
        "email": email
      }, function (err, partner) {
        if (err) {
          throw new Error(err);
        }
        res.send(partner);
      });

    }
    else {

      partner.save(function (err) {
        if (!err) {
          res.json({status: 'success', message: 'Der Partner wurde gespeichert.'}, 200);
        } else {
          res.json({status: 'error', message: 'Der Partner konnte nicht gespeichert werden, existiert dieser bereits?'}, 500);
        }
      });
    }

  } else {
    // Fehlermeldung
    res.send({status: 'error', message: 'NOT_LOOGED_IN'}, 400);
  }
};

/**
 * Get all partners
 */
exports.getAll = function (req, res) {

  var user_logged_in = req.user.username || null;

  // nur wenn wir eingeloggt sind
  if (user_logged_in) {


    Partner.find({username: {$eq: user_logged_in}}).exec(function (err, partners) {
      res.jsonp(partners);
    });
    //res.send(, 200);

  } else {
    // Fehlermeldung
    res.send('Nicht eingeloggt!', 400);
  }
};


/*
 *
 * Delete a partner by his/her id, given by the DB
 * */
exports.delete = function (req, res) {

  var user_logged_in = req.user.username || null;

  if (user_logged_in) {

    Partner.findByIdAndRemove(req.params.id, function (err, partner) {
      if (err) {
        throw new Error(err);
      }
      res.send(partner);
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

    Partner.findById(req.params.id, function (err, partner) {
      if (err) {
        throw new Error(err);
      }
      res.send(partner);
    });


  } else {
    // Fehlermeldung
    res.send('Nicht eingeloggt!', 400);
  }
};
