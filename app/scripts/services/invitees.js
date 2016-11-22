'use strict';

angular.module('desktopApp')
  .factory('Invitees', ['$http', 'CheckService', function($http, CheckService) {

        return {
          getThoseOfCurrentUser: function() {
            return CheckService.getChecks();
          },

          addNewInvitee: function(newToken) {
              return $http.put('api/invitees/add', { token: newToken });
          },
          sendInvitationViaMail: function(data) {
              return $http.put('api/invitees/inviteViaMail', data);
          }
        };
  }]);