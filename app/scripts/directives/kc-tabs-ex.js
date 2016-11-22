'use strict';

angular.module('desktopApp')
    .directive('kcTabsEx', function ($compile) {
        return {
            scope: {
                check: '=',
                tabs: '=kcTbs',
                subtemplate: '@'
            },
            require: '?ngModel',
            templateUrl: 'partials/kcTabsEx.html',
            restrict: 'EA',
            replace: true,
            controller: function($scope, $element, $attrs, $transclude) {

            },
            link: function (scope, element, attrs, controller) {
                scope.active = scope.activePane = 0;
                // view -> model
                scope.setActive = function(index, ev) {
                    scope.active = index;
                    if(controller) {
                        controller.$setViewValue(index);
                    }
                };

                // model -> view
                if(controller) {
                    controller.$render = function() {
                        scope.active = controller.$modelValue * 1;
                    };
                }
            }
        };
    });