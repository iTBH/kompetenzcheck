'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var KeywordSchema = new Schema({
    username: String,
    name: String,
    description: String,
    username_keyword: {
        type: String,
        unique: true
    },
    count: Number
});

mongoose.model('keyword', KeywordSchema);
