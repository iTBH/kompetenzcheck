'use strict';

// Fragen und Kompetenzbeschreibungen für die Annahmephase EEG

// ###########################################
// Annahmephase
// ###########################################
module.exports = {
    "profession" : "Elektroniker/in Energie- und Gebäudesysteme",
    "abbreviation" : "eeg",
    "questions" : [
        {
            "id" : 10,
            "question" : "Nach welchen Aspekten muss die Anfrage des Auftraggebers ausgewertet werden?",
            "defaultterms" : "Budget, Arbeitsaufwand, Anforderungen",
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
            "question" : "Was muss die fachliche Beratung des Auftraggebers beinhalten?",
            "defaultterms" : "begründete Produktauswahl, Kosten, Aufzeigen von Alternativen",
            "phase" : "beginning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 110,
                    "statement" : "den Auftraggeber hinsichtlich ### beraten",
                    "phase" : "beginning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 30,
            "question" : "Welche technischen/wirtschaftlichen/fachlichen Vorraussetzungen müssen hinsichtlich der Durchführbarkeit des Auftrags überprüft werden?",
            "defaultterms" : "örtliche Gegebenheiten, Bonität des Kunden, rechtliche Aspekte",
            "input": "",
            "phase" : "beginning",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 130,
                    "statement" : "die Voraussetzung zur Durchführbarkeit des Auftrags unter Berücksichtigung von ### ermitteln",
                    "phase" : "beginning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 40,
            "question" : "Welche betrieblichen Ressourcen werden für die Durchführung des Auftrags benötigt?",
            "defaultterms" : "Personal, Material, Technik",
            "input": "",
            "phase" : "beginning",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 140,
                    "statement" : "notwendige Ressourcen wie ### ermitteln",
                    "phase" : "beginning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 50,
            "question" : "Für welche Posten wird eine Kalkulation erstellt?",
            "defaultterms" : "Arbeits- und Transportaufwand, Verbrauchsmaterial",
            "input": "",
            "phase" : "beginning",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 150,
                    "statement" : "zu erwartende Kosten wie ### kalkulieren",
                    "phase" : "beginning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 60,
            "question" : "Welche Planungen/Dokumente müssen für die Auftragsannahme erstellt werden?",
            "defaultterms" : "Personalplanung, Zeitplanung, Materialplanung",
            "input": "",
            "phase" : "beginning",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 160,
                    "statement" : "ein(e) ### vorbereiten und erstellen",
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
            "question" : "Was wird in einem Feedbackgespräch geäußert?",
            "defaultterms" : "positive und negative Kritik, fachliche Details, Verbesserungsvorschläge",
            "input": "",
            "phase" : "beginning",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 180,
                    "statement" : "in einem Feedbackgespräch ### konstruktiv für sich verwerten",
                    "phase" : "beginning",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 90,
            "question" : "Mit welchen Mitarbeitern/Abteilungen/Gewerken wird in der Auftragsannahme zusammengearbeitet?",
            "defaultterms" : "Mitarbeiter, Abteilung, Gewerk",
            "input": "",
            "phase" : "beginning",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 190,
                    "statement" : "das eigene Handeln planvoll mit ### abstimmen",
                    "phase" : "beginning",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 95,
            "question" : "In welcher Sozialform (Teamarbeit/Einzelarbeit/Gruppenarbeit) wird gearbeitet?",
            "defaultterms" : "Teamarbeit mit einem Ansprechpartner für den Kunden, Einzelarbeit",
            "input": "",
            "phase" : "beginning",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 160,
                    "statement" : "### für den Arbeitsprozess organisieren und steuern",
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
                    "id" : 170,
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
            "defaultterms" : "VOG, BAG3, VDE",
            "phase" : "planning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 200,
                    "statement" : "nach ### recherchieren und die Ergebnisse dokumentieren",
                    "phase" : "planning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 110,
            "question" : "Welche technischen Zeichnungen/Pläne/Dokumentationen müssen ausgewertet werden?",
            "defaultterms" : "Skizzen des Auftraggebers, Installationsplan, Schaltpläne",
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
            "question" : "Welche technischen Zeichnungen/Pläne/Dokumentationen müssen erstellt werden?",
            "defaultterms" : "Verlegungsplan, Schaltungspläne, Skizzen",
            "phase" : "planning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 230,
                    "statement" : "### fachgerecht erstellen",
                    "phase" : "planning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 130,
            "question" : "Welche technischen Berechnungen müssen durchgeführt werden?",
            "defaultterms" : "Leitungslänge und -querschnitt",
            "phase" : "planning",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 240,
                    "statement" : "### fachgerecht berechnen",
                    "phase" : "planning",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 140,
            "question" : "Welches erforderliche Gerät/Material/Werkzeug/Technik muss für die Auftragsdurchführung disponiert werden?",
            "defaultterms" : "Betriebsmittel, Werkzeuge, Messgeräte",
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
            "question" : "Welche Planungen sind zur Durchführung des Auftrags erforderlich?",
            "defaultterms" : "Materialdisposition, Personalplanung, Zeitplanung",
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
            "defaultterms" : "Kundenkontakt, Meister",
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
            "defaultterms" : "Einzelarbeit, Teamarbeit",
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
            "defaultterms" : "Kommunikation, Eingehen auf Kundenwünsche, verständliche Vermittlung fachlicher Probleme",
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
            "defaultterms" : "VOG, BAG3, VDE",
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
            "question" : "Welche technischen Zeichnungen/Pläne/Dokumentationen müssen erfasst und umgesetzt werden?",
            "defaultterms" : "Skizzen des Auftraggebers, Installationsplan, Schaltpläne",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 310,
                    "statement" : "### erfassen und fachgerecht umsetzen",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 220,
            "question" : "Worauf muss bei der fachgerechten Auftragsdurchführung geachtet werde?",
            "defaultterms" : "Sicherheitsregeln, technischen Standards,  rechtlichen Vorgaben",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 320,
                    "statement" : "den Auftrag unter Berücksichtigung von ### durchführen",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 230,
            "question" : "Was muss bei der Analyse und Umsetzung von Korrekturwünschen beachtet werden?",
            "defaultterms" : "Zeitplan, Budget, örtliche Gegebenheiten",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 330,
                    "statement" : "Korrekturwünsche des Auftraggebers unter Berücksichtigung von ### analysieren und umsetzen",
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
            "question" : "Welche Prüfungen und Kontrollen müssen abschließend durchgeführt werden?",
            "defaultterms" : "Funktionsprüfung, VDE-Messung/Prüfung",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 360,
                    "statement" : "eine abschließende ### fachgerecht durchführen",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 270,
            "question" : "Welche Arbeiten müssen während der Auftragsdurchführung dokumentiert werden?",
            "defaultterms" : "durchgeführte Installationsarbeiten, Projektablauf, Arbeitszeit",
            "phase" : "operation",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 370,
                    "statement" : "### fachgerecht dokumentieren",
                    "phase" : "operation",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 275,
            "question" : "Wie muss ein Fachgespräch geführt werden?",
            "defaultterms" : "mit Fachsprache, zielorientiert, freundlich",
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
            "question" : "Was wird in einem Feedbackgespräch geäußert?",
            "defaultterms" : "positive und negative Kritik, fachliche Details, Verbesserungsvorschläge",
            "phase" : "operation",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 380,
                    "statement" : "in einem Feedbackgespräch ### konstruktiv für sich verwerten",
                    "phase" : "operation",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 285,
            "question" : "Mit welchen Mitarbeitern/Abteilungen/Gewerken wird zusammengearbeitet?",
            "defaultterms" : "Mitarbeiter, Abteilung, Gewerk",
            "phase" : "operation",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 385,
                    "statement" : "das eigene Handeln planvoll mit ### abstimmen",
                    "phase" : "operation",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 290,
            "question" : "In welcher Sozialform (Teamarbeit/Einzelarbeit/Gruppenarbeit) wird gearbeitet?",
            "defaultterms" : "Einzelarbeit, Teamarbeit",
            "phase" : "operation",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 390,
                    "statement" : "### für den Arbeitsprozess organisieren und steuern",
                    "phase" : "operation",
                    "cat" : "s"
                }
            ]
        },
        {
            "id" : 295,
            "question" : "Welches Vorgehen muss zur Konfliktregelung angewendet werden?",
            "defaultterms" : "fachliche Probleme verständlich vermitteln, Kommunikation, Eingehen auf Kundenwünsche",
            "phase" : "operation",
            "input": "",
            "cat" : "s",
            "competence" : [
                {
                    "id" : 395,
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
            "question" : "Worauf muss bei der Produktübergabe/Einweisung an den Auftraggeber geachtet werden?",
            "defaultterms" : "gemäß den Vorgaben, technisch einwandfrei",
            "phase" : "ending",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 400,
                    "statement" : "die Produktübergabe/Einweisung an den Auftraggeber ### durchführen",
                    "phase" : "ending",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 310,
            "question" : "Nach welchen Aspekten muss eine Reklamation ausgewertet werden?",
            "defaultterms" : "Verursacher, Kulanz, Abgleich mit Angebot",
            "phase" : "ending",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 410,
                    "statement" : "eine Reklamation unter Berücksichtigung von ### auswerten",
                    "phase" : "ending",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 320,
            "question" : "Worauf muss bei der fachgerechten Behebung einer Reklamation geachtet werden?",
            "defaultterms" : "Verursacher, nachhaltige Lösung, Abgleich mit Pflichtenheft",
            "phase" : "ending",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 420,
                    "statement" : "eine Reklamation des Auftraggebers unter Berücksichtigung von ### beheben",
                    "phase" : "ending",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 330,
            "question" : "Wie muss mit dem rückläufigen Gerät/Material/Werkzeug/Technik verfahren werden?",
            "defaultterms" : "auf Vollständigkeit kontrollieren, auf Funktion prüfen, warten",
            "phase" : "ending",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 430,
                    "statement" : "das rückläufige Gerät/Material/Werkzeug/Technik ###",
                    "phase" : "ending",
                    "cat" : "f"
                }
            ]
        },
        {
            "id" : 340,
            "question" : "Was muss bei der abschließenden Rechnungsstellung beachtet werden?",
            "defaultterms" : "Mehrkosten erläutern, Rechnungsform",
            "phase" : "ending",
            "input": "",
            "cat" : "f",
            "competence" : [
                {
                    "id" : 440,
                    "statement" : "eine abschließende Rechnungsstellung unter Berücksichtigung von ### vornehmen",
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
            "defaultterms" : "Ansätze zur Klärung von Fehlkommunikation, positive und negative Kritik, Verbesserungsansätze",
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
            "defaultterms" : "Rechnungsabteilung, Meister, Kunden",
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
            "defaultterms" : "Einzelarbeit, Teamarbeit",
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
            "defaultterms" : "kompromissorientiertes Vorgehen, zukunftsorientiertes Vorgehen",
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
