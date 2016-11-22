'use strict';

angular.module('desktopApp')
    .directive('kcPrintCheck', ['CheckService', '$timeout', function (CheckService, $timeout) {
        return {
            templateUrl: 'partials/kcPrintcompetences.html',
            restrict: 'E',
            replace: true,
            scope: {
                id: '='
            },
            link: function (scope, element, attrs) {

                var print = function () {
                    window.print();
                    window.close();
                };

                scope.phases = ['beginning', 'planning', 'operation', 'ending'];

                CheckService.getSingleCheck(scope.id).then(
                    function (check) {
                        scope.check = check;
                        // Wichtiger Hack: Wartet bis DOM fertig!
                        $timeout(print, 0);
                    },
                    function (err) {
                    })
            }
        };
    }]);