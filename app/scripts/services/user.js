'use strict';

angular.module('desktopApp')
    .factory('User', ['Restangular', '$http', function (Restangular) {

        var restAngular =
            Restangular.withConfig(function (Configurer) {
                Configurer.setBaseUrl('/api');
                Configurer.setRestangularFields({
                    id: "me"
                })
            });

        return {
            update: function (user) {
                return user.put()
            },
            updateProfession: function (user) {
                return user.customPUT(user, 'profession');
            },
            get: function () {
                return restAngular.one('users', 'me').get();
            },
            save: function (user) {
                var users = restAngular.all('users');
                return users.post(user);
            },
            changeSettings: function (user) {
                return user.customPUT(user, 'settings');
            },
            find: function (email) {
                var users = restAngular.all('users');
                return users.customPOST(email, 'find');
            },
            changePasswordByResetPassword: function (newPassword) {
                var users = restAngular.all('users');
                return users.customPOST(newPassword, 'updateResetPassword');
            },
            deleteAccount: function (password) {
                var users = restAngular.all('users');
                return users.customPOST(password, 'deleteAccount');
            }
        }
    }]);
