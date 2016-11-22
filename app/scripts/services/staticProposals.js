'use strict';

angular.module('desktopApp').factory('StaticProposalsService', [function () {

  return {
    getStaticProposals: function () {
      return [
        {
          "id": 1,
          "statement": "Kundenanfrage auswerten",
          "phase": "beginning",
          "cat": "f"
        },
        {
          "id": 2,
          "statement": "Projektplan Erstellen",
          "phase": "planning",
          "cat": "f"
        },
        {
          "id": 3,
          "statement": "Aufgaben, fach- und fristgerecht umsetzen",
          "phase": "operation",
          "cat": "s"
        },
        {
          "id": 4,
          "statement": "Projektübergabe Tätigen, Abrechnung erstellen",
          "phase": "ending",
          "cat": "f"
        }

      ];
    }
  };
}]);
