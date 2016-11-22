/**
 * Created by Artur on 08.09.2015.
 */
'use strict';

angular.module('desktopApp')
  .factory('PDFExport', [, function ($location, $rootScope, $http) {

    //return {
    //  save: function (data) {
    //    return $http.put('api/keywords/add', data);
    //  },
    //
    //  getAll: function () {
    //    return $http.get('api/keywords').then(function (response) {
    //      return response.data;
    //
    //    });
    //  },
    //
    //  deleteKeyword: function (keyword_to_be_removed) {
    //    return $http.delete('api/keywords/' + keyword_to_be_removed);
    //  },
    //
    //  loadById: function (keyword_id) {
    //    return $http.get('api/keywords/' + keyword_id).then(function (response) {
    //      return response.data;
    //    });
    //  }
    //};
  }]);
