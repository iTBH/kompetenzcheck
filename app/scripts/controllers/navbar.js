'use strict';

angular.module('desktopApp')
    .controller('NavbarCtrl', function ($scope, $rootScope, $location, Auth, User) {

        $scope.init = function () {
        };

        $(window).resize(function () {
            if (window.matchMedia("(min-width: 480px)").matches && window.matchMedia("(max-width: 1560px)").matches) {
                angular.element('#navigation').css('left', '-221px');
            } else {
                angular.element('#navigation').css('left', '0');
            }
        });

        $scope.showMenu = function () {
            angular.element('#navigation').css('left', '0');
        };

        $scope.hideMenu = function () {
            // Prüft ob das Menü eingeklappt ist, bzw. ob der passende Media Query aktiv ist
            if (window.matchMedia("(min-width: 480px)").matches && window.matchMedia("(max-width: 1560px)").matches) {
                angular.element('#navigation').css('left', '-221px');
            } else {
                angular.element('#navigation').css('left', '0');
            }
        };

        $scope.logout = function () {
            Auth.logout()
                .then(function () {
                    $location.path('/login');
                });
        };

        $scope.isActive = function (route) {
            return route === $location.path();
        };

        $scope.isPrint = function (route) {
            var path = $location.path();
            return path.search(/print/) === 1;
        };

        $scope.isLoggedIn = function () {
            return Auth.isLoggedIn();
        };

        if ($scope.isLoggedIn()) {
            // Wenn kein Vorname und Nachname exitiert, nimm den Username
            // if (!$rootScope.userinfo.firstname) {
            //     $rootScope.userinfo.firstname = $rootScope.userinfo.username;
            //     $rootScope.userinfo.lastname = '';
            // }

            $scope.menu = [
                {
                    'title': 'Dashboard',
                    'link': '/dashboard',
                    'icon': 'fa-list',
                    'target': ''
                },
                // {
                //     'title': 'Vorlagen',
                //     'link': '/patterns',
                //     'icon': 'fa-file',
                //     'target': ''
                // },
                {
                    'title': 'Partner und Partnerinnen',
                    'link': '/partners',
                    'icon': 'fa-group',
                    'target': ''
                },
                {
                    'title': 'Schlagwörter',
                    'link': '/keywords',
                    'icon': 'fa-tags',
                    'target': ''
                },
                {
                    'title': 'Profil',
                    'link': '/settings',
                    'icon': 'fa-cogs',
                    'target': ''
                },
                {
                    'title': 'FAQ',
                    'link': 'https://fizban05.rz.tu-harburg.de/itbh/kompetenzcheck/',
                    'icon': 'fa-info-circle',
                    'target': '_blank'
                }
            ];
        }
    });
