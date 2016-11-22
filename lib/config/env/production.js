'use strict';

var fs = require('fs');
var s = require('../../../mongo-secrets.json').secret;

module.exports = {
  env: 'production',
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         // Hier muss stehen: ?authSource=admin, damit es bei Uberspace funzt. Node-Error?
         //'mongodb://' + s.user + ':' + s.pass + '@localhost:20946/kc-desktop-prod'
         'mongodb://' + s.user + ':' + s.pass + '@localhost:27017/kc-desktop-prod'
  }
};