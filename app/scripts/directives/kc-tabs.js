'use strict';

angular.module('desktopApp')
    .directive('kcTabs', function ($compile) {
        return {
            scope: {
                check: '=',
                tabs: '=kcTbs',
                subtemplate: '@'
            },
            require: '?ngModel',
            templateUrl: 'partials/kcTabs.html',
            restrict: 'EA',
            replace: true,
            controller: function ($scope, $element, $attrs, $transclude, CheckService) {
                $scope.addCompetence = function (index, competence, phase) {
                    // $scope.active = index;
                    CheckService.addCompetence($scope.check, competence, phase, false);
                };
                var path = window.location.pathname.split('/');
                $scope.page = path[1];

                $scope.infotooltip = {
                    add_competence: "Kompetenzbeschreibung hinzufügen"
                };
            },
            link: function (scope, element, attrs, controller) {
                scope.active = scope.activePane = 0;
                // view -> model
                scope.setActive = function (index, ev) {
                    scope.active = index;
                    if (controller) {
                        controller.$setViewValue(index);
                    }
                };

                // model -> view
                if (controller) {
                    controller.$render = function () {
                        scope.active = controller.$modelValue * 1;
                    };
                }
            }
        };
    });