'use strict';

angular.module('desktopApp')
  .controller('PrintCheckCtrl', function ($scope, $routeParams, Auth, $location, CheckService, $timeout) {

//        $scope.phases = ['beginning','planning','operation','ending'];
//
//        $scope.xhrloader = CheckService.getSingleCheck($routeParams.id).then(
//            function (check) {
//                $scope.check = check;
//            },
//            function(err) {
//                console.log(err);
//            })

        $scope.id = $routeParams.id;
  });