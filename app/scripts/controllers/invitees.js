'use strict';

angular.module('desktopApp')
  .controller('InviteesCtrl', function ($scope, $http, User, Auth, $modal, $aside, CheckService, Help) {

    $scope.inviteesModel = {};

    var user = User.get().then(function (data) {
      $scope.userinfo = {
        username: data.username,
        firstname: data.firstname,
        lastname: data.lastname,
        profession: data.professionlong
      };
    });

    var getUniqueInvitationsViaMail = function () {

      $scope.xhrloader = CheckService.getChecks()
        .then(function (checks) {

          var addrs = [];

          angular.forEach(checks, function (check) {

            angular.forEach(check.invitations, function (invitation) {
              if (addrs.indexOf(invitation.mail) == -1) {
                addrs.push(invitation.mail);
              }
            })
          });

          $scope.mailAddrOfInvitees = addrs;

        });
    };

    getUniqueInvitationsViaMail();

    ;
    /**
     * Definition des Hinzufügen-Dialogs als Overlay
     */
    var add_modal = $modal({
      scope: $scope,
      template: 'partials/addinviteesmodal.html',
      show: false,
      backdrop: 'static'
    });

    /**
     * Öffnen des Overlays für die Freigabe
     */
    $scope.openAddModal = function () {

      add_modal.$promise.then(function () {
        $scope.inviteesModel.newToken = null;
        $scope.errors = null;
        add_modal.show();
      });
    };

    /**
     * Speichert das Token
     * @param form Das Eingabeformular
     */
    $scope.saveNewToken = function (form) {

      $scope.submitted = true;

      if (form.$valid) {
        var newToken = $scope.inviteesModel.newToken;
        Invitees.addNewInvitee(newToken)
          .then(function () {
            // Nach erfolgreichem Speichern die Ansicht mit DB-Inhalt
            // aktualisieren
            add_modal.hide();
            _refreshInvitees();
          })
          .catch(function (err) {
            $scope.errors = {};

            form['newToken'].$setValidity('mongoose', false);
            $scope.errors.notoken = err.data.error;
          });
      }
    };

    /**
     * Hilfe anzeigen
     */
    $scope.showHelpAside = function (template) {
      Help.showHelp($location.url(), $scope, template);
    };

    $scope.cueExists = function (cue) {

      return Help.cueExists(cue);

    };

  });
