'use strict';

angular.module('desktopApp')
    .directive('kcCompetence', ['Flash', function (Flash) {
        return {
            scope: {
                check: '=',
                phase: '@',
                tabs: '='
            },
            //template: '<p>{{ check }}</p>',
            templateUrl: 'partials/kcEdit.html',
            restrict: 'EA',
            replace: true,
            controller: function ($scope, $element, $attrs, $transclude, $location, Help) {


                $scope.infotooltip = {
                    delete_competence: "Kompetenzbeschreibung löschen",
                    edit_competence: "Kompetenzbeschreibung bearbeiten"
                };

                $scope.completePhrase = function (c) {
                    $('.overlay').hide();
                    c.dirty = false;
                    $scope.check.globalDirty = false;
                    Flash.addMessage({kindof: 'success', text: 'Die Kompetenzformulierung wurde gespeichert.'});
                };

                $scope.editCompetence = function (c) {

                    c.state = 'edit';

                    $scope.check.handleUndo(c);

                    c.dirty = true;
                    $scope.check.globalDirty = true;

                    setTimeout(function () {
                        $('.overlay').show();
                        angular.element('.editable-competence').css('z-index', 1039);
                        angular.element('.editable-competence').css('position', 'relative');
                    }, 500);
                };


//                $scope.$watch('1 == 2', function() {
//                    var tabs = angular.element("ul.nav-tabs li a");
//                    angular.element(tabs[3]).unbind('click').addClass('kc-disabled');
//                });

                $scope.deleteCompetence = function (c) {
                    var phase;
                    for (var i = 0; i < $scope.check.phrases.length; i++) {

                        if (angular.equals(c, $scope.check.phrases[i])) {
                            $scope.check.phrases.splice(i, 1);

                            phase = $scope.phase;

                            $scope.refresh_count_per_phase(phase, -1);
                            break;
                        }
                    }
                    ;

                    Flash.addMessage({kindof: 'success', text: 'Die Kompetenzformulierung wurde gelöscht.'});

                };

                $scope.cancelEditing = function (c) {
                    $('.overlay').hide();
                    if (c.state == 'edit') {
                        c.cat = $scope.check.stash.cat;
                        c.statement = $scope.check.stash.statement;
                    } else {
                        $scope.check.phrases.shift();
                        $scope.refresh_count_per_phase(c.phase, -1);
                    }

                    c.dirty = false;
                    $scope.check.globalDirty = false;

                };

                /**
                 * Erhöht oder verringert den Counter von K. pro Phase
                 * @param phase
                 * @param incrementor kann 1 oder -1 sein
                 */
                $scope.refresh_count_per_phase = function (phase, incrementor) {

                    // Verringert die Anzahl von K. pro Phase
                    switch (phase) {
                        case 'beginning':
                            $scope.check.count.beginning += incrementor;
                            break;
                        case 'planning':
                            $scope.check.count.planning += incrementor;
                            break;
                        case 'operation':
                            $scope.check.count.operation += incrementor;
                            break;
                        case 'ending':
                            $scope.check.count.ending += incrementor;
                            break;
                    }
                };


                /**
                 * Hilfe anzeigen
                 */


                $scope.showHelpAside = function (template) {
                    //$location.url()
                    Help.showHelp($location.url(), $scope, template);
                    $('.backstretch').attr("ng-click", "$('.overlay').show();");
                    $('.overlay').hide();
                };
                $scope.closeHelpAside = function () {
                    $('.overlay').show();
                    return true;
                };
                $scope.cueExists = function (cue) {
                    //return true;
                    return Help.cueExists(cue);
                };
            },
            link: function (scope, element, attrs) {

                //console.log('Ausgabe in Direktive:', scope);

            }
        };
    }]);
