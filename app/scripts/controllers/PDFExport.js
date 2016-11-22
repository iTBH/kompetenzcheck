'use strict';

angular.module('desktopApp')
  .controller('PDFCtrl', function ($scope, PartnerService, Auth, User, $routeParams, $location, Flash, CheckService) {

    $scope.username = "";
    $scope.multiplier = 1;
    $scope.multiplier = parseInt($scope.multiplier);

    $scope.routeParamsId = '';

    if ($routeParams.id == undefined) {
      // Wird auf dem Server ausgewertet und zeigt an, dass neu
      $scope.routeParamsId = 0;
    } else {
      $scope.routeParamsId = $routeParams.id;
    }

    activatePDFExport();

    function activatePDFExport() {

      User.get().then(function (user) {
        $scope.username = user.username;
      }).catch(function (err) {
        $scope.errors = err.data;
      });


    }

    $scope.xhrloader = CheckService.getSingleCheck($scope.routeParamsId).then(
      function (check) {
        $scope.generatePDF = function () {


          var doc = new jsPDF('p', 'pt');

          /**
           * Replace next codesnippet to useful code
           *
           * */

          /*____ Replace from here_____*/
          var columns = [
            {title: "ID", dataKey: "id"},
            {title: "Created @", dataKey: "created"},
            {title: "Name", dataKey: "name"},
            {title: "Description", dataKey: "description"}
          ];
          var rows = [
            {"id": check._id, "created": check.created, "name": check.title, "description" : check.description}
          ];


          doc.text("From HTML", 40, 50);
          var res = doc.autoTableHtmlToJson(document.getElementById("tab_customers"));
          doc.autoTable(res.columns, res.data, {startY: 60});


          /*______Replace till Here _____*/
          return doc.save(check.title + '.pdf');
        }

      })

  }
);
