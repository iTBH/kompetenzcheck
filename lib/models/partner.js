/**
 * Created by Artur on 03.09.2015.
 */
'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PartnerSchema = new Schema({
  username: String,
  firstname: String,
  lastname: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
});

mongoose.model('partner', PartnerSchema);
