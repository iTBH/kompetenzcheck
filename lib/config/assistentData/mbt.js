'use strict';

// Fragen und Kompetenzbeschreibungen für die Annahmephase MBT

// ###########################################
// Annahmephase
// ###########################################
module.exports = {
    "profession" : "Mediengestalter/in Bild/Ton",
    "abbreviation" : "mbt",
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
                    "statement" : "kann die Anfrage eines Auftraggebers hinsichtlich ### auswerten",
                    "phase" : "beginning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 20,
            "question" : "Was muss die fachliche Beratung des Auftraggebers beinhalten?",
            "defaultterms" : "begründete Produktauswahl, begründete Dienstleistungsauswahl, Kosten, Aufzeigen von Alternativen",
            "phase" : "beginning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 110,
                    "statement" : "kann den Auftraggeber hinsichtlich ### beraten",
                    "phase" : "beginning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 30,
            "question" : "Welche technischen/wirtschaftlichen/fachlichen Vorraussetzungen müssen hinsichtlich der Durchführbarkeit des Auftrags überprüft werden?",
            "defaultterms" : "örtliche Gegebenheiten, Bonität des Kunden, betriebliche Ressourcen, rechtliche Aspekte",
            "input": "",
            "phase" : "beginning",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 130,
                    "statement" : "kann die Vorraussetzung zur Durchführbarkeit des Auftrags unter Berücksichtigung von ### ermitteln",
                    "phase" : "beginning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 40,
            "question" : "Welche außerbetrieblichen Ressourcen werden für die Durchführung des Auftrags benötigt?",
            "defaultterms" : "Experten, Material, Technik, Werkzeug, Räumlichkeiten",
            "input": "",
            "phase" : "beginning",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 140,
                    "statement" : "kann benötigte Ressourcen wie ### ermitteln",
                    "phase" : "beginning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 50,
            "question" : "Welche Geräte/Materialien/Werkzeuge/Maschinen/Örtlichkeiten werden voraussichtlich benötigt?",
            "defaultterms" : "Verbrauchsmaterialien, geeignete Technik, geeignete Örtlichkeiten",
            "input": "",
            "phase" : "beginning",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 150,
                    "statement" : "kann nach ### recherchieren und die Ergebnisse dokumentieren",
                    "phase" : "beginning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 60,
            "question" : "Für welche Posten wird eine Kalkulation erstellt?",
            "defaultterms" : "externe Dienstleistung, Mietkosten, Arbeits- und Transportaufwand, Verbrauchsmaterial",
            "input": "",
            "phase" : "beginning",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 160,
                    "statement" : "kann zu erwartenden Kosten wie ### kalkulieren",
                    "phase" : "beginning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 70,
            "question" : "Welche Planungen/Dokumente müssen in der Auftragsannahme erstellt werden?",
            "defaultterms" : "Personalplanung, Zeitplanung, Materialplanung, Projektablaufplanung, Angebot",
            "input": "",
            "phase" : "beginning",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 170,
                    "statement" : "kann ### vorbereiten und erstellen",
                    "phase" : "beginning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 80,
            "question" : "Wie muss ein Beratungsgespräch geführt werden?",
            "defaultterms" : "zielorientiert, serviceorientiert, kundenorientiert",
            "input": "",
            "phase" : "beginning",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 180,
                    "statement" : "kann ein Beratungsgespräch ### führen",
                    "phase" : "beginning",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 90,
            "question" : "Was wird in einem Feedbackgespräch geäußert?",
            "defaultterms" : "positive und negative Kritik, fachliche Details, Verbesserungsvorschläge",
            "input": "",
            "phase" : "beginning",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 190,
                    "statement" : "kann in einem Feedbackgespräch ### konstruktiv für sich verwerten",
                    "phase" : "beginning",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 93,
            "question" : "Mit welchen Mitarbeitern/Abteilungen/Gewerken wird in der Auftragsannahme zusammengearbeitet?",
            "defaultterms" : "Kundenkontakt, Personalabteilung, Verleih, Experten",
            "input": "",
            "phase" : "beginning",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 193,
                    "statement" : "kann das eigene Handeln planvoll mit ### abstimmen",
                    "phase" : "beginning",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 96,
            "question" : "In welcher Sozialform (Teamarbeit/Einzelarbeit/Gruppenarbeit) wird gearbeitet?",
            "defaultterms" : "Teamarbeit mit einem Ansprechpartner für den Kunden, Einzelarbeit",
            "input": "",
            "phase" : "beginning",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 196,
                    "statement" : "kann ### für den Arbeitsprozess organisieren und steuern",
                    "phase" : "beginning",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 98,
            "question" : "Welches Vorgehen muss zur Konfliktregelung angewendet werden?",
            "defaultterms" : "Kommunikation, Identifikation der Konfliktursache",
            "input": "",
            "phase" : "beginning",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 198,
                    "statement" : "kann einen Konflikt durch ### konstruktiv lösen",
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
            "defaultterms" : "VDE-Normen, Umweltschutz, BildscharbV, Datenschutzgesetz, Video- und Audio-Normen, Persönlichkeitsrecht, Urheberrecht",
            "phase" : "planning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 200,
                    "statement" : "kann nach ### recherchieren und die Ergebnisse dokumentieren",
                    "phase" : "planning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 110,
            "question" : "Welche Informationen werden für die Auftragsdurchführung benötigt?",
            "defaultterms" : "aktuelle Gestaltungstrends, aktuelle Techniktrends, örtliche Gegebenheiten",
            "phase" : "planning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 220,
                    "statement" : "kann nach ### für die Auftragsdurchführung recherchieren und die Ergebnisse auswerten",
                    "phase" : "planning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 120,
            "question" : "Welches erforderliche Gerät/Material/Werkzeug/Technik muss für die Auftragsdurchführung disponiert werden?",
            "defaultterms" : "Kameraequipment, Tonequipment, Lichtequipment, Editingplatz",
            "phase" : "planning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 230,
                    "statement" : "kann ### auswählen und disponieren",
                    "phase" : "planning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 130,
            "question" : "Welches erforderliche Gerät/Material/Werkzeug/Technik muss für die Auftragsdurchführung geprüft werden?",
            "defaultterms" : "Kameraequipment, Tonequipment, Lichtequipment, Editingplatz",
            "phase" : "planning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 240,
                    "statement" : "kann ### auf Funktion prüfen",
                    "phase" : "planning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 140,
            "question" : "Welche Planungen müssen zur Durchführung des Auftrags erstellen werden?",
            "defaultterms" : "Materialdisposition, Personalplanung, Zeitplanung, Logistik, technische Umsetzung, gestalterische Umsetzung",
            "phase" : "planning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 250,
                    "statement" : "kann ### nach Vorgaben erstellen und abstimmen",
                    "phase" : "planning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 150,
            "question" : "Wie muss ein Beratungsgespräch geführt werden?",
            "defaultterms" : "zielorientiert, serviceorientiert, kundenorientiert",
            "phase" : "planning",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 260,
                    "statement" : "kann ein Beratungsgespräch auf Grundlage der Auftragsanforderungen ### führen",
                    "phase" : "planning",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 160,
            "question" : "Was wird in einem Feedbackgespräch geäußert?",
            "defaultterms" : "positive und negative Kritik, fachliche Details, Verbesserungsvorschläge",
            "phase" : "planning",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 270,
                    "statement" : "kann in einem Feedbackgespräch ### konstruktiv für sich verwerten",
                    "phase" : "planning",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 170,
            "question" : "Mit welchen Mitarbeitern/Abteilungen/Gewerken wird zusammengearbeitet?",
            "defaultterms" : "Teamleiter, Haustechnik, Verleih, Experten",
            "phase" : "planning",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 280,
                    "statement" : "kann das eigene Handeln planvoll mit ### abstimmen",
                    "phase" : "planning",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 180,
            "question" : "In welcher Sozialform (Teamarbeit/Einzelarbeit/Gruppenarbeit) wird gearbeitet?",
            "defaultterms" : "Einzel- maximal Teamarbeit",
            "phase" : "planning",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 290,
                    "statement" : "kann ### für den Arbeitsprozess organisieren und steuern",
                    "phase" : "planning",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 190,
            "question" : "Welches Vorgehen muss zur Konfliktregelung angewendet werden?",
            "defaultterms" : "Kommunikation, Eingehen auf Kundenwünsche, verständliche Vermittlung fachlicher Probleme",
            "phase" : "planning",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 295,
                    "statement" : "kann einen Konflikt durch ### konstruktiv lösen",
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
            "defaultterms" : "VDE-Normen, Umweltschutz, BildscharbV, Datenschutzgesetz, Video- und Audio-Normen, Persönlichkeitsrecht, Urheberrecht",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 300,
                    "statement" : "kann ### anwenden",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 210,
            "question" : "Welches erforderliche Gerät/Material/Technik muss für die Auftragsdurchführung aufgebaut und eingerichtet werden?",
            "defaultterms" : "Kameraequipment, Tonequipment, Lichtequipment, Editingplatz",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 310,
                    "statement" : "kann ### aufbauen und einrichten",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 220,
            "question" : "Welches erforderliche Gerät/Material/Technik muss für die Auftragsdurchführung bedient werden?",
            "defaultterms" : "Kameraequipment, Tonequipment, Lichtequipment, Editingplatz",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 320,
                    "statement" : "kann ### bedienen",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 230,
            "question" : "Worauf muss bei der fachgerechten Auftragsdurchführung geachtet werden?",
            "defaultterms" : "Sicherheitsregeln, technischen Standards, gestalterischen Vorgaben, rechtlichen Vorgaben",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 330,
                    "statement" : "kann den Auftrag unter Berücksichtigung von ### durchführen",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 240,
            "question" : "Was muss bei der Analyse und Umsetzung von Korrekturwünschen beachtet werden?",
            "defaultterms" : "Umsetzbarkeit, Zeitplan, Budget, örtliche Gegebenheiten",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 340,
                    "statement" : "kann Korrekturwünsche des Auftraggebers unter Berücksichtigung von ### analysieren und umsetzen",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 250,
            "question" : "Worauf muss bei der Fehleranalyse geachtet werden?",
            "defaultterms" : "systematisches Vorgehen, Prüfprotokoll",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 350,
                    "statement" : "kann Fehler unter Berücksichtigung von ### analysieren",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 260,
            "question" : "Worauf muss bei der Fehlerbeseitigung geachtet werden?",
            "defaultterms" : "Nachhaltigkeit, Sauberkeit, fachgerechte Lösung, Kosten, Sicherheitsvorschirften, Normen",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 360,
                    "statement" : "kann Fehler unter Berücksichtung von ### beheben",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 265,
            "question" : "Welche Arbeiten müssen während der Auftragsdurchführung dokumentiert werden?",
            "defaultterms" : "vorgenommene Einstellungen, Projektablauf, Arbeitszeit",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 365,
                    "statement" : "kann ### fachgerecht dokumentieren",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 270,
            "question" : "Wie muss ein Fachgespräch geführt werden?",
            "defaultterms" : "mit Fachsprache, zielorientiert, freundlich",
            "phase" : "operation",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 370,
                    "statement" : "kann ein Fachgespräch ### führen",
                    "phase" : "operation",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 275,
            "question" : "Was wird in einem Feedbackgespräch geäußert?",
            "defaultterms" : "positive und negative Kritik, fachliche Details, Verbesserungsvorschläge",
            "phase" : "operation",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 375,
                    "statement" : "kann in einem Feedbackgespräch ### konstruktiv für sich verwerten",
                    "phase" : "operation",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 280,
            "question" : "Mit welchen Mitarbeitern/Abteilungen/Gewerken wird zusammengearbeitet?",
            "defaultterms" : "externe Dienstleister, Teamleiter, Kunden, Mitarbeiter",
            "phase" : "operation",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 380,
                    "statement" : "kann das eigene Handeln planvoll mit ### abstimmen",
                    "phase" : "operation",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 285,
            "question" : "In welcher Sozialform (Teamarbeit/Einzelarbeit/Gruppenarbeit) wird gearbeitet?",
            "defaultterms" : "Einzel- und Teamarbeit",
            "phase" : "operation",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 385,
                    "statement" : "kann ### für den Arbeitsprozess organisieren und steuern",
                    "phase" : "operation",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 290,
            "question" : "Welches Vorgehen muss zur Konfliktregelung angewendet werden?",
            "defaultterms" : "fachliche Probleme verständlich vermitteln, Kommunikation, Eingehen auf Kundenwünsche",
            "phase" : "operation",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 390,
                    "statement" : "kann einen Konflikt durch ### konstruktiv lösen",
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
            "question" : "Worauf muss bei der Produktübergabe an den Auftraggeber geachtet werden?",
            "defaultterms" : "gemäß den Vorgaben, technisch einwandfreie Übergabe",
            "phase" : "ending",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 400,
                    "statement" : "kann die Produktübergabe an den Auftraggeber ### durchführen",
                    "phase" : "ending",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 310,
            "question" : "Wie muss mit dem rückläufigen Equipment verfahren werden?",
            "defaultterms" : "im Hinblick auf Vollständigkeit kontrollieren, auf Funktion prüfen, warten, einfache Reparaturen durchführen, Dispositionstatus aktualisieren",
            "phase" : "ending",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 410,
                    "statement" : "kann das rückläufige Material ###",
                    "phase" : "ending",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 320,
            "question" : "Nach welchen Aspekten muss eine Reklamation ausgewertet werden?",
            "defaultterms" : "Verursacher, Kulanz, Abgleich mit Angebot, Rechtssicherheit",
            "phase" : "ending",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 420,
                    "statement" : "kann eine Reklamation unter Berücksichtigung von ### auswerten",
                    "phase" : "ending",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 330,
            "question" : "Worauf muss bei der fachgerechten Behebung einer Reklamation geachtet werden?",
            "defaultterms" : "Verursacher, nachhaltige Lösung, Abgleich mit Pflichtenheft, Kosten",
            "phase" : "ending",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 430,
                    "statement" : "kann eine Reklamation des Auftraggebers unter Berücksichtigung von ### beheben",
                    "phase" : "ending",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 340,
            "question" : "Was muss bei der abschließenden Rechnungsstellung beachtet werden?",
            "defaultterms" : "Mehrkosten erläutern (Zeit/Personal/Material), Rechnungsform, externe Dienstleister",
            "phase" : "ending",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 440,
                    "statement" : "kann eine abschließende Rechnungsstellung unter Berücksichtigung von ### erstellen",
                    "phase" : "ending",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 345,
            "question" : "Wie muss ein Beratungsgespräch geführt werden?",
            "defaultterms" : "ukunftsorientiert, kundenbindend, dienstleistungsorientiert",
            "phase" : "ending",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 445,
                    "statement" : "kann ein Beratungsgespräch ### führen",
                    "phase" : "ending",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 350,
            "question" : "Was wird in einem Feedbackgespräch geäußert?",
            "defaultterms" : "Ansätze zur Aufklärung von Fehlkommunikation, Fehlkommunikation, positive und negative Kritik, Verbesserungsansätze",
            "phase" : "ending",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 450,
                    "statement" : "kann in einem Feedbackgespräch ### konstruktiv für sich verwerten",
                    "phase" : "ending",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 355,
            "question" : "Mit welchen Mitarbeitern/Abteilungen/Gewerken wird zusammengearbeitet?",
            "defaultterms" : "interne und externe Rechnungsabteilung, Teamleiter, Kunden",
            "phase" : "ending",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 455,
                    "statement" : "kann das eigene Handeln planvoll mit ### abstimmen",
                    "phase" : "ending",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 360,
            "question" : "In welcher Sozialform (Teamarbeit/Einzelarbeit/Gruppenarbeit) wird gearbeitet?",
            "defaultterms" : "Einzelarbeit mit einem Ansprechpartner für den Kunden",
            "phase" : "ending",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 460,
                    "statement" : "kann ### organisieren und steuern",
                    "phase" : "ending",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 365,
            "question" : "Welches Vorgehen muss zur Konfliktregelung angewendet werden?",
            "defaultterms" : "kompromissorientiertes Vorgehen, zukunftsorientiertes Vorgehen, Rabatte für Folgeaufträge",
            "phase" : "ending",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 465,
                    "statement" : "kann einen Konflikt durch ### konstruktiv lösen",
                    "phase" : "ending",
                    "cat" : "s"
                }
            ]
        }
    ]
};
