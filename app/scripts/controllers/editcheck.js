'use strict';

/**
 * Controller für das Erstellen und Bearbeiten von Checks
 */

angular.module('desktopApp')
    .controller('EditcheckCtrl', function ($scope, $http, $routeParams, $route, $location, $modal, $aside, User, Auth, Flash, Help, CheckService, ProposalService, Keyword, StaticProposalsService, $timeout) {
        $scope.archiv = false;

        // Prozedur zum Unterscheiden von New oder Edit
        $scope.routeParamsId = '';

        $scope.infotooltip = {
            title: {
                title: "Wie lautet der Arbeitsauftrag, der dem Check zugrundeliegt? Vergeben Sie einen möglichst prägnanten Check-Titel."
            },
            usage: {
                title: "Mit welchem Ziel wird der Check durchgeführt? z.B. Kompetenzentwicklung in einer Veranstaltung"
            },
            description: {
                title: "Beschreiben Sie den Arbeitsauftrag ausführlich: Rahmenbedingungen (z. B. Mitarbeiter, Ort, Zeitraum), Anforderungen/ Vorschriften, Arbeitsgegenstände, zu erstellende (Teil)Produkte. Es muss deutlich werden, in welchem Zusammenhang die Kompetenzbeschreibungen gecheckt werden sollen."
            },
            add_competence: {
                title: "Kompetenzbeschreibung hinzufügen"
            }
        };
        if ($routeParams.id == undefined) {
            // Wird auf dem Server ausgewertet und zeigt an, dass neu
            $scope.routeParamsId = 0;
        } else {
            $scope.routeParamsId = $routeParams.id;
        }

        $scope.$on('ngKeywordsReady', function () {

            $('#keywords').select2({
                theme: "default",
                multiple: true,
                placeholder: "Schlagwort hinzufügen...",
                minimumResultsForSearch: 1,
                tags: true,
                results: $scope.check.keywords,
                createTag: function (tag) {
                    return {
                        id: tag.term,
                        text: tag.term,
                        // add indicator:
                        isNew: true
                    };
                }
            }).on("select2:select", function (e) {
                if (e.params.data.isNew) {
                    var newTag = e.params.data.text;
                    // append the new option element prenamently:
                    $(this).find('[value="' + e.params.data.id + '"]').replaceWith('<option selected value="' + e.params.data.id + '">' + newTag + '</option>');

                    // store the new tag:
                    var newKeyword = {
                        _id: $scope.keywordId || null,
                        user: $scope.$parent.user.username,
                        name: newTag,
                        description: null,
                        username_keyword: $scope.$parent.user.username + '_' + newTag
                    };

                    Keyword.save(newKeyword).success(function (response) {
                        Flash.addMessage({kindof: 'success', text: 'Neues Schlagwort wurde angelegt.'});
                    }).error(function (response) {
                        Flash.addMessage({kindof: 'danger', text: response.message});
                    });
                }
            });

            if ($("#keywords").val() !== null && $("#keywords").val().indexOf('Vorlage') !== -1) {
                $scope.vorlage = true;
            }

            $scope.$watch('vorlage', function (data) {
                if (data === true) {
                    $timeout(function () {
                        $('#keywords > option[value="Vorlage"]').prop("selected", "selected");
                        $("#keywords").trigger("change");
                    });

                } else {
                    $timeout(function () {
                        $('#keywords > option[value="Vorlage"]').removeAttr("selected");
                        $("#keywords").trigger("change");
                    });
                }

            });
        });

        //
        //$scope.$on('ngKeywordsReady');


        Keyword.getAll().then(function (data) {
            // Leeres Item hinzufügen, damit wenn kein Inhalt vorhanden ist, Select 2 ausgelöst wird.
            if (data.length == 0) {
                data.push({'name': '', 'value': ''});
            }
            $scope.allKeywords = (data);
        });


        // CheckService.getSingleCheck($scope.routeParamsId);
        // Abfrage von Proposals und ggf. einem existierenden Checks
        $scope.xhrloader = CheckService.getSingleCheck($scope.routeParamsId).then(
            function (check) {
                // Das Array kommt in einem Objekt vom Server. Hier wird
                // es aufgeteilt
                $scope.check = check;

                /**
                 * Hilfe anzeigen
                 */
                $scope.showHelpAside = function (template) {
                    Help.showHelp($location.url(), $scope, template);
                };

                $scope.cueExists = function (cue) {

                    return Help.cueExists(cue);
                };

                // Wenn es ein neuer Check ist, muss er mit einigen Felder ausgestattet werden.
                if ($scope.check.created === undefined) {
                    $scope.check.title = '';
                    $scope.check.description = '';
                    $scope.check.purpose = '';
                    $scope.check.keywords = [];
                    $scope.check.phrases = [];

                    //setup routine statt assistenten, wenn der check neu ist werden für jede phase kompetenzen vorgeschlagen
                    // ändern kann man diese in  app/scripts/services/staticProposals.js
                    // $scope.staticProposals = StaticProposalsService.getStaticProposals();

                    // angular.forEach($scope.staticProposals, function (staticProp, propKey) {
                    //
                    //   $scope.check.phrases.push(staticProp);
                    //
                    // });
                }

                // Dient zum Zählen der einzelnen Statements pro Phase
                $scope.check.count = {
                    beginning: 0,
                    planning: 0,
                    operation: 0,
                    ending: 0
                };

                // Zwischenspeicher für Undo
                $scope.check.stash = {};

                // Funktion zur Behandlung von Abbrechen. Wird an die Direktive vererbt
                $scope.check.handleUndo = function (phrases) {
                    // wegspeichern des aktuellen Ergebnis
                    angular.copy(phrases, $scope.check.stash);
                };

                // globales Flag für den Bearbeitungszustand des Formulierungsformulars
                $scope.check.globalDirty = false;

                // Titel des Views dynamisch festlegen
                $scope.view_title = $scope.check.created == undefined ? 'anlegen' : 'bearbeiten';
                $scope.view_title = $scope.check.locked ? 'betrachten' : $scope.view_title;

                // Dynamische Pfadangaben für die Templates in New und Edit
                var template = 'partials/tab-edit.html';

                if ($scope.check.step != undefined && $scope.check.step >= 2) {
                    template = 'partials/tab-show.html';
                }


                // Beschriftungen und Templates für die Tabs
                $scope.tabConfig = {
                    tabs: [
                        {
                            'title': 'Auftragsanalyse',
                            "template": template,
                            'phase': 'beginning',
                            'count': 0
                        },
                        {
                            "title": "Planung",
                            "template": template,
                            'phase': 'planning',
                            'count': 0
                        },
                        {
                            "title": "Durchführung",
                            "template": template,
                            'phase': 'operation',
                            'count': 0
                        },
                        {
                            "title": "Abschluss",
                            "template": template,
                            'phase': 'ending',
                            'count': 0
                        }
                    ]
                };

                $scope.addCompetence = function (competence, phase) {
                    CheckService.addCompetence($scope.check, competence, phase, false);
                };

                // Der zuerst angezeigte Tab
                $scope.tabConfig.tabs.activeTab = 0;

                // Flag, ob der Check schon teilbar oder speicherbar ist
                $scope.sharable = false;

                // Initial die Formulierungen per Phase ermittelns
                CheckService.getCountPerPhase($scope.check);

                // Veränderungen der K.-Anzahl überwachen
                $scope.$watch('check.phrases.length', function () {
                    // Initial die Anzahl der K. pro Phase ermitteln
                    $scope.comp_length = $scope.check.phrases.length;
                    $scope.sharable = $scope.comp_length > 0 ? true : false;
                });

                $scope.print = function (check) {
                    window.print();
                };

                ///**
                // * Generiert die Statements aus den Assistentendaten
                // * @param phase
                // */
                //$scope.generate = function (phase) {
                //
                //  CheckService.generate($scope.check, phase, $scope.questions, $scope.pattern);
                //
                //  // Modal schließen
                //  assistent_modal.hide();
                //
                //  Flash.addMessage({
                //    kindof: 'success',
                //    text: 'Der Assistent hat einige Kompetenzbeschreibungen generiert. Sie können diese nun bearbeiten und ergänzen.'
                //  })
                //};

                ///**
                // * Der Assistent als Overlay
                // */
                //var assistent_modal = $modal({
                //  scope: $scope,
                //  template: 'partials/assistentmodal.html',
                //  show: false,
                //  backdrop: 'static'
                //});

                ///**
                // * Öffnet das Assistenten-Modal
                // */
                //$scope.openGenerator = function () {
                //  assistent_modal.$promise.then(function () {
                //
                //    // Wenn der Beruf des eingeloggten User bekannt ist,
                //    // hole die Proposals
                //    ProposalService.getProposalsForProfession()
                //      .then(function (proposals) {
                //        $scope.proposals = proposals;
                //        //console.log(proposals);
                //
                //        // Pattern für Lückentexte
                //        $scope.pattern = /###/;
                //        $scope.questions = $scope.proposals.questions || {};
                //        //console.log($scope.questions);
                //        assistent_modal.show();
                //      });
                //  });
                //};


                ///**
                // * Lösche die Eingaben im Assistenten
                // */
                //$scope.reset = function () {
                //
                //  var resetAssistentForm = confirm('Sie sind im Begriff, dieses Formular unwiederruflich zu löschen.');
                //
                //  if (resetAssistentForm) {
                //    for (var k = 0; k < $scope.proposals.questions.length; k++) {
                //      $scope.proposals.questions[k].input = "";
                //    }
                //  }
                //};

                /**
                 * Speichert den Check und leitet weiter auf die Route für das Assessment
                 * @param id
                 */
                $scope.assess = function (id) {
                    // Prüfen, ob die Selbsteinschätzung direkt aus dem Anlegen des Checks durchgeführt wird
                    // oder aus dem Dashboard startet

                    if (id == 'new') {
                        var startAssessmentImmediately = confirm('Wollen Sie den Check in diesem Zustand speichern und gleich mit einer Selbsteinschätzung beginnen?');
                        if (startAssessmentImmediately) {
                            CheckService.upsert($scope.check).then(function (response) {
                                $location.path('assess/' + response.id);
                                Flash.addMessage({kindof: 'success', text: response.message});
                            });
                        }
                    } else {
                        $location.path('assess/' + id);
                    }
                };

                /**
                 * Speichert einen neuen Check oder aktualisiert einen existierenden
                 */
                $scope.saveCheck = function () {

                    CheckService.upsert($scope.check).then(
                        function (response) {
                            $location.path('dashboard');
                            $route.reload();

                            Flash.addMessage({kindof: 'success', text: response.message});
                        },
                        function (response) {
                            Flash.addMessage({kindof: 'danger', text: response.message});
                        });
                };

                /**
                 * Check abbrechen
                 */
                $scope.cancelCheck = function () {

                    var cancel = confirm('Wollen Sie diesen Vorgang wirklich abbrechen? Alle aktuellen Änderungen gehen verloren.');
                    if (cancel) {
                        $location.path("dashboard");
                        Flash.addMessage({
                            kindof: 'danger',
                            text: 'Die Bearbeitung des Checks wurde auf Ihren Wunsch hin abgebrochen. Mögliche Änderungen wurden nicht gespeichert.'
                        })
                    }
                }
            });
    }).directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {


            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngKeywordsReady');
                });
            }
        }
    }
});
