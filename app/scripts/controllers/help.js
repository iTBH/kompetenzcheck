'use strict';

angular.module('desktopApp')
  .controller('HelpCtrl', function ($scope, $http, User, Auth) {

        var user = User.get().then(function(data) {
            $scope.userinfo = {
                username: data.username,
                firstname: data.firstname,
                lastname: data.lastname,
                profession: data.professionlong
            };
        });

  });
