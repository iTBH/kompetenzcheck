'use strict';

angular.module('desktopApp')
  .controller('LoginCtrl', function ($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};


    $scope.login = function (form) {
      $scope.submitted = true;
      if (form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password

        }).then(function (user) {
          $location.path('/dashboard');
          jQuery('#userNameWithIcon').show();

        }).catch(function (err) {
          err = err.data;
          $scope.errors.other = err.message;
        });
      }
    };
  });
