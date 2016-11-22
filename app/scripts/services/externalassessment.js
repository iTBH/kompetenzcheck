'use strict';

angular.module('desktopApp')
  .factory('ExternalAssessmentService', ['Restangular', '$http', function ExternalAssessmentService(Restangular, $http) {

    var restAngular =
      Restangular.withConfig(function (Configurer) {
        Configurer.setBaseUrl('/api');
        Configurer.setRestangularFields({
          id: "_id"
        })
      });
    return {
      /**
       * Speichert die Einschätzung
       * @param check
       * @returns {*}
       */
      save: function (check) {


        return $http.post('/api/external-assessment', check);
      },
      /**
       * Holt einen bestimmten Check des Users
       * @param id
       * @returns {*|Array|VirtualType|null|Object|SchemaType}
       */
      getSingleCheck: function (id) {
        return restAngular.one('external-assessment', id).get();
      },
      test: function (id) {
        return restAngular.one('external-assessment', id).get();
      },
      update: function (check) {
        return check.put();
      },
      getCheckForResults: function (id) {
        return restAngular.one('external-assessment/getByOrigin', id).get();

      }

    }
  }]);
