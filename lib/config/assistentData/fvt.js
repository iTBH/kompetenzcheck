'use strict';

// Fragen und Kompetenzbeschreibungen für die Annahmephase FVT

// ###########################################
// Annahmephase
// ###########################################
module.exports = {
    "profession" : "Fachkraft für Veranstaltungstechnik",
    "abbreviation" : "fvt",
    "questions" : [
        {
            "id" : 10,
            "question" : "Nach welchen Aspekten muss die Anfrage des Auftraggebers ausgewertet werden?",
            "defaultterms" : "Qualitätsanspruch und Budget, Arbeitsaufwand, Produktionsanforderung",
            "phase" : "beginning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 100,
                    "statement" : "die Anfrage eines Auftraggebers hinsichtlich ### auswerten",
                    "phase" : "beginning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 20,
            "question" : "Welche technischen/wirtschaftlichen/fachlichen Vorraussetzungen müssen hinsichtlich der Durchführbarkeit des Auftrags überprüft werden?",
            "defaultterms" : "örtliche Gegebenheiten, Bonität des Kunden, betriebliche Ressourcen",
            "phase" : "beginning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 110,
                    "statement" : "die Vorraussetzung zur Durchführbarkeit des Auftrags unter Berücksichtigung von ### ermitteln",
                    "phase" : "beginning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 30,
            "question" : "Was muss die fachliche Beratung des Auftraggebers beinhalten?",
            "defaultterms" : "begründete Produktauswahl, begründete Dienstleistungsauswahl, Aufzeigen von Alternativen",
            "input": "",
            "phase" : "beginning",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 130,
                    "statement" : "den Auftraggeber hinsichtlich ### beraten",
                    "phase" : "beginning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 40,
            "question" : "Welche außerbetrieblichen Ressourcen werden für die Durchführung des Auftrags benötigt?",
            "defaultterms" : "Experten, Material, Technik, Werkzeug",
            "input": "",
            "phase" : "beginning",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 140,
                    "statement" : "benötigte Ressourcen wie ### ermitteln",
                    "phase" : "beginning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 50,
            "question" : "Welche Geräte/Materialien/Werkzeuge/Maschinen werden voraussichtlich benötigt?",
            "defaultterms" : "Verbrauchsmaterialien, geeignete Technik",
            "input": "",
            "phase" : "beginning",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 150,
                    "statement" : "nach ### recherchieren und die Ergebnisse dokumentieren",
                    "phase" : "beginning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 60,
            "question" : "Für welche Posten wird eine Kalkulation erstellt?",
            "defaultterms" : "externe Dienstleitung, Mietkosten, Arbeits- und Transportaufwand",
            "input": "",
            "phase" : "beginning",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 160,
                    "statement" : "zu erwartenden Kosten wie ### kalkulieren",
                    "phase" : "beginning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 70,
            "question" : "Wie muss ein Beratungsgespräch geführt werden?",
            "defaultterms" : "zielorientiert, serviceorientiert, kundenorientiert",
            "input": "",
            "phase" : "beginning",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 170,
                    "statement" : "ein Beratungsgespräch ### führen",
                    "phase" : "beginning",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 80,
            "question" : "Mit welchen Mitarbeitern/Abteilungen/Gewerken wird in der Auftragsannahme zusammengearbeitet?",
            "defaultterms" : "Kundenkontakt, Personalabteilung, Verleih",
            "input": "",
            "phase" : "beginning",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 180,
                    "statement" : "das eigene Handeln planvoll mit ### abstimmen",
                    "phase" : "beginning",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 90,
            "question" : "In welcher Sozialform (Teamarbeit/Einzelarbeit/Gruppenarbeit) wird gearbeitet?",
            "defaultterms" : "Teamarbeit mit einem Ansprechpartner für den Kunden",
            "input": "",
            "phase" : "beginning",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 190,
                    "statement" : "### für den Arbeitsprozess organisieren und steuern",
                    "phase" : "beginning",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 95,
            "question" : "Welches Vorgehen muss zur Konfliktregelung angewendet werden?",
            "defaultterms" : "Kommunikation, Identifikation der Konfliktursache",
            "input": "",
            "phase" : "beginning",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 160,
                    "statement" : "einen Konflikt durch ### konstruktiv lösen",
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
            "question" : "Welche Gesetze/Normen/Vorschriften müssen bei der Auftragsplanung angewendet werden?",
            "defaultterms" : "VDE-Normen, Brandschutz, Lärmschutz, VStättVO",
            "phase" : "planning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 200,
                    "statement" : "### anwenden",
                    "phase" : "planning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 110,
            "question" : "Welche technischen Zeichnungen/Pläne/Konzepte müssen ausgewertet werden?",
            "defaultterms" : "Baupläne, Skizzen des Auftraggebers, Beschallungsplan",
            "phase" : "planning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 220,
                    "statement" : "### für die Auftragsdurchführung auswerten",
                    "phase" : "planning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 120,
            "question" : "Welche räumlichen Gegebenheiten müssen geprüft werden?",
            "defaultterms" : "Statische und konstruktionsbedingte Besonderheiten am Arbeitsort, laufender Betrieb",
            "phase" : "planning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 230,
                    "statement" : "unter Berücksichtigung von ### die Durchführbarkeit des Auftrags prüfen",
                    "phase" : "planning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 130,
            "question" : "Welche technischen Zeichnungen/Pläne/Konzepte müssen erstellt werden?",
            "defaultterms" : "Beschallungskonzept, Ablaufplan der Veranstaltung, Skizzen",
            "phase" : "planning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 240,
                    "statement" : "### fachgerecht erstellen",
                    "phase" : "planning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 140,
            "question" : "Welches erforderliche Gerät/Material/Werkzeug/Technik muss für die Auftragsdurchführung disponiert werden?",
            "defaultterms" : "Geräte, Materialien, Werkzeuge, Maschine",
            "phase" : "planning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 250,
                    "statement" : "### auswählen und disponieren",
                    "phase" : "planning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 150,
            "question" : "Welche Planungen müssen zur Durchführung des Auftrags erstellen werden?",
            "defaultterms" : "Materialdisposition, Personalplanung, Logistik",
            "phase" : "planning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 260,
                    "statement" : "### nach Vorgaben erstellen und abstimmen",
                    "phase" : "planning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 160,
            "question" : "Wie muss ein Beratungsgespräch geführt werden?",
            "defaultterms" : "zielorientiert, serviceorientiert, kundenorientiert",
            "phase" : "planning",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 270,
                    "statement" : "ein Beratungsgespräch auf Grundlage der Auftragsanforderungen ### führen",
                    "phase" : "planning",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 170,
            "question" : "Was wird in einem Feedbackgespräch geäußert?",
            "defaultterms" : "positive und negative Kritik, fachliche Details",
            "phase" : "planning",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 280,
                    "statement" : "in einem Feedbackgespräch ### konstruktiv für sich verwerten",
                    "phase" : "planning",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 180,
            "question" : "Mit welchen Mitarbeitern/Abteilungen/Gewerken wird zusammengearbeitet?",
            "defaultterms" : "Teamleiter, Haustechnik, Verleih",
            "phase" : "planning",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 285,
                    "statement" : "das eigene Handeln planvoll mit ### abstimmen",
                    "phase" : "planning",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 190,
            "question" : "In welcher Sozialform (Teamarbeit/Einzelarbeit/Gruppenarbeit) wird gearbeitet?",
            "defaultterms" : "Einzel- maximal Teamarbeit",
            "phase" : "planning",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 290,
                    "statement" : "### für den Arbeitsprozess organisieren und steuern",
                    "phase" : "planning",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 195,
            "question" : "Welches Vorgehen muss zur Konfliktregelung angewendet werden?",
            "defaultterms" : "Eingehen auf Kundenwünsche, verständliche Vermittlung fachlicher Probleme ",
            "phase" : "planning",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 295,
                    "statement" : "einen Konflikt durch ### konstruktiv lösen",
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
            "question" : "Welche Gesetze/Normen/Vorschriften müssen bei der Auftragsdurchführung angewendet werden?",
            "defaultterms" : "VDE-Normen, Brandschutz, Lärmschutz, VStättVO",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 300,
                    "statement" : "### anwenden",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 210,
            "question" : "Welche räumlichen Gegebenheiten müssen beachtet werden?",
            "defaultterms" : "statische und konstruktionsbedingte Besonderheiten am Arbeitsort, laufender Betrieb",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 310,
                    "statement" : "### bei der Durchführung beachten",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 220,
            "question" : "Welche technischen Zeichnungen/Pläne/Konzepte müssen angewendet werden?",
            "defaultterms" : "Beschallungsplan, Lichtkonzept, Bestuhlungsplan",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 320,
                    "statement" : "### fachgerecht anwenden",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 230,
            "question" : "Worauf muss bei der fachgerechten Auftragsdurchführung geachtet werden?",
            "defaultterms" : "Sicherheitsregeln, Sauberkeit, ausführlicher Funktionstest",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 330,
                    "statement" : "den Auftrag unter Berücksichtigung von ### durchführen",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 240,
            "question" : "Worauf muss bei der Fehleranalyse geachtet werden?",
            "defaultterms" : "systematisches Vorgehen, Prüfprotokoll",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 340,
                    "statement" : "Fehler unter Berücksichtigung von ### analysieren",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 250,
            "question" : "Worauf muss bei der Fehlerbeseitigung geachtet werden?",
            "defaultterms" : "Nachhaltigkeit, Sauberkeit, fachgerechte Lösung",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 350,
                    "statement" : "Fehler unter Berücksichtung von ### beheben",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 260,
            "question" : "Welche Arbeiten müssen dokumentiert werden?",
            "defaultterms" : "Leitungswege, Belegungen, Projektablauf",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 360,
                    "statement" : "### fachgerecht dokumentieren",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 270,
            "question" : "Was muss bei der Übergabe an den Auftraggeber beachtet werden?",
            "defaultterms" : "Einweisung, Übergabeprotoll,  Dokumentation, zukünftige Dienstleistungen",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 370,
                    "statement" : "die Übergabe und an den Auftraggeber unter Berücksichtigung von ### durchführen",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 275,
            "question" : "Wie muss ein Fachgespräch geführt werden?",
            "defaultterms" : "mit Fachsprache, zielorientiert",
            "phase" : "operation",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 375,
                    "statement" : "ein Fachgespräch ### führen",
                    "phase" : "operation",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 280,
            "question" : "Mit welchen Mitarbeitern/Abteilungen/Gewerken wird zusammengearbeitet?",
            "defaultterms" : "externe Dienstleister, externe Gewerke, Haustechnik",
            "phase" : "operation",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 380,
                    "statement" : "das eigene Handeln planvoll mit ### abstimmen",
                    "phase" : "operation",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 285,
            "question" : "In welcher Sozialform (Teamarbeit/Einzelarbeit/Gruppenarbeit) wird gearbeitet?",
            "defaultterms" : "in Einzel-maximal Teamarbeit, je nach Aufwand Team- oder Gruppenarbeit",
            "phase" : "operation",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 385,
                    "statement" : "### für den Arbeitsprozess organisieren und steuern",
                    "phase" : "operation",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 290,
            "question" : "Welches Vorgehen muss zur Konfliktregelung angewendet werden?",
            "defaultterms" : "fachliche Probleme verständlich vermitteln",
            "phase" : "operation",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 390,
                    "statement" : "einen Konflikt durch ### konstruktiv lösen",
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
            "question" : "Nach welchen Aspekten muss eine Reklamation ausgewertet werden?",
            "defaultterms" : "Verursacher, Kulanz, Abgleich mit Angebot, Rechtssicherheit",
            "phase" : "ending",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 400,
                    "statement" : "eine Reklamation unter Berücksichtigung von ### auswerten",
                    "phase" : "ending",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 310,
            "question" : "Worauf muss bei der fachgerechten Behebung einer Reklamation geachtet werden?",
            "defaultterms" : "Verursacher, nachhaltige Lösung, Ableich mit Pflichtenheft",
            "phase" : "ending",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 410,
                    "statement" : "eine Reklamation des Auftraggebers unter Berücksichtigung von ### beheben",
                    "phase" : "ending",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 320,
            "question" : "Worauf muss bei der Überprüfung des rückläufigen Materials geachtet werden?",
            "defaultterms" : "Funktionskontrolle, Abnutzung, Sauberkeit, Seriennummer, Vollständigkeit",
            "phase" : "ending",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 420,
                    "statement" : "das rückläufige Material auf ### prüfen",
                    "phase" : "ending",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 330,
            "question" : "Wie muss mit dem geprüften Material weiter verfahren werden?",
            "defaultterms" : "warten, einfache Reparaturen durchführen, Dispositionstatus aktualisieren",
            "phase" : "ending",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 430,
                    "statement" : "das rückläufige Material ###",
                    "phase" : "ending",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 340,
            "question" : "Was muss bei der abschließenden Rechnungsstellung beachtet werden?",
            "defaultterms" : "Mehrkosten erläutern, Rechnungsform, externe Dienstleister",
            "phase" : "ending",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 440,
                    "statement" : "eine abschließende Rechnungsstellung unter Berücksichtigung von ### erstellen",
                    "phase" : "ending",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 350,
            "question" : "Wie muss ein Beratungsgespräch geführt werden?",
            "defaultterms" : "zukunftsorientiert, kundenbindend, dienstleistungsorientiert",
            "phase" : "ending",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 450,
                    "statement" : "ein Beratungsgespräch ### führen",
                    "phase" : "ending",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 360,
            "question" : "Was wird in einem Feedbackgespräch geäußert?",
            "defaultterms" : "Ansätze zur Aufklärung von Fehlkommunikation, Fehlkommunikation, positive und negative Kritik",
            "phase" : "ending",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 460,
                    "statement" : "in einem Feedbackgespräch ### konstruktiv für sich verwerten",
                    "phase" : "ending",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 370,
            "question" : "Mit welchen Mitarbeitern/Abteilungen/Gewerken wird zusammengearbeitet?",
            "defaultterms" : "interne und externe Rechnungsabteilung",
            "phase" : "ending",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 470,
                    "statement" : "das eigene Handeln planvoll mit ### abstimmen",
                    "phase" : "ending",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 380,
            "question" : "In welcher Sozialform (Teamarbeit/Einzelarbeit/Gruppenarbeit) wird gearbeitet?",
            "defaultterms" : "Einzelarbeit mit einem Ansprechpartner für den Kunden",
            "phase" : "ending",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 480,
                    "statement" : "### organisieren und steuern",
                    "phase" : "ending",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 390,
            "question" : "Welches Vorgehen muss zur Konfliktregelung angewendet werden?",
            "defaultterms" : "kompromissorientiertes Vorgehen, zukunftsorientiertes Vorgehen, Rabatte für Folgeaufträge",
            "phase" : "ending",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 490,
                    "statement" : "einen Konflikt durch ### konstruktiv lösen",
                    "phase" : "ending",
                    "cat" : "s"
                }
            ]
        }
    ]
};
