'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


// Ablagen von erstellten Kompetenzchecks
var invitationSchema = new Schema(
    {
        salutation: String,
        firstname: String,
        lastname: String,
        mail: String,
        hash: {
            type: String,
            required: true,
            index: { unique: false }
        },
        keywords : [],
        date: String,
        status: String,
        // Wurde die Fremdeinschätzung aktiv beendet?
        finished: Boolean,
        // Wann wurde die Fremdeinschätzung beendet?
        exassend: Date
    }
);

// Build the Model
var Invitation = mongoose.model('Invitation', invitationSchema);



// Ablagen von erstellten Kompetenzchecks
var checkSchema = new Schema({
    title: { type: String, required: true },
    purpose: { type: String, required: false },
    description: { type: String, required: true },
    candidate_id: Schema.Types.ObjectId,
    candidate_fullname: String,
    originated_from: Schema.Types.ObjectId,
    created: Date,
    owner: String,
    checknumber: String,
    assign_link: String,
    // Schlagworte
    keywords : [],
    // Zugewiesen oder mit Selbsteinschätzung begonnen
    locked: Boolean,
    // Einschätzungsphase abgeschlossen
    closed: Boolean,
    // Einschätzung anonymisiert
    anonymize: Boolean,
    // Kennzeichnung, dass Check zugewiesen wurde; hier steht die Id des zuweisenden Users
    assignedFrom: Schema.Types.ObjectId,
    // Sammlung aller Empfänger des zugewiesenen Checks (UserID)
    assignedTo: [],
    // Zuweisung akzeptiert oder nicht
    accepted: Boolean,
    // Zuweisung abgelehnt oder nicht (muss sein, damit die Logik im View einfacher wird)
    rejected: Boolean,
    runs: [],
    invitations: [invitationSchema],
    phrases: [],
    // Name des Einladenden; wird bei der Fremdeinschätzung gefüllt
    inviter: Object,
    updates: [],
    comments: String,
    shareNumber : String
});

// Build the Model
var Check = mongoose.model('Check', checkSchema);

// Anmerkung:
// In den phrases werden unsinnigerweise noch die Werte dirty und state mitgespeichert,
// die aus der Logik der Formularbearbeitung stammen.
