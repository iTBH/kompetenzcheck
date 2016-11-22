'use strict';

angular.module('desktopApp')
  .factory('PartnerService', function PartnerService($location, $rootScope, $http) {

    return {
      save: function (data) {
        return $http.put('api/partners/add', data);
      },

      getAll: function () {
        return $http.get('api/partners').then(function (response) {
          return response.data;

        });
      },

      deletePartner: function (partner_to_be_removed) {
        return $http.delete('api/partners/' + partner_to_be_removed);
      },

      loadById: function (partner_id) {
        return $http.get('api/partners/' + partner_id).then(function (response) {
          return response.data;
        });
      }

    };
  });
