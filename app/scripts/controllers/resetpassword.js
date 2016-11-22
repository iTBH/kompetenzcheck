'use strict';

angular.module('desktopApp')
    .controller('ResetPasswordCtrl', function ($scope, Auth, $location, User, Flash, $routeParams, $timeout) {
        $scope.user = {};
        $scope.errors = {};

        $scope.forgotPassword = function (form) {
            $scope.submitted = true;
            if (form.$valid) {
                User.find({email: $scope.user.email}).then(function (response) {
                    Flash.addMessage({kindof: 'success', text: 'Eine Link zum zurücksetzen des Passworts wurde an sie versendet.'});
                    $timeout(function () {
                        window.location = "/login";
                    }, 2000);
                }).catch(function (err) {
                    err = err.data;
                    $scope.errors = {};

                    // Update validity of form fields that match the mongoose errors
                    angular.forEach(err.errors, function (error, field) {
                        form[field].$setValidity('mongoose', false);
                        $scope.errors[field] = error.type;
                    });

                    Flash.addMessage({
                        kindof: 'danger',
                        text: 'Kein gültiger Benutzer gefunden. Ist die E-Mail-Adresse richtig?'
                    });
                });
            }
        };
        $scope.resetPassword = function (form) {
            $scope.reset_token = $routeParams.id;
            $scope.submitted = true;
            if (form.$valid) {
                User.changePasswordByResetPassword({password: $scope.user.password, token: $scope.reset_token})
                    .then(function (response) {
                        Flash.addMessage({kindof: 'success', text: 'Dein Passwort wurde erfolgreich aktualisiert.'});
                        $timeout(function () {
                            window.location = "/login";
                        }, 2000);
                    })
                    .catch(function (err) {
                        err = err.data;
                        $scope.errors = {};

                        // Update validity of form fields that match the mongoose errors
                        angular.forEach(err.errors, function (error, field) {
                            form[field].$setValidity('mongoose', false);
                            $scope.errors[field] = error.type;
                        });

                        Flash.addMessage({kindof: 'danger', text: 'Das Passwort konnte nicht geändert werden. Bitte versuchen Sie es erneut.'});
                    });
            }
        };
    });
