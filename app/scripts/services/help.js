'use strict';

angular.module('desktopApp').factory('Help', ['Restangular', '$rootScope', '$location', '$modal', '$aside', '$http', function (Restangular, $rootScope, $location, $modal, $aside) {

    /**
     *
     * In den Jeweiligen Controllern der Seiten auf denen der Hilfebutton Auftaucht befinden sich die deklarationen der MEthode showHelpAside(),
     * diese führen die Methode showHelp mit den parametern cue und scope aus
     *
     * */

    var restAngular =
        Restangular.withConfig(function (Configurer) {
            Configurer.setBaseUrl('/api');
            Configurer.setFullResponse(true);
            Configurer.setRestangularFields({
                id: "_id"
            })
        });

//  var helpData = [
//    {
//      cue: '/dashboard',
//      template: 'partials/helpDashboard.html'
//    },
///*    {
//      cue: '/create/new',
//      template: 'partials/helpCreate_new.html'
//    },*/
//    {
//      cue: '/invitees',
//      template: 'partials/helpInvitees.html'
//    },
//    {
//      cue: '/check/new',
//      template: 'partials/helpCompetenceNew.html'
//    },
//    {
//      cue: '/check/:id',
//      template: 'partials/helpCompetenceEdit.html'
//    },
//    {
//      cue: '/patterns',
//      template: 'partials/helpPatterns.html'
//    },
//    {
//      cue: '/external-assessment/:id',
//      template: 'partials/helpExAssess.html'
//    },
//    {
//      cue: '/resultview/:id',
//      template: 'partials/helpResultview.html'
//    }
//  ];

    /**
     * Die Daten für den Cue aus dem Array suchen
     * @param cue
     * @returns template-String
     */

    var searchForCue = function (cue) {
        var matchingResult = false;
        if (cue == $location.url()) {
            matchingResult = true;

        }
        return matchingResult;
    };
    return {
        showHelp: function (cue, scp, template) {
            var help_url = template;
            restAngular.one('help', help_url).get().then(
                function (response) {
                    scp.help_template = '_book/'+template;
                    
                    var help_aside = $aside({
                        show: false,
                        placement: 'right',
                        scope: scp,
                        template: 'partials/aside-help.html',
                    });

                    help_aside.$promise.then(function () {
                        help_aside.show();
                    });
                });
        },
        showHelpWithOverlay: function (cue, scp, template) {
            scp.help_template = template;

            var help_aside = $aside({
                show: false,
                placement: 'right',
                scope: scp,
                template: 'partials/aside-help-with-overlay.html'
            });

            help_aside.$promise.then(function () {
                help_aside.show();
            });
        },
        cueExists: function (cue) {
            return searchForCue(cue);
        }


    }
}]);