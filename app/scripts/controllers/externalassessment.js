'use strict';

angular.module('desktopApp')
    .controller('ExternalAssessmentCtrl', function ($rootScope, $scope, $http, $routeParams, $location, $modal, $aside, User, Auth, Flash, ExternalAssessmentService, Help) {

        $scope.showHelpAside = function (template) {
            //$location.url()
            Help.showHelp($location.url(), $scope, template);

        };
        $scope.cueExists = function (cue) {

            return Help.cueExists(cue);
        };

        // Daten des Checks vom Server holen
        $scope.myPromise = ExternalAssessmentService.getSingleCheck($routeParams.id)
            .then(function (check) {
                    // $scope.test = check;
                    // console.log($scope.test.phrases[0]);
                    // $scope.test.phrases[0].rating = 3;
                    // console.log($scope.test.phrases[0].rating);
                    // console.log($scope.test.phrases[0]);

                    // $scope.check = $scope.test;
                    // console.log(check.phrases[0]);

                    $scope.tooltip = {
                        "title": "Sie können die Einschätzung erst abschließen, wenn Sie sich zu allen Kompetenzen verhalten haben.",
                        "checked": false
                    };
                    $scope.test = function (hash) {
                        $scope.myPromise = ExternalAssessmentService.test(hash);
                    };

                    $scope.hash = $routeParams.id;

                    // -----------------------------------------------------------------
                    // ------------------ Login-Modal ---------------------------------
                    // -----------------------------------------------------------------

                    /**
                     * Definition des Login-Dialog als Overlay
                     */
                    var login_modal = $modal({
                        scope: $scope,
                        template: 'partials/login-modal.html',
                        show: false,
                        backdrop: 'static'
                    });

                    /**
                     * Öffnen des Overlays zum Einloggen
                     */
                    $scope.openLoginModal = function () {

                        login_modal.$promise.then(function () {

                            login_modal.show();
                        });
                    };

                    $scope.login = function () {
                        $scope.user = {};
                        $scope.errors = {};

                        $scope.login = function (form) {
                            $scope.submitted = true;

                            if (form.$valid) {
                                Auth.login({
                                    email: $scope.user.email,
                                    password: $scope.user.password
                                })
                                    .then(function (user) {
                                        login_modal.hide();
                                    })
                                    .catch(function (err) {
                                        err = err.data;
                                        $scope.errors.other = err.message;
                                    });
                            }
                        };
                    };

//                if (!Auth.isLoggedIn()) {
//                    $scope.openLoginModal();
//                };

                    $scope.check = check;

                    // Dient zum Zählen der einzelnen Statements pro Phase
                    $scope.check.count = {
                        beginning: 0,
                        planning: 0,
                        operation: 0,
                        ending: 0
                    };

                    $scope.extractMailOfInvitee = function () {
                        return $scope.check.inviter.mail || "keine";
                    };

                    $scope.tabConfig = {
                        tabs: [
                            {
                                'title': 'Auftragsanalyse',
                                'phase': 'beginning',
                                'count': 0
                            },
                            {
                                "title": "Planung",
                                'phase': 'planning',
                                'count': 0
                            },
                            {
                                "title": "Durchführung",
                                'phase': 'operation',
                                'count': 0
                            },
                            {
                                "title": "Abschluss",
                                'phase': 'ending',
                                'count': 0
                            }
                        ]
                    };

                    $scope.tabConfig.tabs.activeTab = 0;
                    //
                    // $scope.get_count_per_phase = function () {
                    //     var phase;
                    //     for (var i = 0; i < $scope.check.phrases.length; i++) {
                    //         phase = $scope.check.phrases[i].phase;
                    //         switch (phase) {
                    //             case 'beginning':
                    //                 $scope.check.count.beginning++;
                    //                 break;
                    //             case 'planning':
                    //                 $scope.check.count.planning++;
                    //                 break;
                    //             case 'operation':
                    //                 $scope.check.count.operation++;
                    //                 break;
                    //             case 'ending':
                    //                 $scope.check.count.ending++;
                    //                 break;
                    //         }
                    //     }
                    // };

                    // Zwischenspeicher für Undo
                    $scope.check.stash = {};

                    // Funktion zur Behandlung von Abbrechen. Wird an die Direktive vererbt
                    $scope.check.handleUndo = function (phrase) {
                        // wegspeichern des aktuellen Ergebnis
                        angular.copy(phrase, $scope.check.stash);
                    };

                    // globales Flag für den Bearbeitungszustand des Formulierungsformulars
                    $scope.check.globalDirty = false;

                    /**
                     * Check abbrechen
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

//                $scope.extendCheckForRun = function() {
//
//                    $scope.check.runs = [];
//
//                    var externalRun = {
//                        type: "external",
//                        start_date: null,
//                        end_date: null,
//                        finished: null,
//                        assessor: {
//                            firstname: '',
//                            lastname: '',
//                            mail: $scope.extractMailOfInvitee()
//                        }
//                    };
//
//                    externalRun.phrases = $scope.check.phrases;
//
//                    angular.forEach(externalRun.phrases, function(key, value) {
//                        key.rating = null;
//                        key.note = null;
//                    });
//
//                    $scope.check.runs.push(externalRun);
//                    console.log($scope.check);
//
//                };

                    // Erweiterung des Datenmodells
                    //$scope.extendCheckForRun();
                    //             console.log($scope.check.runs[0]);

                    // Offene Kompetenzen für den ganzen Check beobachten.
                    $scope.countTotalOpen = function () {
                        var bucket = 0;
                        angular.forEach($scope.check.phrases, function (phrase) {
                            if (phrase.rating == null) {
                                bucket++;
                            }
                        });

                        return bucket;
                    };

                    /**
                     * Abspeichern der Einschätzung
                     */
                    $scope.closeAssessment = function () {
                        var closingDialog = confirm('Möchten sie die Fremdeinschätzung wirklich beenden? Danach ist diese nicht mehr editierbar.');
                        if (closingDialog) {
                            ExternalAssessmentService.save($scope.check).success(function (response) {
                                Flash.addMessage({kindof: 'success', text: 'Die Fremdeinschätzung wurde abgeschlossen.'});
                                $location.path('login');
                            }).error(function (response) {
                                Flash.addMessage({kindof: 'danger', text: response.message});
                                $location.path('login')
                            });
                        }
                    };
                },
                function () {
                    // Error
                });
    }).directive('onFinishRenderExRatings', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            $timeout(function () {
                $(".rating").rating({
                    'size': 'xl',
                    'showClear': false,
                    'clearCaption': 'Es wurde noch keine Einschätzung durchgeführt.',
                    captionElement: "#kv-caption",
                    starCaptions: {

                        1: "Er/Sie kann das noch nicht und braucht umfassende Unterstützung.",
                        2: "Er/Sie kann das erst ein bischen und braucht noch umfassende Unterstützung.",
                        3: "Er/Sie kann das schon relativ gut braucht nur noch wenig Unterstützung .",
                        4: "Er/Sie kann das sehr gut und braucht keine weitere Unterstützung."
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
}).directive('onFinishCountExRatings', function ($timeout, $compile) {
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

