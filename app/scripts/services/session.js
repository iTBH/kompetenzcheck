'use strict';

angular.module('desktopApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
