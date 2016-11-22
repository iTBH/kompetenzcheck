'use strict';

angular.module('desktopApp')
  .factory('Keyword', function Keyword($location, $rootScope, $http) {

    return {
      save: function (data) {
        return $http.put('api/keywords/add', data);
      },

      getAll: function () {
        return $http.get('api/keywords').then(function (response) {
            return response.data;
          });
      },

      deleteKeyword: function (keyword_to_be_removed) {
        return $http.delete('api/keywords/' + keyword_to_be_removed);
      },

      loadById: function (keyword_id) {
        return $http.get('api/keywords/' + keyword_id).then(function (response) {
          return response.data;
        });
      }
    };
  });
