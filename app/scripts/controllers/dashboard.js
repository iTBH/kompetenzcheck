'use strict';

angular.module('desktopApp')
    .controller('DashboardCtrl', [
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
        'CheckService',
        'ShareService',
        'Mail', 'Keyword', '$location', function ($rootScope, $scope, $http, User, Auth, Flash, $modal, PartnerService, Invitees, Help, CheckService, ShareService, Mail, Keyword, $location) {

            $scope.xhrloader = CheckService.getChecks()
                .then(function (checks) {

                        $scope.complete = true;
                        $scope.checks = checks;

                        //Set partner filterbox
                        $scope.addressees = [];
                        $scope.uniqueNames = [];

                        angular.forEach(checks, function (checkVal, checkKey) {
                            angular.forEach(checkVal.updates, function (updateVal, upKey) {
                                $scope.addressees.push(updateVal.addressee);

                            });
                        });

                        $.each($scope.addressees, function (i, el) {
                            if ($.inArray(el, $scope.uniqueNames) === -1) $scope.uniqueNames.push(el);
                        });

                        //$scope.arrayIsValidForFilterCriteria = function (arrayTwoCheck, filterValueArray) {
                        //  if (count(filterValueArray) == 0) {
                        //    return true;
                        //  }
                        //
                        //  angular.forEach(filterValueArray, function (filterValue) {
                        //    if (filterValue.indexOf(filterValueArray) !== -1) {
                        //      return true;
                        //    }
                        //  });
                        //
                        //  return false;
                        //};

                        // Gelernt: Werte müssen immer als Funktion oder Objekt definiert werden,
                        // damit sie in Kinderscopes vererbt werden können.
                        $scope.candidateModel = {
                            candidate: null,
                            fullname: null
                        };

                        $scope.predicate = '-created';

                        // Dummy für Infotooltips der Aktionsmöglichkeiten
                        $scope.infotooltip = {
                            assigncheck: "Weisen Sie den Check einer anderen Person zu.",
                            firstself: "Führen Sie eine erste Selbsteinschätzung auf Basis Ihrer Vorerfahrungen durch.",
                            otherself: "Führen Sie eine weitere Selbsteinschätzung auf Basis Ihrer aktuell gesammelten Erfahrungen durch.",
                            firstinviteexass:  "Laden Sie Jemanden dazu ein, Ihren Kompetenzstand einzuschätzen.",
                            otherinviteexass: "Laden Sie eine weitere Person dazu ein, Ihren Kompetenzstand einzuschätzen.",
                            stoprunning:  "Beenden Sie den Check, wenn alle Einschätzungen abgeschlossen sind.",
                            goevaluate: "Reflektieren Sie die Ergebnisse des Kompetenz-Checks, z. B. in einem Auswertungsgespräch.",
                            import: "Importieren Sie den Ihnen zugewiesenen Check in Ihr Profil.",
                            finish: "Beenden Sie den Check im Anschluss an das Auswertungsgespräch und löschen Sie alle personenbezogenen Daten.",
                            evaluation: "Auswertung",
                            view: "Ansehen",
                            edit: "Bearbeiten",
                            duplicate: "Duplizieren",
                            delete: "Löschen"

                        };

                        /**
                         * Die Partner des Users holen
                         * @param e
                         * @returns {*}
                         */
                        PartnerService.getAll().then(function (data) {
                            $scope.partners = data;
                        });


                        // FUnktionen für die filterauswahl (select2 modul) im dashboard
                        $('#selectPartner').select2({
                            theme: "default",
                            multiple: true,
                            placeholder: "Partner-Filter",
                            minimumResultsForSearch: 1,
                            width: '100%',
                            closeOnSelect: true
                        });

                        $('#selectKeyword').select2({
                            theme: "default",
                            multiple: true,
                            placeholder: "Schlagwort-Filter",
                            minimumResultsForSearch: 1,
                            width: '100%',
                            closeOnSelect: true
                        });
                        //$(function() {
                        //  //Here you add the bottom pixels you need. I added 200px.
                        //  $('.select2-selection__rendered').css({top:'45px',position:'relative'});
                        //
                        //});

                        // hole alle gespeicherten schlagworte
                        Keyword.getAll().then(function (data) {
                            $scope.allKeywords = data;

                        });


                        $scope.getEventText = function (e) {
                            //console.log(e);
                            return CheckService.getEventText(e);
                        };

                        $scope.removeCheck = function (check_to_be_removed) {

                            var deleteCheck = confirm('Sie sind im Begriff, diesen Check unwiederruflich zu löschen. ' +
                                'Damit gehen auch alle damit verbundenen Daten aus den Selbst- und ' +
                                'Fremdeinschätzungen unwiderruflich verloren!');

                            if (deleteCheck) {
                                CheckService.deleteCheck(check_to_be_removed)
                                    .then(
                                        function (response) {

                                            var index = $scope.checks.indexOf(check_to_be_removed);
                                            if (index > -1) $scope.checks.splice(index, 1);
                                            Keyword.getAll();
                                            Flash.addMessage({kindof: 'success', text: response.message});
                                        },
                                        function () {
                                            Flash.addMessage({kindof: 'danger', text: response.message});
                                        });
                            }
                        };

                        $scope.duplicateCheck = function (check_to_be_duplicated) {

                            var new_check = angular.copy(check_to_be_duplicated);

                            // Schritt zurücksetzen, um die Kopie bearbeitbar zu machen
                            // new_check.step = 1;

                            CheckService.duplicateCheck(new_check)
                                .then(
                                    function (response) {
                                        Flash.addMessage({kindof: 'success', text: response.message});
                                        var c_id = response.data._id;

                                        CheckService.getChecks()
                                            .then(
                                                function (checks) {
                                                    $scope.checks = checks;
                                                    window.location = "check/" + c_id;

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

                        // -----------------------------------------------------------------
                        // ------------------ Share-Modal ----------------------------------
                        // -----------------------------------------------------------------


                        // Tabs im Share Modal

                        $scope.sharemodaltabs = [
                            //{
                            //    "title": "An Partnerin oder Partner",
                            //    "template": "partials/sharemodal-viatoken.html"
                            //},
                            {
                                "title": "Per Mail zuweisen",
                                "template": "partials/sharemodal-viamail.html"
                            },
                            {
                                "title": "Per Nummer zuweisen",
                                "template": "partials/sharemodal-vianumber.html"
                            }
                        ];

                        $scope.sharemodaltabs.activeTab = 0;

                        /**
                         * Definition des Freigabe-Dialog als Overlay
                         */
                        var share_modal = $modal({
                            scope: $scope,
                            template: 'partials/sharemodal.html',
                            show: false,
                            backdrop: 'static'
                        });

                        /**
                         * Öffnen des Overlays für die Freigabe
                         * @param c
                         */
                        $scope.openShareModal = function (c) {

                            $scope.addressee = {};

                            $scope.hasShareNumber = false;

                            if (c.shareNumber) {
                                $scope.shareNumber = c.shareNumber;
                                $scope.hasShareNumber = true;
                            } else {
                                $scope.shareNumber = Math.floor((Math.random() * 999999) + 9999);
                            }

                            $scope.checkToBeShared = c;

                            share_modal.$promise.then(function () {

                                // Später Auszubildende holen, die in der Liste angezeigt werden können.

                                share_modal.show();
                            });
                        };

                        // -----------------------------------------------------------------
                        // ------------------ Import-Modal ---------------------------------
                        // -----------------------------------------------------------------

                        /**
                         * Definition des Freigabe-Dialog als Overlay
                         */
                        var import_modal = $modal({
                            scope: $scope,
                            template: 'partials/importmodal.html',
                            show: false,
                            backdrop: 'static'
                        });

                        /**
                         * Öffnen des Overlays für die Freigabe
                         * @param c
                         */
                        $scope.openImportModal = function (c) {

                            $scope.checknumber = {
                                value: 3276897265987
                            };

                            import_modal.$promise.then(function () {

                                // Später Auszubildende holen, die in der Liste angezeigt werden können.

                                import_modal.show();
                            });
                        };

                        // TODO Das Importieren fehlt noch auf dem Server!
                        $scope.importViaChecknumber = function (form) {

                            $scope.importSubmitted = true;

                            if (form.$valid) {
                                $scope.importSubmitted = false;
                                CheckService.importViaNumber($scope.checknumber.value)
                                    .then(
                                        function (response) {
                                            Flash.addMessage({
                                                kindof: "success",
                                                text: "Der Check wurde erfolgreich importiert. Sie können ihn jetzt bearbeiten oder mit einer Selbsteinschätzung beginnen."
                                            });
                                            $scope.refreshDashboard();
                                        },
                                        function (response) {
                                            Flash.addMessage({
                                                kindof: 'danger',
                                                text: 'Der Check konnte nicht importiert werden.'
                                            });
                                        });

                                import_modal.hide();
                            }
                        };

                        $scope.cancelImport = function () {
                            $scope.importSubmitted = false;
                            import_modal.hide();
                        }

                        // -----------------------------------------------------------------
                        // ------------------ Invite-Modal ---------------------------------
                        // -----------------------------------------------------------------

                        $scope.invitee = {
                            salutation: "",
                            firstname: "",
                            lastname: "",
                            email: ""
                        };

                        /**
                         * Definition des Freigabe-Dialog als Overlay
                         */
                        var invite_modal = $modal({
                            scope: $scope,
                            template: 'partials/invitemodal.html',
                            show: false,
                            backdrop: 'static'
                        });

                        /**
                         * Öffnen des Overlays für die Freigabe
                         * @param c
                         */
                        $scope.openInviteModal = function (c) {

                            $scope.checkToInviteTo = c;

                            invite_modal.$promise.then(function () {
                                invite_modal.show();

                            });
                        };

                        $scope.inviteViaMail = function (form) {

                            if (form.$valid) {
                                Invitees.sendInvitationViaMail(
                                    {
                                        data: {
                                            invitee: {
                                                salutation: $scope.invitee.salutation,
                                                firstname: $scope.invitee.firstname,
                                                lastname: $scope.invitee.lastname,
                                                mail: $scope.invitee.email
                                            },
                                            check: $scope.checkToInviteTo
                                        }
                                    })
                                    .then(function (response) {
                                        // Nach erfolgreichem Speichern die Ansicht mit DB-Inhalt
                                        // aktualisieren
                                        invite_modal.hide();
                                        Flash.addMessage({kindof: 'success', text: response.data.message});
                                        $scope.refreshDashboard();
                                    })
                                    .catch(function (response) {
                                        Flash.addMessage({kindof: 'danger', text: response.data.message});

//                            form['newToken'].$setValidity('mongoose', false);
//                            $scope.errors.notoken = err.data.error;
                                    });
                            }
                        };

                        /**
                         * "Kompetenz-Check zuweisen" im Overlay geklickt
                         */
                        $scope.shareViaMail = function (form, check) {

                            if (form.$valid) {

                                CheckService.shareViaMail(check, $scope.addressee.email)
                                    .then(
                                        function (response) {
                                            Flash.addMessage({kindof: 'success', text: response.message});
                                            $scope.refreshDashboard();
                                        },
                                        function (response) {
                                            Flash.addMessage({
                                                kindof: 'danger',
                                                text: 'Es ist ein Fehler aufgetreten, möglicherweise existiert dieser Benutzer nicht!'
                                            });
                                        });
                                share_modal.hide();
                            }
                        };


                        /**
                         * "Kompetenz-Check zuweisen" im Overlay geklickt
                         */
                        $scope.shareViaNumber = function (form, check) {

                            if (form.$valid) {

                                CheckService.shareViaNumber(check, $scope.shareNumber)
                                    .then(
                                        function (response) {
                                            Flash.addMessage({kindof: 'success', text: response.message});
                                            $scope.refreshDashboard();
                                        },
                                        function (response) {
                                            Flash.addMessage({
                                                kindof: 'danger',
                                                text: 'Es ist ein Fehler aufgetreten!'
                                            });
                                        });
                                share_modal.hide();
                            }
                        };


                        /**
                         * Einem eingetragenen Partner zuweisen
                         */
                        $scope.shareWithPartner = function (form, check) {

                            if (form.$valid) {

                                CheckService.shareViaMail(check, $scope.addressee.email)
                                    .then(
                                        function (response) {
                                            Flash.addMessage({kindof: 'success', text: response.message});
                                            $scope.refreshDashboard();
                                        },
                                        function (response) {
                                            Flash.addMessage({
                                                kindof: 'danger', text: 'Es ist ein Fehler aufgetreten. Hat sich der ' +
                                                'Benutzer mit dieser Emailadresse schon registriert?'
                                            });
                                        });
                                share_modal.hide();
                            }
                        };

                        $scope.acceptAssignment = function (check) {
                            CheckService.acceptAssignment(check).then(
                                function (response) {
                                    Flash.addMessage({kindof: 'success', text: response.message});
                                    $scope.refreshDashboard();
                                },
                                function (response) {
                                    Flash.addMessage({kindof: 'success', text: response.message});
                                    $scope.refreshDashboard();
                                }
                            )
                        };
                        $scope.rejectAssignment = function (check) {
                            CheckService.rejectAssignment(check).then(
                                function (response) {
                                    Flash.addMessage({kindof: 'success', text: response.message});
                                    $scope.refreshDashboard();
                                },
                                function (response) {
                                    Flash.addMessage({kindof: 'success', text: response.message});
                                    $scope.refreshDashboard();
                                }
                            )

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

                        $scope.stopRunning = function (check) {

                            var closeCheck = confirm('Möchten Sie den Check wirklich abschließen?\nAlle ausstehenden Einschätzungen bleiben erhalten, auch wenn sie nicht fertig gestellt wurden.');

                            if (closeCheck) {
                                CheckService.close(check).then(
                                    function (response) {
                                        Flash.addMessage({kindof: 'success', text: response.message});
                                        $scope.refreshDashboard();
                                    },
                                    function (response) {
                                        Flash.addMessage({kindof: 'danger', text: response.message});
                                    });
                            }

                        };


                        /**
                         *
                         * @param check
                         */
                        $scope.anonymizeCheck = function (check) {

                            var anonymizeCheck = confirm('Möchten Sie den Check wirklich beenden?\nAlle personenbezogenen Daten werden gelöscht.');

                            if (anonymizeCheck) {
                                check.anonymize = true;

                                CheckService.anonymize(check).then(
                                    function (response) {
                                        Flash.addMessage({kindof: 'success', text: response.message});
                                        $scope.refreshDashboard();
                                    },
                                    function (response) {
                                        Flash.addMessage({kindof: 'danger', text: response.message});
                                    });
                            }
                        };


                        /**
                         * Helper-Functionen für ngShow und ngHide im View
                         * Hilft zuentscheiden, welche Aktionsmöglichkeiten zur Verfügung stehen
                         * @param check
                         * @returns Boolean
                         */
                        $scope.ifUserHasToDecideOnImport = function (check) {
                            return CheckService.ifUserHasToDecideOnImport(check);
                        };

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

                        $scope.ifTwoPersonalRunsDone = function (check) {
                            return CheckService.ifTwoPersonalRunsDone(check);
                        };


                        $scope.ifCheckCompleted = function (check) {

                            if (check.closed === undefined || check.closed === false) {
                                return false;
                            } else if (check.closed !== undefined && check.closed === true) {
                                return true;
                            }

                        };


                    },
                    function (err) {
                    });

            //Filtering by both set filters
        }]).filter('byAll', ['$filter', function ($filter) {
    return function (checks, filters) {

        //append an addressee array to each check so it can be recognized by the filter
        angular.forEach(checks, function (checkVal, checkKey) {
            var allAdressees = [];
            angular.forEach(checkVal.updates, function (updateVal, upKey) {
                if (updateVal.addressee !== undefined) {
                    allAdressees.push(updateVal.addressee);
                }
            });
            checkVal.addressees = allAdressees;
        });

        var filterObj = {
            data: checks,
            filteredData: checks,
            applyFilter: function (obj, key) {
                var fData = [];
                if (this.filteredData.length == 0) {
                    this.filteredData = this.data;
                }
                if (obj) {
                    var fObj = {};
                    if (!angular.isArray(obj)) {
                        fObj[key] = obj;
                        fData = fData.concat($filter('filter')(this.filteredData, fObj));
                    } else if (angular.isArray(obj)) {
                        if (obj.length > 0) {
                            for (var i = 0; i < obj.length; i++) {
                                if (angular.isDefined(obj[i])) {
                                    fObj[key] = obj[i];
                                    fData = fData.concat($filter('filter')(this.filteredData, fObj));
                                }
                            }

                        }
                    }

                    if (fData.length > 0) {
                        this.filteredData = fData;
                    }
                }
            }

        };

        if (filters) {
            angular.forEach(filters, function (obj, key) {
                filterObj.applyFilter(obj, key);
            });
        }

        return filterObj.filteredData;
    }
}]);

/*
 .filter('byAll', function () {

 return function (checks, filters) {

 var filteredChecksByPartners = [];
 var filteredChecksByKeywords = [];
 var all = [];
 var checkBoxFlag;

 if (this.query !== undefined) {
 checkBoxFlag = this.query.complete;
 }
 //funktion um ein Objekt mit Objekten in einem Array zu vergleichen, da indexOf mit Objekten nicht funktioniert

 function containsObject(obj, list) {
 var i;
 for (i = 0; i < list.length; i++) {
 if (list[i] === obj) {
 return true;
 }
 }

 return false;
 }

 // prüfe auf vorhandene checks
 if (checks !== undefined && checks !== null && checks.length > 0) {
 // wenn filter gesetzt
 if (filters !== undefined || filters === null) {

 if (filters.partners !== undefined && filters.partners !== null) {

 angular.forEach(checks, function (checkObject, checkKey) {

 //var partnersExistingCnt = 0;
 angular.forEach(filters.partners, function (allFilteredValues, allFilteredKeys) {
 if (checkObject !== null) {

 angular.forEach(checkObject.updates, function (checkObjUpdates, checkObjUpdatesKey) {

 if (checkObjUpdates.addressee !== undefined) {

 if (checkObjUpdates.addressee.indexOf(allFilteredValues) !== -1) {

 if (containsObject(checkObject, filteredChecksByKeywords) === false && containsObject(checkObject, filteredChecksByPartners) === false) {
 //partnersExistingCnt++;
 if (checkBoxFlag === true) {
 filteredChecksByPartners.push(checkObject);
 }
 else if (checkBoxFlag === false && ( checkObject.closed === undefined || checkObject.closed === false)) {
 filteredChecksByPartners.push(checkObject);
 } else if (checkBoxFlag === false && ( checkObject.closed !== undefined || checkObject.closed === true)) {
 return true;
 }
 //filteredChecksByPartners.push(checkObject);

 }
 }
 }
 });
 }
 });
 //if (filters.partners.length === partnersExistingCnt) {
 //  filteredChecksByPartners.push(checkObject);
 //}
 });
 all.push.apply(all, filteredChecksByPartners);
 }

 if (filters.keywords !== undefined && filters.keywords !== null) {


 //angular.forEach(filteredChecksByPartners, function (checkObject, checkKey) {
 angular.forEach(checks, function (checkObject, checkKey) {
 //var keywordExistingCnt = 0;
 angular.forEach(filters.keywords, function (allFilteredValues, allFilteredKeys) {


 if (checkObject.keywords !== undefined && checkObject.keywords !== null && checkObject.keywords.length > 0) {

 if (checkObject.keywords.indexOf(allFilteredValues) !== -1) {
 //keywordAlreadyFiltered.push(checkObject.keywords);
 if (containsObject(checkObject, filteredChecksByKeywords) === false && containsObject(checkObject, filteredChecksByPartners) === false) {
 //keywordExistingCnt++;
 if (checkBoxFlag === true) {
 filteredChecksByKeywords.push(checkObject);
 }
 if (checkBoxFlag === false && ( checkObject.closed === undefined || checkObject.closed === false)) {
 filteredChecksByKeywords.push(checkObject);
 } else if (checkBoxFlag === false && ( checkObject.closed !== undefined || checkObject.closed === true)) {
 return true;
 }

 //filteredChecksByKeywords.push(checkObject);
 }
 }
 }
 });
 //if (filters.keywords.length === keywordExistingCnt) {
 //  filteredChecksByKeywords.push(checkObject);
 //}
 });
 all.push.apply(all, filteredChecksByKeywords);
 }

 if (this.query.complete !== undefined && (filters.keywords === undefined || filters.keywords === null) && (filters.partners === undefined || filters.partners === null)) {

 angular.forEach(checks, function (checkObject, checkKey) {

 if (checkBoxFlag === true) {
 all.push(checkObject);
 }

 else if (checkBoxFlag === false && ( checkObject.closed === undefined || checkObject.closed === false)) {
 all.push(checkObject);
 } else if (checkBoxFlag === false && ( checkObject.closed !== undefined || checkObject.closed === true)) {
 return true;
 }

 });
 return all;
 }


 if (all === null || all.length === 0 || all === undefined) {
 all = checks;

 }

 return all;

 }
 // wenn filter nicht gesetzt gib alles aus
 else {

 return checks;
 }
 }
 }
 })

 */
