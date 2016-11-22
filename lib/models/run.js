'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Ablagen von erstellten Kompetenzchecks
var runSchema = new Schema(
    { run:
        {
            // kennzeichnet aktuell nur noch Selbsteinschätzungen mit "self"
            type: String,
            firstname: String,
            lastname: String,
            mail: String,
            start_date: Date,
            end_date: Date,
            finished: Boolean,
            phrases: [
                {   id: Number,
                    statement: String,
                    phase: String,
                    cat: String,
                    rating: Number,
                    note: String,
                    comment: String
                }
            ]
        }
    }
);

// Build the Model
var Run = mongoose.model('Run', runSchema);



