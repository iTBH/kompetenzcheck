'use strict';

angular.module('desktopApp')
    .controller('KeywordCtrl', function ($scope, Keyword, Auth, User, $routeParams, $location, Flash, Help, CheckService) {

        // eine funktion, welche ausgeführt wird, wenn auf speichern geklickt wird

        $scope.username = "";
        $scope.keywordName = "";
        $scope.keywordDescription = "";
        $scope.errors = "";
        $scope.allKeywords = [];

        $scope.infotooltip = {
            edit: "Bearbeiten",
            delete: "Löschen"
        };

        activate();

        /*
         * // workaround
         *
         * set the current username to our scope object
         * */
        function activate() {

            User.get().then(function (user) {
                $scope.username = user.username;
            }).catch(function (err) {
                $scope.errors = err.data;
            });

            Keyword.getAll().then(function (data) {
                $scope.allKeywords = data;
            });
        }

        /*
         * save the keyword
         *
         * */
        $scope.saveKeyword = function () {

            $scope.submitted = true;

            var newKeyword = {
                _id: $scope.keywordId || null,
                user: $scope.username,
                name: $scope.keywordName,
                description: $scope.keywordDescription,
                username_keyword: $scope.username + '_' + $scope.keywordName
            };


            Keyword.save(newKeyword).success(function (response) {

                Keyword.getAll().then(function (data) {
                    $scope.allKeywords = data;
                });
                $scope.keywordName = '';
                $scope.keywordDescription = '';
                $location.path('keywords');
                Flash.addMessage({kindof: 'success', text: 'Die Änderungen wurden gespeichert.'});
            }).error(function (response) {
                Flash.addMessage({kindof: 'danger', text: response.message});
            });


        };


        /*_________________________________________________________________________________________*/

        /**
         *Delete a keyword from db and view
         *
         *
         * */

        $scope.removeKeyword = function (keyword_to_be_removed) {
            var deleteKeyword = confirm('Möchten sie dieses Schlagwort wirklich löschen?');
            if (deleteKeyword) {
                Keyword.deleteKeyword(keyword_to_be_removed).then(function () {
                    var index = $scope.allKeywords.indexOf(keyword_to_be_removed);
                    if (index > -1) $scope.allKeywords.splice(index, 1);
                    Keyword.getAll().then(function (data) {
                        $scope.allKeywords = data;
                    });
                    Flash.addMessage({kindof: 'success', text: 'Das Schlagwort wurde gelöscht.'});
                });
            }
        };


        /*_________________________________________________________________________________________*/

        /**
         * Load one Keyword by id
         *
         *
         * */

        $scope.loadKeyword = function () {
            Keyword.loadById($routeParams.id).then(function (keyword) {
                $scope.keywordName = keyword.name;
                $scope.keywordDescription = keyword.description;
                $scope.keywordId = keyword._id;
            });
        };


        /**
         * Hilfe anzeigen
         */
        $scope.showHelpAside = function (template) {
            Help.showHelp($location.url(), $scope, template);
        };
        $scope.cueExists = function (cue) {
            //return true;
            return Help.cueExists(cue);
        };
    });
