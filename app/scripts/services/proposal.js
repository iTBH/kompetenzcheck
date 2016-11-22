'use strict';

angular.module('desktopApp')
    .factory('ProposalService', ['Restangular', function (Restangular) {

        var restAngular =
            Restangular.withConfig(function (Configurer) {
                Configurer.setBaseUrl('/api');
                Configurer.setRestangularFields({
                    id: "_id"
                })
            });
        return {
            getProposalsForProfession: function () {
                return restAngular.one('proposals', null).get();
            }
        }
    }]);