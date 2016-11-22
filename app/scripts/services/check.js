'use strict';

angular.module('desktopApp')
    .factory('CheckService', ['Restangular', 'PartnerService', function (Restangular, PartnerService) {

        // Statements, die im View (Dashboard/Lerneransicht) ausgegeben werden,
        // wenn in getEventText() das Ereignis reinkommt.
        var updates = {
            created: {
                text: " <span class='fa fa-file-o'></span><span class='action-text'> Ich habe den <strong> Check erstellt</strong>. </span>"
            },
            copied: {
                text: "<span class='fa fa-files-o'></span><span class='action-text'> Ich habe den <strong>Check dupliziert</strong>.</span>"
            },
            assignedTo: {
                text: "<span class='fa fa-share'></span><span class='action-text'> Ich habe <strong>###</strong> den <strong>Check zugewiesen</strong>.</span>"
            },
            assignedFrom: {
                text: "<span class='action-text'><strong>###</strong> hat mir den <strong>Check zugewiesen</strong>.</span>"
            },
            accepted: {
                text: "<span class='action-text'>Ich habe den zugewiesenen <strong>Check angenommen</strong>.</span>"
            },
            acceptedBy: {
                text: "<span class='fa fa-plus-square-o'></span><span class='action-text'> <strong>###</strong> hat den zugewiesenen <strong>Check angenommen</strong>.</span>"
            },
            rejected: {
                text: "<span class='fa fa-ban'></span><span class='action-text'> Ich habe den zugewiesenen <strong>Check abgelehnt</strong>.</span>"
            },
            rejectedBy: {
                text: "<span class='fa fa-ban'></span><span class='action-text'> <strong>###</strong> hat den zugewiesenen <strong>Check abgelehnt</strong>.</span>"
            },
            self: {
                text: "<span class='fa fa-dot-circle-o'></span><span class='action-text'> Ich habe eine <strong>Selbsteinschätzung</strong> durchgeführt. <span>"
            },
            updateSelf: {
                text: "<span class='fa fa-dot-circle-o'></span><span class='action-text'> Ich habe eine <strong>Selbsteinschätzung</strong> aktualisiert. <span>"
            },
            inviteexass: {
                text: "<span class='fa fa-envelope-square'></span><span class='action-text'> Ich habe ### eine Einladung zur <strong>Fremdeinschätzung</strong> geschickt.</span>"
            },
            stoprunning: {
                text: "<span class='action-text'>Ich habe die <strong>Durchführung</strong> der Selbsteinschätzungen <strong>abgeschlossen</strong>.</span>"
            },
            goevaluate: {
                text: "<span class='action-text'>Ich habe mit der <strong>Auswertung</strong> des Checks begonnen.</span>"
            },
            exassstart: {
                text: "<span class='fa fa-pencil-square-o'></span><span class='action-text'> ### hat mit der <strong>Fremdeinschätzung begonnen</strong>.</span>"
            },
            exassend: {
                text: "<span class='fa fa-dot-circle-o'></span><span class='action-text'> ### hat die <strong>Fremdeinschätzung beendet</strong>.</span>"
            },
            exassupdate: {
                text: "<span class='fa fa-dot-circle-o'></span><span class='action-text'> ### hat die <strong>Fremdeinschätzung aktualisiert</strong>.</span>"
            },
            anonymize: {
                text: "<span class='fa fa-check'></span><span class='action-text'> Ich habe den <strong>Check anonymisiert</strong>.</span>"
            }
        };

        var restAngular =
            Restangular.withConfig(function (Configurer) {
                Configurer.setBaseUrl('/api');
                Configurer.setRestangularFields({
                    id: "_id"
                })
            });
        return {

            /**
             * Einen Text für das Event liefern
             * @param e
             */
            getEventText: function (e) {
                if (e.addressee !== undefined) {
                    return updates[e.event].text.replace(/###/, '<strong>' + e.addressee + '</strong>');
                } else {
                    return updates[e.event].text;
                }
            },

            /**
             * weist einen Check per Mail zu
             * @param check
             * @returns {*}
             */
            shareViaMail: function (check, email) {
                return check.customPOST(check, 'share', {sharetype: 'email', email: email});
            },

            /**
             * weist einen Check per Nummer zu
             * @param check
             * @returns {*}
             */
            shareViaNumber: function (check, shareNumber) {
                return check.customPOST(check, 'share', {sharetype: 'number', shareNumber: shareNumber});
            },

            /**
             * Dupliziert den check anhand der shareNumber
             * @param check
             * @returns {*}
             */
            importViaNumber: function (importNumber) {
                return restAngular.one('checks/import', importNumber).get();
            },

            /**
             * Speichert einen neuen Check oder aktualisiert einen
             * bestehenden.
             * @param check
             * @returns {*}
             */
            upsert: function (check) {
                if (check.created === undefined) {
                    // Save new
                    return check.post();
                } else {
                    // Update
                    return check.put();
                }
            },
            /** Löscht alle personenbezogenen Daten
             * @param check
             */
            anonymize: function (check) {
                return check.customPUT(check, 'anonymize');
            },
            /** Kennzeichnet die Einschätzungsphase als abgeschlossen
             * @param check
             */
            close: function (check) {
                return check.customPUT(check, 'close');
            },
            /**
             * Kennzeichnet den zugewiesenen Check als akzeptiert
             * @param check
             */
            acceptAssignment: function (check) {
                return check.customPUT(check, 'accept');
            },
            /**
             * Kennzeichnet den zugewiesenen Check als abgelehnt
             * @param check
             */
            rejectAssignment: function (check) {
                // return check.remove();
                return check.customPUT(check, 'reject');
            },

            /**
             * Löscht einen Check auf dem Server
             * @param check
             */
            deleteCheck: function (check) {
                return check.remove();
            },
            /**
             * Dupliziert einen Check
             * @param check
             * @returns {*}
             */
            duplicateCheck: function (check) {
                return check.customPOST(check, 'copy');
            },
            /**
             * Holt alle Checks des Users
             * @returns {*}
             */
            getChecks: function () {
                return restAngular.all('checks').getList();
            },
            /**
             * Holt einen bestimmten Check des Users
             * @param id
             * @returns {*|Array|VirtualType|null|Object|SchemaType}
             */
            getSingleCheck: function (id) {
                return restAngular.one('checks', id).get();
            },
            /**
             * Liefert die Anzahl der Formulierungen für
             * jede Phase.
             * @param check
             * @returns {*}
             */
            getCountPerPhase: function (check) {

                var phrases_length = check.phrases.length || null;

                if (phrases_length) {
                    var phase;
                    for (var i = 0; i < phrases_length; i++) {
                        phase = check.phrases[i].phase;

                        switch (phase) {
                            case 'beginning':
                                check.count.beginning++;
                                break;
                            case 'planning':
                                check.count.planning++;
                                break;
                            case 'operation':
                                check.count.operation++;
                                break;
                            case 'ending':
                                check.count.ending++;
                                break;
                        }
                    }
                    return check;
                } else {
                    return false;
                }
            },
            ///**
            // * Genieriert Kompetenzbeschreibungen für die
            // * aktuell eingeblendete Phase
            // * @param check
            // * @param phase
            // * @param questions
            // * @param pattern
            // */
            //generate: function (check, phase, questions, pattern) {
            //    var terms, new_competence;
            //
            //    // Alle Fragen durchlaufen
            //    for (var k = 0; k < questions.length; k++) {
            //
            //        if (questions[k].phase == phase) {
            //
            //            // Wenn nichts eingetragen wurde, werden die Defaultwerte übernommen
            //            if (questions[k].input == "") {
            //                questions[k].input = questions[k].defaultterms;
            //            }
            //
            //            // Begriffe extrahieren
            //            terms = this.explode(questions[k].input);
            //
            //            // Für alle Statements, die zu einer Frage gehören
            //            for (var j = 0; j < questions[k].competence.length; j++) {
            //
            //                // Für jeden Begriff eine Kompetenz generieren
            //                for (var i = 0; i < terms.length; i++) {
            //
            //                    new_competence = {
            //                        id: 600 + i,
            //                        statement: questions[k].competence[j].statement.replace(pattern, terms[i]),
            //                        phase: questions[k].phase,
            //                        cat: questions[k].competence[j].cat
            //                    };
            //
            //                    this.addCompetence(check, new_competence, questions[k].phase, true);
            //                }
            //            }
            //        }
            //    }
            //},
            /**
             * Fügt dem Check eine Kompetenz hinzu, die durch
             * einen Begriff aus dem Formular generiert wurde.
             * @param check
             * @param competence
             * @param phase
             * @param assistance
             */
            addCompetence: function (check, competence, phase, assistance, $scope) {
                if (assistance == undefined) {
                    assistance = false;
                    check.handleUndo(competence);
                }

                //var dummy_sentence = 'eine Handlung, die hier zu formulieren ist, ausüben';
                var dummy_sentence = '';

                var inserted = {
                    id: check.phrases.length + 1,
                    statement: (competence != null ? competence.statement : dummy_sentence),
                    phase: phase,
                    cat: (competence != null ? competence.cat : null)
                };
                if (!assistance) {
                    // Bearbeitungszustand setzen
                    // TODO Diese Werte wieder raus, bevor die Reise zum Server geht
                    inserted.dirty = true;
                    inserted.state = 'new';
                }

                check.phrases.unshift(inserted);

                this.count_per_phase(check, phase, 1);

                setTimeout(function () {
                    $('.overlay').show();
                    angular.element('.editable-competence').css('z-index', 1039);
                    angular.element('.editable-competence').css('position', 'relative');
                }, 500);


            },
            /**
             * Extrahiert die Placeholder-Begriffe, um aus jedem
             * einzelnen eine Formulierung zu generieren.
             * @param data
             * @returns {*|Array}
             */
            explode: function (data) {
                var terms = data.split(',');
                return terms;
            },
            /**
             * Erhöht oder verringert den Counter von K. pro Phase
             * @param phase
             * @param incrementor kann 1 oder -1 sein
             */
            count_per_phase: function (check, phase, incrementor) {

                // Verringert die Anzahl von K. pro Phase
                switch (phase) {
                    case 'beginning':
                        check.count.beginning += incrementor;
                        break;
                    case 'planning':
                        check.count.planning += incrementor;
                        break;
                    case 'operation':
                        check.count.operation += incrementor;
                        break;
                    case 'ending':
                        check.count.ending += incrementor;
                        break;
                }
            },

            // wenn Noch nicht entschieden, ob zugewiesener Check angenommen oder abgelehnt wird
            ifUserHasToDecideOnImport: function (c) {
                return (!c.accepted && !c.rejected) && c.originated_from !== undefined;
            },

            // Wenn erste Selbsteinschätzung begonnen wurde
            ifLocked: function (c) {
                return c.locked;
            },

            // Wenn erste Selbsteinschätzung noch nicht begonnen wurde
            ifNotLocked: function (c) {
                return !c.locked;
            },

            // Wenn der Check mindestens einer Person zugewiesen wurde
            ifAssignedTo: function (c) {
                return c.assignedTo.length > 0;
            },

            // Wenn der Check noch keiner Person zugewiesen wurde
            ifNotAssignedTo: function (c) {
                return c.assignedTo.length == 0;
            },

            // Wenn die Einschätzungen abgeschlossen wurden
            ifClosed: function (c) {
                return c.closed;
            },

            // Wenn die Einschätzungen noch nicht abgeschlossen wurden
            ifNotClosed: function (c) {
                return !c.closed;
            },

            // Wenn mindestens zwei Einschätzungen vorliegen
            // TODO Hier muss auch überprüft werden, ob eine Selbst- und eine Fremdeinschätzung gemacht wurde.
            // TODO Die jetztige Lösung prüft nur auf mehr als eine Selbsteinschätzung.
            ifAtLeastOneRun: function (c) {
                return c.runs.length > 0 || this.countExternalAssessments(c);
            },

            ifTwoPersonalRunsDone: function (c) {
                return c.runs.length > 1;
            },

            countExternalAssessments: function (c) {
                for (var i = 0; i < c.invitations.length; i++) {
                    if (c.invitations[i].finished !== undefined && c.invitations[i].finished === true) {
                        // Erfüllt, wenn wenigstens eine Fremdeinschätzung vorliegt
                        return true;
                    }
                }
                return false;
            }

        }
    }]);
