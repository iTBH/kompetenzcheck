'use strict';

angular.module('desktopApp')
    .controller('SignupCtrl', function ($rootScope, $scope, Auth, $location, Keyword, Flash) {
        $scope.user = {};
        $scope.errors = {};


        $scope.register = function (form) {
            $scope.submitted = true;
            //var seed = crypto.randomBytes(20);
            //var authToken = crypto.createHash('sha1').update(seed + req.body.email).digest('hex');
            var authToken = Math.random().toString(36).substring(10);
            var staticKeys = [
                {
                    _id: null,
                    user: $scope.user.email,
                    name: 'Planungsphase',
                    description: 'Phase der Planung und Konzeption',
                    username_keyword: $scope.user.email + '_' + 'Planungsphase'
                },
                {
                    _id: null,
                    user: $scope.user.email,
                    name: 'Dummy',
                    description: 'Platzhalterschlagwort',
                    username_keyword: $scope.user.email + '_' + 'Dummy'
                },
                {
                    _id: null,
                    user: $scope.user.email,
                    name: 'Vorlage',
                    description: 'Gut zum wiederfinden',
                    username_keyword: $scope.user.email + '_' + 'Vorlage'
                },
                {
                    _id: null,
                    user: $scope.user.email,
                    name: 'Schlagwort #4',
                    description: 'Einfach nur 4',
                    username_keyword: $scope.user.email + '_' + 'Schlagwort #4'
                }
            ];

            if (form.$valid) {
                if ($scope.user.password != $scope.user.confirm_password) {
                    Flash.addMessage({
                        kindof: 'danger',
                        text: 'Ihre eingegebenen Passwörter stimmen nicht überein.'
                    });
                }
                else {
                    Auth.createUser({
                        email: $scope.user.email,
                        password: $scope.user.password,
                        firstname: $scope.user.firstname,
                        lastname: $scope.user.lastname,
                        username: $scope.user.email,
                        authToken: authToken,
                        resetToken: Math.random().toString(36).substring(10),
                        isAuthenticated: false

                        //profession: $scope.user.profession
                    }).then(function () {
                        // Account created, redirect to home
                        $rootScope.defaultFlashTimeout = 99999;
                        Flash.addMessage({
                            kindof: "success",
                            text: "Um Ihr Benutzerkonto zu aktivieren, klicken Sie bitte auf den Aktivierungslink, den wir Ihnen per E-Mail gesendet haben."
                        });

                        //Erstelle Dummyschlagworte für jeden neuen User
                        $location.path('/login');

                        angular.forEach(staticKeys, function (keyword, index) {
                            Keyword.save(keyword).success(function (response) {
                            })
                        });

                    }).catch(function (err) {
                        err = err.data;
                        $scope.errors = {};
                        var emailfield = false;
                        // Update validity of form fields that match the mongoose errors
                        angular.forEach(err.errors, function (error, field) {
                            if (error.path == "email")
                                emailfield = true;
                        });
                        if (emailfield) {
                            Flash.addMessage({
                                kindof: 'danger',
                                text: 'Diese E-Mail-Adresse wird bereits verwendet.'
                            });
                        }
                        else {
                            Flash.addMessage({
                                kindof: 'danger',
                                text: 'Ihr Benutzerkonto konnte leider nicht angelegt werden.'
                            });
                        }
                    });
                }
            }
        };
    });
