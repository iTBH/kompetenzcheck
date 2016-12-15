'use strict';

angular.module('desktopApp')
    .controller('AssessCtrl', function ($rootScope, $scope, $http, $routeParams, $location, $modal, $aside, Flash, AssessService, Help, Keyword, $timeout) {
        $scope.getCheckForAssessment = function () {
            // Daten des Checks vom Server holen
            $scope.xhrloader = AssessService.getSingleCheck($routeParams.id)
                .then(function (check) {
                        var secondRunRuns = check.runs[1];
                        // console.log(secondRunRuns);
                        $scope.check = check;
                        $scope.check.runs = check.runs;
                        $scope.runs = check.runs;

                        $scope.model = {
                            view_title: "Selbsteinschätzung"
                        };

                        /**
                         * Hilfe anzeigen
                         */
                        $scope.showHelpAside = function (template) {
                            Help.showHelp($location.url(), $scope, template);
                        };

                        $scope.cueExists = function (cue) {
                            //return true;
                            return Help.cueExists(cue);
                        };


                        // Dient zum Zählen der einzelnen Statements pro Phase
                        $scope.check.count = {
                            beginning: 0,
                            planning: 0,
                            operation: 0,
                            ending: 0
                        };

                        // Die Eigenschaft "count" dient zum Zählen der verbleibenden Formulierungen
                        $scope.tabConfig = {
                            tabs: [
                                {
                                    'title': 'Auftragsanalyse',
                                    'phase': 'beginning',
                                    'count': 0,
                                    'editable': false
                                },
                                {
                                    "title": "Planung",
                                    'phase': 'planning',
                                    'count': 0,
                                    'editable': false
                                },
                                {
                                    "title": "Durchführung",
                                    'phase': 'operation',
                                    'count': 0,
                                    'editable': false
                                },
                                {
                                    "title": "Abschluss",
                                    'phase': 'ending',
                                    'count': 0,
                                    'editable': false
                                }
                            ]
                        };

                        // Mach den ersten Tab aktiv
                        $scope.tabConfig.tabs.activeTab = 0;

                        // Zwischenspeicher für Undo
                        $scope.check.stash = {};

                        // Funktion zur Behandlung von Abbrechen. Wird an die Direktive vererbt
                        $scope.check.handleUndo = function (phrase) {
                            // wegspeichern des aktuellen Ergebnis
                            angular.copy(phrase, $scope.check.stash);
                        };

                        // globales Flag für den Bearbeitungszustand des Formulierungsformulars
                        $scope.check.globalDirty = false;

                        // Initial die Anzahl der K. pro Phase ermitteln
                        //AssessService.getCountPerPhase($scope.check);

                        /**
                         * Abbrechen der gesamten Einschätzung
                         */
                        $scope.cancelAssessment = function () {

                            var cancel = confirm('Wollen Sie diese Einschätzung wirklich abbrechen? Alle aktuellen Änderungen gehen verloren.');
                            if (cancel) {
                                $location.path("dashboard");
                                Flash.addMessage({
                                    kindof: 'danger',
                                    text: 'Die Selbsteinschätzung wurde auf Ihren Wunsch hin abgebrochen. Mögliche Änderungen wurden nicht gespeichert.'
                                });
                            }
                        };

                        /**
                         * Abspeichern der Einschätzung
                         */
                        $scope.saveAssessment = function () {
                            // Folgende Werte werden auf dem Server gesetzt:
                            // start_date
                            // end_date
                            // finished
                            // no

                            // Setzt den Kommentar für die Runs, auf den alten Wert, wenn kein neuer GEsetzt wurde
                            if (secondRunRuns) {
                                angular.forEach($scope.check.runs[0].phrases, function (run1, key1) {
                                    angular.forEach(secondRunRuns.phrases, function (run2, key2) {
                                        if (run1.id == run2.id) {
                                            if (run1.comment == null && run2.comment != null) {
                                                run1.comment = run2.comment;
                                            }
                                        }
                                    });
                                });
                            }
                            // console.log($scope.check.runs);
                            AssessService.save($scope.check)
                                .then(
                                    function (response) {
                                        $location.path('dashboard');
                                        Flash.addMessage({kindof: 'success', text: response.message});
                                    },
                                    function (response) {
                                        Flash.addMessage({kindof: 'danger', text: response.message});
                                    });
                        };
                    },
                    function () {
                        // Error
                    });
        };

        $scope.getCheckForAssessment();


    }).directive('onFinishRenderRatings', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            $timeout(function () {
                $(".rating").rating({
                    'size': 'xl',
                    'showClear': false,
                    'clearCaption': 'Es wurde noch keine Einschätzung durchgeführt.',
                    starCaptions: {
                        1: "Ich kann das noch nicht und brauche umfassende Unterstützung.",
                        2: "Ich kann das erst ein bischen und brauche noch relativ viel Unterstützung.",
                        3: "Ich kann das schon relativ gut und brauche nur noch wenig Unterstützung.",
                        4: "Ich kann das sehr gut und brauche keine weitere Unterstützung."
                    }
                });
                var wrappedQueryResult = angular.element(".rating-stars");
                angular.forEach(wrappedQueryResult, function (run1, key1) {
                    angular.element(run1).attr('data-content', "");
                });

                wrappedQueryResult = angular.element(".rating-container");
                angular.forEach(wrappedQueryResult, function (run1, key1) {
                    angular.element(run1).attr('data-content', "");
                });
            });
        }
    }
}).directive('onFinishCountRatings', function ($timeout, $compile) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            $timeout(function () {
                $(".show-rating").rating({
                    'size': 'xs',
                    'disabled': true,
                    'showClear': false,
                    'showCaption': false
                });

                var wrappedQueryResult = angular.element(".rating-stars");
                angular.forEach(wrappedQueryResult, function (run1, key1) {
                    angular.element(run1).attr('data-content', "");
                });

                wrappedQueryResult = angular.element(".rating-container");
                angular.forEach(wrappedQueryResult, function (run1, key1) {
                    var temp = $compile('<div style="opacity: 0" class="pseudo-clickable" ng-click="clickButton($event.target); $event.stopPropagation();">A</div>')(scope);
                    angular.element(run1).prepend(temp);
                    angular.element(run1).attr('data-content', "");
                });
            });
        }
    }
});
