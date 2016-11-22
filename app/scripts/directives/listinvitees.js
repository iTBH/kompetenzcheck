'use strict';

angular.module('desktopApp')
  .directive('invitees', ['Invitees', function (Invitees) {
    return {
      template: '<div ng-if="display">' +
          '     <form name="candidate">' +
                    '<select id="invitee_id" name="invitee_id" class="form-control">' +
                        '<option ng-repeat="i in invitees" value="{{ i._id }}">{{ i.firstname }} {{ i.lastname }}</option>' +
                    '</select>' +
                '</form>' +
                '</div>' +
                '<div ng-if="!display">' +
                    '<p class="alert alert-warning">Sie haben noch niemanden eingeladen.</p>' +
                '</div>',
      restrict: 'E',
      replace: false,
      scope: {},
      link: function (scope, element, attrs) {
         Invitees.getThoseOfCurrentUser()
             .success(function(data){
                 scope.invitees = data;
                 scope.display = true;
             })
             .error(function(err) {
                scope.display = false;
             });
      }
    };
  }]);