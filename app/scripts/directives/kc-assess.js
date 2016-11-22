'use strict';
angular.module('desktopApp')
    .directive('kcAssess', ['AssessService', function (AssessService) {
        return {
            scope: {
                check: '=',
                phase: '@',
                tabs: '='
            },
            templateUrl: 'partials/kcAssess.html',
            restrict: 'EA',
            replace: true,
            controller: function ($scope, $element, $attrs, $transclude, $modal, Help, $location, $routeParams) {
                $scope.xhrloader = AssessService.getSingleCheck($routeParams.id)
                    .then(function (check) {
                        $scope.secondRun = check.runs[1];
                    });
                // Globale zur Überwachung, ob alle Formulierungen behandelt wurden.
                $scope.check.totalOpen = 0;
                $scope.user = $scope.$root.user.firstname;

                /*_____________________________________________________*/
                var comment_modal = $modal({
                    scope: $scope,
                    template: 'partials/new-edit-comment.html',
                    show: false,
                    backdrop: 'static'
                });

                /**
                 * Öffnen des Overlays das verfassen eines Kommentars
                 * @param pid, phase
                 */
                $scope.openCommentModal = function (item) {
                    if ($scope.secondRun) {
                        angular.forEach($scope.secondRun.phrases, function (val, key) {
                            if (item.id == val.id) {
                                comment_modal.$scope.phraseId = val.id;
                                comment_modal.$scope.comment = val.comment;
                            }
                        });
                    } else {
                        comment_modal.$scope.phraseId = item.id;
                        comment_modal.$scope.comment = item.comment;
                    }
                    comment_modal.$promise.then(function () {
                        comment_modal.show();
                    });
                };
                $scope.showHelpAside = function (template) {
                    Help.showHelp($location.url(), $scope, template);
                };

                $scope.setNote = function () {
                    var phraseId = comment_modal.$scope.phraseId;
                    var comment = comment_modal.$scope.comment;

                    angular.forEach($scope.check.runs, function (runVal, runKey) {
                        angular.forEach(runVal.phrases, function (phraseVal, phraseKey) {
                            if (phraseId == phraseVal.id) {
                                if ($scope.secondRun) {
                                    angular.forEach($scope.secondRun.phrases, function (val, key) {
                                        if (phraseId == val.id) {
                                            val.comment = comment;
                                        }
                                    });
                                }
                                phraseVal.comment = comment;
                                $scope.phraseval = phraseVal.comment;
                            }
                        });
                    });
                    comment_modal.hide();
                };

                $scope.updateLittleStars = function (c) {
                    if ($scope.secondRun) {
                        angular.forEach($scope.secondRun.phrases, function (val, key) {
                            if (val.id == c.id) {
                                val.rating = c.rating;
                            }
                        });
                    }
                };

                $scope.cancelComment = function () {
                    // Kommentarwert auf alten Wert zurücksetzen
                    comment_modal.$scope.comment = $scope.phraseval;
                    comment_modal.hide();
                };

                $scope.clearModalInputOnComplete = function () {
                    comment_modal.$scope.comment = "";
                };


                /*_____________________________________________________*/


                /**
                 * Steuert die Eingabemaske für die Kompetenzbeschreibungen
                 * @param c
                 */
                $scope.assessCompetence = function (c, cRating) {
                    if (cRating == null) {
                        c.rating = 0;
                    } else {
                        c.rating = cRating;
                    }
                    c.state = 'assessing';
                    $scope.check.handleUndo(c);
                    c.dirty = true;
                    $scope.check.globalDirty = true;
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


                /**
                 * Aktualisieren der offenen Formulierungen pro Phase
                 */
                $scope.countOpenPerPhase = function () {
                    $scope.tabs[0].count = 0;
                    $scope.tabs[1].count = 0;
                    $scope.tabs[2].count = 0;
                    $scope.tabs[3].count = 0;

                    angular.forEach($scope.check.runs[0].phrases, function (phrase) {
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
                };

                $scope.ratingStates = [
                    {stateOn: 'one-star', stateOff: 'zero-star'},
                    {stateOn: 'two-star', stateOff: 'zero-star'},
                    {stateOn: 'three-star', stateOff: 'zero-star'},
                    {stateOn: 'four-star', stateOff: 'zero-star'}
                ];

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
                        key.rating = null;
                        key.note = null;
                    });

                    $scope.check.runs.push(run);

                };

                // Erweiterung des Datenmodells
                $scope.extendCheckForRun();

                // Offene Kompetenzen für den ganzen Check beobachten.
                $scope.countTotalOpen = function () {
                    var bucket = 0;
                    angular.forEach($scope.check.runs[0].phrases, function (phrase) {
                        if (phrase.rating === null) {
                            bucket++;
                        }
                    });

                    $scope.check.totalOpen = bucket;
                };

                // Überwachen der offenen Formulierungen
                $scope.$watch('check.globalDirty === true', function () {
                    $scope.countOpenPerPhase();
                    $scope.countTotalOpen();

                });
            },
            link: function (scope, element, attrs) {

            }
        };

    }]);
