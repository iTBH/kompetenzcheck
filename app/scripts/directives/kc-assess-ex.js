'use strict';

angular.module('desktopApp')
    .directive('kcAssessEx', ['ExternalAssessmentService', function (ExternalAssessmentService) {
        return {
            scope: {
                check: '=',
                phase: '@',
                tabs: '='
            },
            templateUrl: 'partials/kcAssessEx.html',
            restrict: 'EA',
            replace: true,
            controller: function ($scope, $element, $attrs, $transclude, $location, $modal, Help, $routeParams, $timeout) {
                // Globale zur Überwachung, ob alle Formulierungen behandelt wurden.
                $scope.check.totalOpen = 0;

                var comment_modal = $modal({
                    scope: $scope,
                    template: 'partials/new-edit-comment.html',
                    show: false,
                    backdrop: 'static'
                });

                /**
                 * Steuert die Eingabemaske für die Kompetenzbeschreibungen
                 * @param c
                 */
                $scope.assessCompetence = function (c) {
                    c.state = 'assessing';
                    $scope.check.handleUndo(c);
                    c.dirty = true;
                    $scope.check.globalDirty = true;
                };

                // $scope.updateLittleStars = function (c) {
                //     if ($scope.secondRun) {
                //         angular.forEach($scope.secondRun.phrases, function (val, key) {
                //             if (val.statement == c.statement) {
                //                 val.rating = c.rating;
                //             }
                //         });
                //     }
                // };

                $scope.closeAssessCompetence = function (c) {
                    if (c.noRating) {
                        c.rating = 0;
                    }
                    c.dirty = false;
                    $scope.check.globalDirty = false;
                    // $scope.check.countOpenPerPhase();
                    // Speichert beim Schließen des Einschätzungsformulars auf dem Server
                    // TODO Direktive läuft nicht!
                    $scope.xhrloader = ExternalAssessmentService.update($scope.check);
                };

                /**
                 * Öffnen des Overlays das verfassen eines Kommentars
                 * @param pid, phase
                 */
                $scope.openCommentModal = function (item) {
                    comment_modal.$scope.phraseId = item.id;
                    comment_modal.$scope.comment = item.comment;

                    comment_modal.$promise.then(function () {
                        comment_modal.show();
                    });
                };
                $scope.setNote = function () {

                    var phraseId = comment_modal.$scope.phraseId;
                    var comment = comment_modal.$scope.comment;
                    angular.forEach($scope.check.runs, function (runVal, runKey) {
                        angular.forEach(runVal.phrases, function (phraseVal, phraseKey) {
                            if (phraseId == phraseVal.id) {
                                phraseVal.comment = comment;
                                $scope.phraseval = phraseVal.comment;
                            }
                        });
                    });
                    comment_modal.hide();
                };

                $scope.cancelComment = function () {
                    // Kommentarwert auf alten Wert zurücksetzen
                    comment_modal.$scope.comment = $scope.phraseval;
                    comment_modal.hide();
                };

                /**
                 * Hilfe anzeigen
                 */
                $scope.showHelpAside = function (template) {
                    Help.showHelp($location.url(), $scope, template);
                };

                /**
                 * Liefert die Anzahl der Formulierungen für
                 * jede Phase.
                 * @returns {*}
                 */
                $scope.getCountPerPhase = function () {

                    var phrases_length = $scope.check.phrases.length || null;

                    if (phrases_length) {
                        var phase;
                        for (var i = 0; i < phrases_length; i++) {
                            phase = $scope.check.phrases[i].phase;

                            switch (phase) {
                                case 'beginning':
                                    $scope.check.count.beginning++;
                                    break;
                                case 'planning':
                                    $scope.check.count.planning++;
                                    break;
                                case 'operation':
                                    $scope.check.count.operation++;
                                    break;
                                case 'ending':
                                    $scope.check.count.ending++;
                                    break;
                            }
                        }
                        return true;
                    } else {
                        return false;
                    }
                };

                // Ermitteln, wieviele Formulierungen es pro Phase gibt
                $scope.getCountPerPhase();


//                /**
//                 * Aktualisieren der offenen Formulierungen pro Phase
//                 */
                $scope.countOpenPerPhase = function () {
                    $scope.tabs[0].count = 0;
                    $scope.tabs[1].count = 0;
                    $scope.tabs[2].count = 0;
                    $scope.tabs[3].count = 0;

                    angular.forEach($scope.check.phrases, function (phrase) {
                        switch (phrase.phase) {
                            case 'beginning':
                                (phrase.rating === null) ? $scope.tabs[0].count++ : null;
                                break;
                            case 'planning':
                                (phrase.rating === null) ? $scope.tabs[1].count++ : null;
                                break;
                            case 'operation':
                                (phrase.rating === null) ? $scope.tabs[2].count++ : null;
                                break;
                            case 'ending':
                                (phrase.rating === null) ? $scope.tabs[3].count++ : null;
                                break;
                        }
                    });

                    // angular.forEach($scope.tabs, function (tab) {
                    //     if (tab.count > 0)
                    //         tab.editable = true;
                    // })
                };
                /**
                 * Anreichern des Datenmodell mit zusätzlichen Feldern
                 */
                $scope.extendCheckForRun = function () {

                    $scope.check.runs = [];

                    var run = {
                        type: "self",
                        start_date: null,
                        end_date: null,
                        finished: null
                    };

                    run.phrases = $scope.check.phrases;

                    angular.forEach(run.phrases, function (key, value) {
                        if (key.rating === undefined && key.noRating === undefined) {
                            key.rating = null;
                        }
                    });

                    $scope.check.runs.push(run);

                };
                /**
                 * Abbrechen der Einschätzung einer einzelnen Formulierung
                 * @param c
                 */
                $scope.cancelAssessing = function (c) {

                    if (c.state == 'assessing') {
                        c.rating = $scope.check.stash.rating;
                    }
                    c.dirty = false;
                    $scope.check.globalDirty = false;
                };

                // Die Funktionen *extendCheckForRun* und *countTotalOpen*
                // müssen in der folgenden Reihenfolge definiert und aufgerufen werden!

//                /**
//                 * Anreichern des Datenmodell mit zusätzlichen Feldern
//                 */
//                $scope.extendCheckForRun = function() {
//
//                    $scope.check.runs = [];
//
//                    var run = {
//                        type: "external",
//                        start_date: null,
//                        end_date: null,
//                        finished: null
//                    };
//
//                    run.phrases = $scope.check.phrases;
//
//                    angular.forEach(run.phrases, function(key, value) {
//                        key.rating = null;
//                        key.note = null;
//                    });
//
//                    $scope.check.runs.push(run);
//
//                };
//
                // Erweiterung des Datenmodells
                $scope.extendCheckForRun();

                // Offene Kompetenzen für den ganzen Check beobachten.
                $scope.countTotalOpen = function () {
                    var bucket = 0;
                    angular.forEach($scope.check.phrases, function (phrase) {
                        if (phrase.rating === null) {
                            bucket++;
                        }
                    });

                    $scope.totalOpen = bucket;
                };

                // Überwachen der offenen Formulierungen
                $scope.$watch('check.globalDirty === true', function () {
                    $scope.countOpenPerPhase();
                    $scope.countTotalOpen();

                });

                $scope.clickButton = function (elem, $event) {
                    $timeout(function () {
                        angular.element(elem).parent().parent().parent().trigger('click');
                    }, 0);
                };

                $scope.resetStars = function (c) {
                    $('.rating').rating('clear');
                };
                $scope.resetCheckbox = function (id, c) {
                    var elem = '#dimension-0-' + id;
                    $(elem).prop('checked', false);
                    c.noRating = false;
                }
            },
            link: function (scope, element, attrs) {
            }
        };
    }]);
