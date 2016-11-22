'use strict';
angular.module('desktopApp')
    .factory('AssessService', ['Restangular', function (Restangular) {

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
                return check.customPUT(check, 'create');
            },
            /**
             * Holt einen bestimmten Check des Users
             * @param id
             * @returns {*|Array|VirtualType|null|Object|SchemaType}
             */
            getSingleCheck: function (id) {
                return restAngular.one('assess', id).get();
            },
            cache: function (check) {
                return check.customPUT(check, 'cache');
            }
        }
    }]);