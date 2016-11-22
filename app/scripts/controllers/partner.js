'use strict';

angular.module('desktopApp')
    .controller('PartnerCtrl', function ($scope, PartnerService, Auth, User, $routeParams, $location, Flash, Help) {

        $scope.username = "";
        $scope.partnerFirstname = "";
        $scope.partnerLastname = "";
        $scope.partnerEmail = "";
        $scope.errors = "";
        $scope.partners = [];


        $scope.infotooltip = {
            edit: "Bearbeiten",
            delete: "Löschen"
        };

        activatePartners();

        /*
         * // workaround
         *
         * set the current username to our scope object
         * */
        function activatePartners() {

            User.get().then(function (user) {
                $scope.username = user.username;
            }).catch(function (err) {
                $scope.errors = err.data;
            });

            //$scope.partners = PartnerService.getAll();
            //
            PartnerService.getAll().then(function (data) {
                $scope.partners = data;
            });
        }

        /**
         * Save a Partner
         * */

        $scope.savePartner = function () {

            $scope.submitted = true;

            var newPartner = {
                _id: $scope.partnerId || null,
                user: $scope.username,
                firstname: $scope.partnerFirstname,
                lastname: $scope.partnerLastname,
                email: $scope.partnerEmail
            };


            PartnerService.save(newPartner).success(function (response) {

                //$scope.partners = PartnerService.getAll();
                PartnerService.getAll().then(function (data) {
                    $scope.partners = data;
                    Flash.addMessage({kindof: 'success', text: "Die Änderungen wurden gespeichert"});
                });
                $scope.partnerFirstname = '';
                $scope.partnerLastname = '';
                $scope.partnerEmail = '';
                $location.path('partners');


            }).error(function (response) {

                Flash.addMessage({kindof: 'danger', text: response.message});

                //
            });


        };

        /*_________________________________________________________________________________________*/

        /**
         * Delete a partner
         *
         *
         * */
        $scope.removePartner = function (partner_to_be_removed) {
            var deletePartner = confirm('Möchten sie ' + partner_to_be_removed.firstname + ' wirklich löschen?');
            if (deletePartner) {
                PartnerService.deletePartner(partner_to_be_removed).then(function () {
                    var index = $scope.partners.indexOf(partner_to_be_removed);
                    if (index > -1) $scope.partners.splice(index, 1);
                    PartnerService.getAll().then(function (data) {
                        $scope.partners = data;
                    });
                    Flash.addMessage({kindof: 'success', text: "Die Daten wurden gelöscht"});

                });
            }
        };

        /*_________________________________________________________________________________________*/

        /**
         * Load a partner by id
         *
         *
         * */

        $scope.loadPartner = function () {
            PartnerService.loadById($routeParams.id).then(function (partner) {
                $scope.partnerFirstname = partner.firstname;
                $scope.partnerLastname = partner.lastname;
                $scope.partnerEmail = partner.email;
                $scope.partnerId = partner._id;
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
