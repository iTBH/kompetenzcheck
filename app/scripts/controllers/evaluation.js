'use strict';

angular.module('desktopApp')
    .controller('EvaluationCtrl', function ($rootScope, $scope, $http, $routeParams, $location, $modal, $aside, User, Auth, Flash) {
        $scope.xhrloader = $http.get('api/evaluate/' + $routeParams.id )
            .success(function(check) {
                $scope.check = check;
                $scope.runs = check.runs;
                $scope.checkId = $routeParams.id;

                $scope.tabs = [
                    {
                        "title": "Kompetenzrad 1",
                        "template": "partials/tabEvaluation-kompetenzrad1.html"
                    },
                    {
                        "title": "Kompetenzrad 2",
                        "template": "partials/tabEvaluation-kompetenzrad2.html"
                    },
                    {
                        "title": "Netzdiagramm",
                        "template": "partials/tabEvaluation-netzdiagramm.html"
                    },
                    {
                        "title": "Streudiagramm",
                        "template": "partials/tabEvaluation-streudiagramm.html"
                    },
                    {
                        "title": "Balkendiagramm",
                        "template": "partials/tabEvaluation-barchart.html"
                    }
                ];

                $scope.tabs.activeTab = 0;

;
            })
            .error();

   });
;
