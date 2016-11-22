'use strict';

angular.module('desktopApp')
  .controller('PatternCtrl', [
    '$rootScope',
    '$scope',
    '$http',
    'User',
    'Auth',
    'Flash',
    '$modal',
    'PartnerService',
    'Invitees',
    'Help',
    'ShareService',
    'Mail', 'Keyword', '$location', 'CheckService', function ($rootScope, $scope, $http, User, Auth, Flash, $modal, PartnerService, Invitees, Help, ShareService, Mail, Keyword, $location, CheckService) {

      $scope.xhrloader = CheckService.getChecks()
        .then(function (checks) {

          $scope.getPatternChecks = function (checks) {
            var patternChecks = [];
            angular.forEach(checks, function (checkVal, checkKey) {
              if (checkVal.keywords.indexOf('Vorlage') !== -1) {
                patternChecks.push(checkVal);
              }
            });
            return patternChecks;
          };



          $scope.checks = $scope.getPatternChecks(checks);


          // Gelernt: Werte müssen immer als Funktion oder Objekt definiert werden,
          // damit sie in Kinderscopes vererbt werden können.
          $scope.candidateModel = {
            candidate: null,
            fullname: null
          };

          $scope.predicate = '-created';

          // Dummy für Infotooltips der Aktionsmöglichkeiten
          $scope.infotooltip = {
              assigncheck: {
                  title: "Weisen Sie den Check einer anderen Person zu."
              },
              firstself: {
                  title: "Führen Sie eine erste Selbsteinschätzung auf Basis Ihrer Vorerfahrungen durch."
              },
              otherself: {
                  title: "Führen Sie eine weitere Selbsteinschätzung auf Basis Ihrer aktuell gesammelten Erfahrungen durch."
              },
              firstinviteexass: {
                  title: "Laden Sie Jemanden dazu ein, Ihren Kompetenzstand einzuschätzen."
              },
              otherinviteexass: {
                  title: "Laden Sie eine weitere Person dazu ein, Ihren Kompetenzstand einzuschätzen."
              },
              stoprunning: {
                  title: "Beenden Sie den Check, wenn alle Einschätzungen abgeschlossen sind."
              },
              goevaluate: {
                  title: "Reflektieren Sie die Ergebnisse des Kompetenz-Checks, z. B. in einem Auswertungsgespräch."
              },
              import: {
                  title: "Importieren Sie den Ihnen zugewiesenen Check in Ihr Profil."
              },
              finish: {
                  title: "Beenden Sie den Check im Anschluss an das Auswertungsgespräch und löschen Sie alle personenbezogenen Daten."
              }
          };

          $scope.getEventText = function (e) {
            return CheckService.getEventText(e);
          };


          $scope.duplicateCheck = function (check_to_be_duplicated) {

            var new_check = angular.copy(check_to_be_duplicated);

            // Schritt zurücksetzen, um die Kopie bearbeitbar zu machen
            // new_check.step = 1;

            CheckService.duplicateCheck(new_check)
              .then(
              function (response) {

                Flash.addMessage({kindof: 'success', text: response.message});

                CheckService.getChecks()
                  .then(
                  function (checks) {
                    $scope.checks = $scope.getPatternChecks(checks);

                  },
                  function (err) {
                    Flash.addMessage({kindof: 'danger', text: 'Es ist ein Fehler aufgetreten.'});
                  }
                )
              },
              function (err) {
                Flash.addMessage({kindof: 'danger', text: 'Der Check konnte nicht dupliziert werden.'});
              });
          };

          /**
           * Berechnet die Gesamtsumme aller Kompetenzbeschreibungen pro Check
           * @param check Object
           * @returns {number}
           */
          $scope.getNumberOfStatementsFromCheck = function (check) {

            var competence = check.phrases;

            // Zähler für die einzelnen Phasen
            var bCount = 0;
            var pCount = 0;
            var oCount = 0;
            var eCount = 0;

            var phase;

            for (var i = 0; i < competence.length; i++) {
              phase = competence[i].phase;
              switch (phase) {
                case 'beginning':
                  bCount++;
                  break;
                case 'planning':
                  pCount++;
                  break;
                case 'operation':
                  oCount++;
                  break;
                case 'ending':
                  eCount++;
                  break;
              }
            }

            return (bCount + pCount + oCount + eCount);
          };


          $scope.getNumberOfChecks = function () {
            return $scope.checks.length;
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


          $scope.refreshDashboard = function () {
            CheckService.getChecks()
              .then(
              function (checks) {
                $scope.checks = checks;

              },
              function (err) {
              })
          };


          /**
           * Helper-Functionen für ngShow und ngHide im View
           * Hilft zuentscheiden, welche Aktionsmöglichkeiten zur Verfügung stehen
           * @param check
           * @returns Boolean
           */


          $scope.ifLocked = function (check) {
            return CheckService.ifLocked(check);
          };

          $scope.ifNotLocked = function (check) {
            return CheckService.ifNotLocked(check);
          };

          $scope.ifAssignedTo = function (check) {
            return CheckService.ifAssignedTo(check);
          };

          $scope.ifNotAssignedTo = function (check) {
            return CheckService.ifNotAssignedTo(check);
          };

          $scope.ifClosed = function (check) {
            return CheckService.ifClosed(check);
          };

          $scope.ifNotClosed = function (check) {
            return CheckService.ifNotClosed(check);
          };

          $scope.ifAtLeastOneRun = function (check) {
            return CheckService.ifAtLeastOneRun(check);
          };

        },
        function (err) {
        });

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
    }]);
