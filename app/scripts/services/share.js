'use strict';

angular.module('desktopApp')
    .factory('ShareService', ['Restangular', function (Restangular) {

        var restAngular =
            Restangular.withConfig(function (Configurer) {
                Configurer.setBaseUrl('/api');
                Configurer.setRestangularFields({
                    id: "_id"
                })
            });
        return {
            /**
             * Holt einen bestimmten Check des Users
             * @param id
             * @returns {*|Array|VirtualType|null|Object|SchemaType}
             */
            getSingleCheck: function (id) {
                return restAngular.one('assess', id).get();
            }
        }
    }]);