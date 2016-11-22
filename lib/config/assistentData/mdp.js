'use strict';

// Fragen und Kompetenzbeschreibungen für die Annahmephase MDP

// ###########################################
// Annahmephase
// ###########################################
module.exports = {
    "profession" : "Mediengestalter/in Digital/Print",
    "abbreviation" : "mdp",
    "questions" : [
        {
            "id" : 10,
            "question" : "Worauf muss bei der Analyse des Kundenauftrags geachtet werden?",
            "defaultterms" : "die Umsetzbarkeit, die Kundenwünsche, Genauigkeit",
            "phase" : "beginning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 100,
                    "statement" : "Anfragen des Auftraggebers im Hinblick auf ### analysieren",
                    "phase" : "beginning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 20,
            "question" : "Worauf muss bei der fachlichen Beratung des Kunden geachtet werden?",
            "defaultterms" : "den Zeitpunkt der Fertigstellung, den Einsatzzweck",
            "phase" : "beginning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 110,
                    "statement" : "den Auftraggeber hinsichtlich ### beraten",
                    "phase" : "beginning",
                    "cat" : "f"
                },
                {
                    "id" : 120,
                    "statement" : "Kosten für ### überschlägig kalkulieren",
                    "phase" : "beginning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 30,
            "question" : "Welches Produkt wird erstellt?",
            "defaultterms" : "ein Angebot, ein Rebrief, ein Logo",
            "input": "",
            "phase" : "beginning",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 130,
                    "statement" : "### systematisch erstellen",
                    "phase" : "beginning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 40,
            "question" : "Welche Vorschriften, Normen, Gesetze müssen berücksichtigt werden?",
            "defaultterms" : "kulturellen Normen, dem Urheberrecht",
            "input": "",
            "phase" : "beginning",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 140,
                    "statement" : "nach ### recherchieren",
                    "phase" : "beginning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 50,
            "question" : "Worauf muss bei der Kommunikation mit dem Kunden geachtet werden?",
            "defaultterms" : "Serviceorientierung, Fachlichkeit, Freundlichkeit, Sachlichkeit",
            "input": "",
            "phase" : "beginning",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 150,
                    "statement" : "dem Auftraggeber gegenüber mit ### auftreten",
                    "phase" : "beginning",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 60,
            "question" : "Mit welchen Abteilungen/Mitarbeitern wird zusammengearbeitet?",
            "defaultterms" : "dem Controlling, der Kundenberatung, der Produktion",
            "input": "",
            "phase" : "beginning",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 160,
                    "statement" : "mit ### kommunizieren und kooperieren",
                    "phase" : "beginning",
                    "cat" : "s"
                }
            ]
        },
// ###########################################
// Planungsphase
// ###########################################
        {
            "id" : 100,
            "question" : "Worauf muss bei der Konzepterstellung geachtet werden?",
            "defaultterms" : "Kundenwünsche, die Umsetzbarkeit, kulturelle Normen, Trends, das Leistungsverzeichnis",
            "phase" : "planning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 200,
                    "statement" : "ein Konzept entwickeln und dabei auf ### achten",
                    "phase" : "planning",
                    "cat" : "f"
                },
                {
                    "id" : 210,
                    "statement" : "technische Berechnungen durchführen und dabei ### berücksichtigen",
                    "phase" : "planning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 110,
            "question" : "Worauf muss bei der Anfertigung von Zeichnungen/Skizzen geachtet werden?",
            "defaultterms" : "das grafische Konzept, die produktionstechnische Realisierbarkeit, technische Ressourcen, die Gestaltgesetze",
            "phase" : "planning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 220,
                    "statement" : "Zeichnungen/Skizzen anfertigen und dabei ### berücksichtigen",
                    "phase" : "planning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 120,
            "question" : "Welche erforderlichen Geräte, Materialien, Werkzeuge Ressourcen müssen festgelegt/disponiert werden?",
            "defaultterms" : "die Druckerei, eine Stanze, Prepress, den Satz, den Texter, die CD",
            "phase" : "planning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 230,
                    "statement" : "erforderliche(s) Material, Geräte, Werkzeuge, Ressourcen wie bspw. ### bestimmen",
                    "phase" : "planning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 130,
            "question" : "Welches Produkt wird erstellt?",
            "defaultterms" : "ein Konzept, Entwürfe",
            "phase" : "planning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 240,
                    "statement" : "### systematisch erstellen",
                    "phase" : "planning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 140,
            "question" : "Mit welchen Arbeitsgegenständen (Software, Werkzeugen, Geräten) wird gearbeitet?",
            "defaultterms" : "Papier, einen Stift, einen Computer, das Office-Paket",
            "phase" : "planning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 250,
                    "statement" : "### gezielt einsetzen",
                    "phase" : "planning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 150,
            "question" : "Worauf muss bei der Abstimmung mit dem Kunden geachtet werden?",
            "defaultterms" : "klare Absprachen, Produktvorstellungen vs. Umsetzbarkeit, Vertragskonformität",
            "phase" : "planning",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 260,
                    "statement" : "sich mit dem Auftraggeber in Bezug auf ### abstimmen",
                    "phase" : "planning",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 160,
            "question" : "Mit welchen Abteilungen/ Mitarbeitern wird zusammengearbeitet?",
            "defaultterms" : "dem Controlling, der Produktion",
            "phase" : "planning",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 270,
                    "statement" : "mit ### kommunizieren und kooperieren",
                    "phase" : "planning",
                    "cat" : "s"
                }
            ]
        },
