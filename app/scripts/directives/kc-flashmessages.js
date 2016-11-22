angular.module('desktopApp').directive('kcFlash',
    function () {
        return {
            restrict: 'EA',
            replace: true,
            template: '<div class="flash row-fluid">' +
                '<div class="flash-inner alert alert-{{ msg.kindof }}"' +
                ' data-ng-repeat="msg in flashMessages">' +
                    '<i style="margin-right: 10px" ng-show="msg.kindof==\'success\'" class="fa fa-check"></i>' +
                    '<i style="margin-right: 10px" ng-show="msg.kindof==\'danger\'" class="fa fa-warning"></i>  ' +
                '{{msg.text}}</div>' +
                '</div>',

// If you are using twitter bootsrtap along with angular
//then you can use this classes span4 ,offset4 ,alert etc
//or you can define your own css for better look an feel.

            link: function ($rootScope, scope, element, attrs) {
                $rootScope.$watch('flashMessages', function (val) {
                    if (val.length) {
                        update();
                    }
                }, true);

                function update() {
                    $('.flash')
                        .slideDown(500).delay($rootScope.defaultFlashTimeout)
                        .slideUp(500, function () {
                            $rootScope.flashMessages.splice(0);
                        });
                }
            }
        };
    }
);
