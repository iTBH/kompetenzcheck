'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Ablagen von erstellten Kompetenzchecks
var exassSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    // Die ID des ursprünglichen Checks, zu dem eingeladen wird
    origin_id: Schema.Types.ObjectId,
    // Die ID des Einladenden
    invited_by: Schema.Types.ObjectId,
    // Erstellungsdatum des Checks
    created: Date,
    closed: Boolean,
    phrases: [],
    // Name des Einladenden; wird bei der Fremdeinschätzung gefüllt
    inviter: Object,
    invitee: Object,
    status: String,
    // Schlagworte
    keywords: [],
    purpose: {type: String, required: false}
});

// Build the Model
var ExAss = mongoose.model('ExAss', exassSchema);