'use strict';

module.exports = {
    "title" : "Flyer gestalten",
    "purpose" : "Zwischenstand 1. Lehrjahr",
    "description" : "Der Kunde wünscht einen Flyer für seine Weihnachtsaktion...",
    "created" : Date.now(),
    "owner" : "5408d90722437bbb05147270",
    "updates" : [
        {
            "event" : "exassend",
            "date" : 1410204257780,
            "perspective" : "they",
            "addressee" : "Klaus Petersen"
        },
        {
            "event" : "exassstart",
            "date" : 1410204255268,
            "perspective" : "they",
            "addressee" : "Klaus Petersen"
        },
        {
            "event" : "inviteexass",
            "date" : 1410204044684,
            "perspective" : "me",
            "addressee" : "Klaus Petersen"
        },
        {
            "event" : "self",
            "date" : 1410203863918,
            "perspective" : "me"
        },
        {
            "perspective" : "me",
            "date" : 1410203634095,
            "event" : "created"
        }
    ],
    "phrases" : [
        {
            "state" : "new",
            "dirty" : false,
            "cat" : "s",
            "phase" : "beginning",
            "statement" : "den Kunden telefonisch beraten",
            "id" : 1
        }
    ],
    "invitations" : [],
    "runs" : [
        {
            "type" : "self",
            "start_date" : 1410203863918,
            "end_date" : 1410203863918,
            "finished" : true,
            "phrases" : [
                {
                    "id" : 1,
                    "statement" : "den Kunden telefonisch beraten",
                    "phase" : "beginning",
                    "cat" : "s",
                    "dirty" : false,
                    "state" : "assessing",
                    "rating" : "3",
                    "note" : null
                }
            ]
        }
    ],
    "__v" : 0,
    "locked" : true
};