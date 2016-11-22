'use strict';

angular.module('desktopApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'restangular', 'mgcrea.ngStrap', 'cgBusy', 'ngAnimate', 'ui.bootstrap'])
    .config(function ($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider
            .when('/dashboard', {
                templateUrl: 'partials/dashboard',
                controller: 'DashboardCtrl',
                authenticate: true
            })
            .when('/invitees', {
                templateUrl: 'partials/invitees',
                controller: 'InviteesCtrl',
                authenticate: true
            })
            // Erstellen
            .when('/check/new', {
                templateUrl: 'partials/new-and-edit-check',
                controller: 'EditcheckCtrl',
                authenticate: true
            })
            // Editieren
            .when('/check/:id', {
                templateUrl: 'partials/new-and-edit-check',
                controller: 'EditcheckCtrl',
                authenticate: true
            })
            // Ansehen
            .when('/check-view/:id', {
                templateUrl: 'partials/check-view',
                controller: 'EditcheckCtrl',
                authenticate: true
            })
            // Einschätzen
            .when('/assess/:id', {
                templateUrl: 'partials/assess',
                controller: 'AssessCtrl',
                authenticate: true
            })
            .when('/login', {
                templateUrl: 'partials/login',
                controller: 'LoginCtrl'
            })
            .when('/logout', {
                templateUrl: 'partials/login',
                controller: 'LoginCtrl'
            })
            .when('/signup', {
                templateUrl: 'partials/signup',
                controller: 'SignupCtrl'
            })
            .when('/settings', {
                templateUrl: 'partials/settings',
                controller: 'SettingsCtrl',
                authenticate: true
            })
            .when('/help', {
                templateUrl: 'partials/help',
                controller: 'HelpCtrl',
                authenticate: true
            })
            .when('/keywords', {
                templateUrl: 'partials/keywords',
                controller: 'KeywordCtrl',
                authenticate: true
            })
            .when('/partners', {
                templateUrl: 'partials/partners',
                controller: 'PartnerCtrl',
                authenticate: true
            })
            .when('/print/:id', {
                templateUrl: 'partials/printcheck',
                controller: 'PrintCheckCtrl',
                authenticate: true
            })
            .when('/external-assessment/:id', {
                templateUrl: 'partials/external-assessment.html',
                controller: 'ExternalAssessmentCtrl',
                authenticate: false
            })
            .when('/evaluate/:id', {
                templateUrl: 'partials/evaluation.html',
                controller: 'EvaluationCtrl',
                authenticate: true
            })
            .when('/changelog', {
                templateUrl: 'partials/changelog.html',
                authenticate: false
            })
            .when('/updateKeyword/:id', {
                templateUrl: 'partials/updateKeyword',
                controller: 'KeywordCtrl',
                authenticate: true
            })
            .when('/updatePartner/:id', {
                templateUrl: 'partials/updatePartner',
                controller: 'PartnerCtrl',
                authenticate: true
            })
            .when('/PDFExport/:id', {
                templateUrl: 'partials/PDFExport',
                controller: 'PDFCtrl',
                authenticate: true
            })
            .when('/patterns', {
                templateUrl: 'partials/patterns',
                controller: 'PatternCtrl',
                authenticate: true
            })
            .when('/resultview/:id', {
                templateUrl: 'partials/resultview',
                controller: 'ResultCtrl',
                authenticate: true
            })
            .when('/imprint', {
                templateUrl: 'partials/imprint',
                controller: 'ResultCtrl',
                authenticate: false
            })
            .when('/agreement', {
                templateUrl: 'partials/agreement',
                controller: 'ResultCtrl',
                authenticate: false
            })
            .when('/resetPassword', {
                templateUrl: 'partials/reset-password',
                controller: 'ResetPasswordCtrl',
                authenticate: false
            })
            .when('/resetPassword/:id', {
                templateUrl: 'partials/reset-password-view',
                controller: 'ResetPasswordCtrl',
                authenticate: false
            })
            .when('/settings/deleteAccount', {
                templateUrl: 'partials/settings-delete-account',
                controller: 'SettingsCtrl',
                authenticate: false
            })
            .otherwise({
                redirectTo: '/dashboard'
            });

        $locationProvider.html5Mode(true);


        // Internet Explorer Cache Problem
        //initialize get if not there
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }
        //disable IE ajax request caching
        $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
        // extra
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';

        // Intercept 401s and 403s and redirect you to login
        $httpProvider.interceptors.push(['$q', '$location', function ($q, $location) {
            return {
                'responseError': function (response) {
                    if (response.status === 401 || response.status === 403) {
                        $location.path('/login');
                        return $q.reject(response);
                    }
                    else {
                        return $q.reject(response);
                    }
                }
            };
        }]);
    })
    .run(function ($rootScope, $location, Auth, User) {

        // Redirect to login if route requires auth and you're not logged in
        $rootScope.$on('$routeChangeStart', function (event, next) {

            if (next.authenticate && !Auth.isLoggedIn()) {
                $location.path('/login');
            } else {
                // Bei jedem Seitenwechsel die Userinformationen holen
                // TODO User-Informationen ggf. für die Zukunft in den Cache speichern
                var user = User.get().then(function (user) {
                    $rootScope.userinfo = {
                        username: user.username,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        profession: user.professionlong
                    };
                    $rootScope.user = user;
                });
            }


        });

        // Vorgaben für die Flash Notification
        $rootScope.flashMessages = [];
        $rootScope.defaultFlashTimeout = 3000;

    })
    // Konfiguriert angular-busy
    .value('cgBusyDefaults', {
        backdrop: true,
        templateUrl: 'partials/loader.html',
        delay: 0,
        minDuration: 300
    });
