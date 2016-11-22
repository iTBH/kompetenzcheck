'use strict';

angular.module('desktopApp')
    .factory('Flash', ['$rootScope', function($rootScope) {

        return {
            addMessage: function(msg) {
                return $rootScope.flashMessages.push(msg);
            }
        };
    }]);