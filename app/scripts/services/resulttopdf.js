'use strict';

angular.module('desktopApp')
  .factory('ResultToPDFService', function ResultToPDFService($location, $rootScope, $http) {

    return {
      generate: function (result_id) {
        return $http.post('api/result/'+result_id);
      }
    };
  });
