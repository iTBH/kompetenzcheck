'use strict';

angular.module('desktopApp')
    .factory('Mail', [function() {

        return {
            defaultMessageText: function() {
                return 'Sehr geehrte Damen und Herren,\n\nbitte schätzen Sie meine Kompetenz ein.';
            }
        };
    }]);