// ###########################################
// Durchführungsphase
// ###########################################
        {
            "id" : 200,
            "question" : "Welche fachlichen Unterlagen müssen verstanden und umgesetzt werden?",
            "defaultterms" : "ein Konzept, die Kundenwünsche, das Rebrief",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 300,
                    "statement" : "### verstehen und umsetzen",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 210,
            "question" : "Welche Vorschriften, Normen, Gesetze müssen beachtet werden?",
            "defaultterms" : "das Urheberrecht, das Markenrecht, visuelle Codes, das Copyright, Bildrechte",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 310,
                    "statement" : "### beachten",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 220,
            "question" : "Welche Anforderungen werden an eine fachliche Fehlerbeseitigung gestellt?",
            "defaultterms" : "das Druckverfahren, das Ausschießen, Dateikonventionen",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 320,
                    "statement" : "Fehler beheben und dabei ### berücksichtigen",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 230,
            "question" : "Welche Arbeiten werden durchgeführt?",
            "defaultterms" : "die Umsetzung des Logos in AI, die Reinzeichnung, das Ausschiessen",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 330,
                    "statement" : "### systematisch dokumentieren",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 240,
            "question" : "Worauf muss bei der Kommunikation mit dem Kunden geachtet werden?",
            "defaultterms" : "Serviceorientierung, Fachlichkeit, Freundlichkeit, Sachlichkeit",
            "phase" : "operation",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 340,
                    "statement" : "dem Auftraggeber gegenüber mit ### auftreten",
                    "phase" : "operation",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 250,
            "question" : "Mit welchen Abteilungen/Mitarbeitern wird zusammengearbeitet?",
            "defaultterms" : "dem Controlling, der Produktion",
            "phase" : "operation",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 350,
                    "statement" : "mit ### kommunizieren und kooperieren",
                    "phase" : "operation",
                    "cat" : "s"
                }
            ]
        },
// ###########################################
// Abschlussphase
// ###########################################
        {
            "id" : 300,
            "question" : "Welche Anforderungen werden an die Analyse von Kundenreklamationen gestellt?",
            "defaultterms" : "die Rechtssicherheit, die Rücksprache mit der Rechtsabteilung, den Abgleich mit Kundenwünschen und Rebrief, die technische Analyse",
            "phase" : "ending",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 400,
                    "statement" : "Reklamationen des Auftraggebers analysieren und dabei ### beachten",
                    "phase" : "ending",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 310,
            "question" : "Worauf muss bei der Behebung von Reklamationen geachtet werden?",
            "defaultterms" : "Sachlichkeit, schnelles Arbeit, Kundenorientierung, den Ableich",
            "phase" : "ending",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 410,
                    "statement" : "Reklamationen des Auftraggebers beheben und dabei auf ### achten",
                    "phase" : "ending",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 320,
            "question" : "Worauf muss bei der Übergabe an den Auftraggeber geachtet werden?",
            "defaultterms" : "ein geschlossenes Auftreten, die Präsentation, das Vorbereiten von Argumenten",
            "phase" : "ending",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 420,
                    "statement" : "die Übergabe an den Auftraggeber vorbereiten und dabei sich dabei auf ### konzentrieren",
                    "phase" : "ending",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 330,
            "question" : "Welche Anforderungen werden an das Auftreten gegenüber dem Kunden gestellt?",
            "defaultterms" : "Serviceorientierung, Überzeugungskraft, Freundlichkeit, Sachlichkeit",
            "phase" : "ending",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 430,
                    "statement" : "dem Auftraggeber gegenüber mit ### auftreten",
                    "phase" : "ending",
                    "cat" : "s"
                }
            ]
        }
    ]
};
