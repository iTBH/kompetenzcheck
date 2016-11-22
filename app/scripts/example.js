angular.module('desktopApp', ['ngAnimate', 'ui.bootstrap']);
angular.module('desktopApp').controller('test', function ($scope) {
    $scope.ratingStates = [
        {stateOn: 'one-star', stateOff: 'zero-star'},
        {stateOn: 'two-star', stateOff: 'zero-star'},
        {stateOn: 'three-star', stateOff: 'zero-star'},
        {stateOn: 'four-star', stateOff: 'zero-star'}
    ];
});