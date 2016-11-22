'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Bereitstellung von Fragen und Vorschlägen für den Kompetenz-Assistenten
var proposalSchema = new Schema({
    profession:   String,
    abbreviation: String,
    questions: [
        {   id: Number,
            question: String,
            defaultterms: String,
            input: String,
            phase: String,
            cat: String,
            competence: [
                {   id: Number,
                    statement: String,
                    phase: String,
                    cat: String
                }
            ]
        }
    ]
});

// Build the Model
var Proposal;
Proposal = mongoose.model('Proposal', proposalSchema);