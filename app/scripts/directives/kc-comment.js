'use strict';

angular.module('desktopApp')
  .directive('new-edit-comment', [function () {
    return {
      scope: {
        check: '=',
        phase: '@',
        tabs: '='
      },
      templateUrl: 'partials/new-edit-comment.html',
      restrict: 'EA',
      replace: true,
      controller: function ($scope, $element, $attrs, $transclude, $modal) {



      },
      link: function (scope, element, attrs) {
      }
    };
  }]);
