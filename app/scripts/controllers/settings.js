'use strict';

angular.module('desktopApp')
    .controller('SettingsCtrl', function ($rootScope, $scope, User, Auth, Flash, Help, $location) {
        $scope.errors = {};

        $scope.changePassword = function (form) {
            $scope.submitted = true;

            if (form.$valid) {
                Auth.changePassword($scope.user.oldPassword, $scope.user.newPassword)
                    .then(function () {
                        $scope.message = 'Password successfully changed.';
                    })
                    .catch(function () {
                        form.password.$setValidity('mongoose', false);
                        $scope.errors.other = 'Incorrect password';
                    });
            }
        };

        $scope.deleteAccount = function (form) {
            $scope.submitted = true;
            var confirmDeleteAccount = confirm('Wollen Sie Ihren Account wirklich löschen? Diesen Vorgang können Sie nicht Rückgängig machen.');
            if (confirmDeleteAccount) {
                if (form.$valid) {
                    User.deleteAccount({password: $scope.user.password})
                        .then(function () {
                            Auth.logout()
                                .then(function () {
                                    Flash.addMessage({kindof: 'success', text: 'Account erfolgreich gelöscht.'});
                                    $location.path('/login');
                                });
                        })
                        .catch(function () {
                            form.password.$setValidity('mongoose', false);
                            $scope.errors.other = 'Fehler beim Löschen Ihres Accounts. Haben Sie das Passwort richtig eingegeben?';
                        });
                }
            }
        };

        $scope.changeSettings = function (form) {
            $scope.submitted = true;
            if (form.$valid) {
                User.changeSettings($rootScope.user)
                    .then(
                        function (response) {
                            Flash.addMessage({kindof: 'success', text: response.message});
                        },
                        function (err) {
                            Flash.addMessage({kindof: 'danger', text: 'Beim Speichern ist ein Fehler aufgetreten.'});
                        }
                    );
            }
        };

        $scope.showHelpAside = function (template) {
            Help.showHelp($location.url(), $scope, template);
        };

        $scope.changeProfession = function (form) {
            $scope.submittedProf = true;

            if (form.$valid) {

                $scope.xhrloader = User.updateProfession($rootScope.user)
                    .then(
                        function (response) {
                            Flash.addMessage({kindof: 'success', text: response.message});
                        },
                        function (err) {
                            Flash.addMessage({kindof: 'danger', text: 'Beim Ändern der Berufsbezeichnung ist ein Fehler aufgetreten.'});
                        }
                    )
            }
        };


    });
