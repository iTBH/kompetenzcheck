'use strict';

angular.module('desktopApp')
    .controller('ResultCtrl', ['$scope', 'Auth', 'User', '$location', 'CheckService', '$routeParams', 'ExternalAssessmentService', 'ResultToPDFService', 'Help', '$timeout', function ($scope, Auth, User, $location, CheckService, $routeParams, ExternalAssessmentService, ResultToPDFService, Help, $timeout) {

        $scope.$watch('$viewContentLoaded', function () {
            $timeout(function () {
            }, 500);
        });

        var getParameter = $routeParams.mail ? $routeParams.mail : null;

        $scope.selectedName = getParameter ? getParameter : "Alle";
        $scope.allPersonalResults = [];
        $scope.allSubjectResults = [];
        var personalResults = [];
        var subjectResults = [];
        var allResults = [];

        $scope.updateResultView = function () {
            var selectedMail = this.selectedName;
            if (selectedMail != "Alle")
                window.location = location.pathname + "?mail=" + selectedMail;
            else
                window.location = location.pathname;
        };

        $scope.showHelpAside = function (template) {
            Help.showHelp($location.url(), $scope, template);
        };

        $scope.cueExists = function (cue) {
            return true;
        };

        $scope.tabs = [
            {
                'title': 'Auftragsanalyse',
                'phase': 'beginning',
                'count': 0,
                'id': 1
            },
            {
                "title": "Planung",
                'phase': 'planning',
                'count': 0,
                'id': 2
            },
            {
                "title": "Durchführung",
                'phase': 'operation',
                'count': 0,
                'id': 3
            },
            {
                "title": "Abschluss",
                'phase': 'ending',
                'count': 0,
                'id': 4
            }
        ];

        $scope.starCaptions =
            [
                {
                    "title": "Ich kann das noch nicht und brauche umfassende Unterstützung.",
                    "value": 1
                },
                {
                    "title": "Ich kann das erst ein bisschen und brauche noch relativ viel Unterstützung.",
                    "value": 2
                },
                {
                    "title": "Ich kann das schon relativ gut und brauche nur noch wenig Unterstützung.",
                    "value": 3
                },
                {
                    "title": "Ich kann das sehr gut und brauche keine weitere Unterstützung.",
                    "value": 4
                }
            ];


        // hole alle Selbsteinschätzungen für die Ausgabe
        $scope.xhrloader = CheckService.getSingleCheck($routeParams.id).then(function (check) {
            $scope.check = check;
            $scope.allRuns = check.runs;
            $scope.idForHelpButton = $routeParams.id;

            angular.forEach($scope.allRuns, function (rVal, rKey) {
                angular.forEach(rVal.phrases, function (phrVal, phrKey) {
                    var ownResult = {
                        id: phrVal.id,
                        phase: phrVal.phase,
                        type: 'own',
                        cat: phrVal.cat,
                        statement: phrVal.statement,
                        rating: phrVal.rating,
                        comment: phrVal.comment
                    };

                    // personale Kompetenz
                    if (phrVal.cat == 's') {
                        if (!personalResults[phrVal.id]) {
                            personalResults[phrVal.id] = [];
                        }
                        personalResults[phrVal.id].push({
                            'result': ownResult,
                            'type': 'own',
                            'phase': phrVal.phase
                        });
                    }
                    // Fachkompetenz
                    else {
                        if (!subjectResults[phrVal.id]) {
                            subjectResults[phrVal.id] = [];
                        }
                        subjectResults[phrVal.id].push({
                            'result': ownResult,
                            'type': 'own',
                            'phase': phrVal.phase
                        });
                    }
                    allResults.push(ownResult);
                });
            });
        }).then(function () {
            $scope.externalEstimator = ['Alle'];
            $scope.countExternalAssesments = 0;

            // Fremdeinschätzungen
            ExternalAssessmentService.getCheckForResults($routeParams.id).then(function (extCheck) {
                $scope.extCheck = extCheck;

                angular.forEach($scope.extCheck, function (checkVal, checkKey) {
                    $scope.externalEstimator.push(checkVal.invitee.mail);
                    var mail = checkVal.invitee.mail;

                    // Wenn Fremdeinschätzer nicht der ausgewählte ist, dann weiter
                    if (!getParameter || mail == getParameter) {
                        $scope.countExternalAssesments++;
                        angular.forEach(checkVal.phrases, function (pVal, pKey) {
                            var exResult = {
                                id: pVal.id,
                                phase: pVal.phase,
                                type: 'ext',
                                cat: pVal.cat,
                                statement: pVal.statement,
                                invitee: checkVal.invitee,
                                rating: pVal.rating,
                                comment: pVal.comment
                            };

                            // personale Kompetenz
                            if (pVal.cat == 's') {
                                if (!personalResults[pVal.id]) {
                                    personalResults[pVal.id] = [];
                                }
                                personalResults[pVal.id].push({
                                    'result': exResult,
                                    'type': 'ext',
                                    'phase': pVal.phase
                                });
                            }
                            // Fachkompetenz
                            else {
                                if (!subjectResults[pVal.id]) {
                                    subjectResults[pVal.id] = [];
                                }
                                subjectResults[pVal.id].push({
                                    'result': exResult,
                                    'type': 'ext',
                                    'phase': pVal.phase
                                });
                            }

                            allResults.push(exResult);
                        });
                    }
                });
                $scope.countExternalEstimator = $scope.externalEstimator.length;
                getAverages();
            });
            function getAverages() {
                angular.forEach(personalResults, function (result, pKey) {
                    if (result !== undefined) {
                        $scope.allPersonalResults.push({
                            'phase': result[0].phase,
                            'results': result
                        });
                    }
                });
                angular.forEach(subjectResults, function (result, pKey) {
                    if (result !== undefined) {
                        $scope.allSubjectResults.push({
                            'phase': result[0].phase,
                            'results': result
                        });
                    }
                });

                var beginningSelfS = [];
                var beginningSelfF = [];
                var beginningExtS = [];
                var beginningExtF = [];
                var operationSelfS = [];
                var operationSelfF = [];
                var operationExtS = [];
                var operationExtF = [];
                var planningSelfS = [];
                var planningSelfF = [];
                var planningExtS = [];
                var planningExtF = [];
                var endingSelfS = [];
                var endingSelfF = [];
                var endingExtS = [];
                var endingExtF = [];
                angular.forEach(allResults, function (result, pKey) {
                    if (result.phase == 'beginning') {
                        if (result.type == 'own') {
                            if (result.cat == 's') {
                                beginningSelfS.push(result.rating);
                            }
                            else if (result.cat == 'f') {
                                beginningSelfF.push(result.rating);
                            }
                        }
                        else if (result.type == 'ext') {
                            if (result.cat == 's') {
                                beginningExtS.push(result.rating);
                            }
                            else if (result.cat == 'f') {
                                beginningExtF.push(result.rating);
                            }
                        }
                    }
                    if (result.phase == 'planning') {
                        if (result.type == 'own') {
                            if (result.cat == 's') {
                                planningSelfS.push(result.rating);
                            }
                            else if (result.cat == 'f') {
                                planningSelfF.push(result.rating);
                            }
                        }
                        else if (result.type == 'ext') {
                            if (result.cat == 's') {
                                planningExtS.push(result.rating);
                            }
                            else if (result.cat == 'f') {
                                planningExtF.push(result.rating);
                            }
                        }
                    }
                    if (result.phase == 'operation') {
                        if (result.type == 'own') {
                            if (result.cat == 's') {
                                operationSelfS.push(result.rating);
                            }
                            else if (result.cat == 'f') {
                                operationSelfF.push(result.rating);
                            }
                        }
                        else if (result.type == 'ext') {
                            if (result.cat == 's') {
                                operationExtS.push(result.rating);
                            }
                            else if (result.cat == 'f') {
                                operationExtF.push(result.rating);
                            }
                        }
                    }
                    if (result.phase == 'ending') {
                        if (result.type == 'own') {
                            if (result.cat == 's') {
                                endingSelfS.push(result.rating);
                            }
                            else if (result.cat == 'f') {
                                endingSelfF.push(result.rating);
                            }
                        }
                        else if (result.type == 'ext') {
                            if (result.cat == 's') {
                                endingExtS.push(result.rating);
                            }
                            else if (result.cat == 'f') {
                                endingExtF.push(result.rating);
                            }
                        }
                    }
                });
                var total = 0;
                for (var i = 0; i < beginningSelfS.length; i++) {
                    total += beginningSelfS[i];
                }
                $scope.beginningSelfS = total / (beginningSelfS.length == 0 ? 1 : beginningSelfS.length);

                total = 0;
                for (i = 0; i < beginningSelfF.length; i++) {
                    if (beginningSelfF[i] !== undefined)
                        total += beginningSelfF[i];
                }
                $scope.beginningSelfF = total / (beginningSelfF.length == 0 ? 1 : beginningSelfF.length);

                total = 0;
                for (i = 0; i < beginningExtS.length; i++) {
                    if (beginningExtS[i] !== undefined)
                        total += beginningExtS[i];
                }
                $scope.beginningExtS = total / (beginningExtS.length == 0 ? 1 : beginningExtS.length);

                total = 0;
                for (i = 0; i < beginningExtF.length; i++) {
                    if (beginningExtF[i] !== undefined)
                        total += beginningExtF[i];
                }
                $scope.beginningExtF = total / (beginningExtF.length == 0 ? 1 : beginningExtF.length);

                total = 0;
                for (i = 0; i < operationSelfS.length; i++) {
                    if (operationSelfS[i] !== undefined)
                        total += operationSelfS[i];
                }
                $scope.operationSelfS = total / (operationSelfS.length == 0 ? 1 : operationSelfS.length);

                total = 0;
                for (i = 0; i < operationSelfF.length; i++) {
                    if (operationSelfF[i] !== undefined)
                        total += operationSelfF[i];
                }
                $scope.operationSelfF = total / (operationSelfF.length == 0 ? 1 : operationSelfF.length);

                total = 0;
                for (i = 0; i < operationExtS.length; i++) {
                    if (operationExtS[i] !== undefined)
                        total += operationExtS[i];
                }
                $scope.operationExtS = total / (operationExtS.length == 0 ? 1 : operationExtS.length);

                total = 0;
                for (i = 0; i < operationExtF.length; i++) {
                    if (operationExtF[i] !== undefined)
                        total += operationExtF[i];
                }
                $scope.operationExtF = total / (operationExtF.length == 0 ? 1 : operationExtF.length);

                total = 0;
                for (i = 0; i < planningSelfS.length; i++) {
                    if (planningSelfS[i] !== undefined)
                        total += planningSelfS[i];
                }
                $scope.planningSelfS = total / (planningSelfS.length == 0 ? 1 : planningSelfS.length);

                total = 0;
                for (i = 0; i < planningSelfF.length; i++) {
                    if (planningSelfF[i] !== undefined)
                        total += planningSelfF[i];
                }
                $scope.planningSelfF = total / (planningSelfF.length == 0 ? 1 : planningSelfF.length);

                total = 0;
                for (i = 0; i < planningExtS.length; i++) {
                    if (planningExtS[i] !== undefined)
                        total += planningExtS[i];
                }
                $scope.planningExtS = total / (planningExtS.length == 0 ? 1 : planningExtS.length);

                total = 0;
                for (i = 0; i < planningExtF.length; i++) {
                    if (planningExtF[i] !== undefined)
                        total += planningExtF[i];
                }
                $scope.planningExtF = total / (planningExtF.length == 0 ? 1 : planningExtF.length);

                total = 0;
                for (i = 0; i < endingSelfS.length; i++) {
                    if (endingSelfS[i] !== undefined)
                        total += endingSelfS[i];
                }
                $scope.endingSelfS = total / (endingSelfS.length == 0 ? 1 : endingSelfS.length);

                total = 0;
                for (i = 0; i < endingSelfF.length; i++) {
                    if (endingSelfF[i] !== undefined)
                        total += endingSelfF[i];
                }
                $scope.endingSelfF = total / (endingSelfF.length == 0 ? 1 : endingSelfF.length);

                total = 0;
                for (i = 0; i < endingExtS.length; i++) {
                    if (endingExtS[i] !== undefined)
                        total += endingExtS[i];
                }
                $scope.endingExtS = total / (endingExtS.length == 0 ? 1 : endingExtS.length);

                total = 0;
                for (i = 0; i < endingExtF.length; i++) {
                    if (endingExtF[i] !== undefined)
                        total += endingExtF[i];
                }
                $scope.endingExtF = total / (endingExtF.length == 0 ? 1 : endingExtF.length);

                // var item = document.getElementById("title-row");
                // var item2 = document.getElementById("process-text");
                // var titleHeight = parseFloat(window.getComputedStyle(item).height);
                // var textHeight = parseFloat(window.getComputedStyle(item2).height);
                // var myElements = document.querySelectorAll(".section > .category");
                // var actualHeight = parseFloat(window.getComputedStyle(myElements[0]).top);
                // var newHeight = actualHeight + titleHeight + textHeight + 20; // +15 für Margin-top
                // angular.forEach(myElements, function (i) {
                //     i.setAttribute("style", "top: " + newHeight + "px;");
                // })
            }

            $scope.generatePDF = function () {
                // ResultToPDFService.generate($routeParams.id);

                var pageHeight = 840;
                var doc = new jsPDF('p', 'px', [595, pageHeight]);
                var img1 = "";
                var img2 = "";
                var img3 = "";
                var a = $("#print-container");
                var b = $("#sum-table");

                doc.setFont('arial');
                doc.setFontSize(12);
                doc.setTextColor(0, 0, 0);
                doc.setFontType('normal');
                doc.page = 1;
                doc.text(555, 830, 'Seite ' + doc.page);


                function nextPage(nextPage, title) {
                    var ua = window.navigator.userAgent;
                    var msie = ua.indexOf("MSIE ");
                    if (msie > 0 || !!ua.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
                    {
                        doc.text(555, 830, 'Seite ' + doc.page);
                        doc.addPage();
                        doc.text($scope.tabs[counter].title, 15, 25);
                    } else {
                        if (nextPage) {
                            doc.addPage();
                            doc.page++;
                            doc.text(555, 830, 'Seite ' + doc.page);
                            if (title !== undefined) {
                                // var a = $("#"+title+"");
                                // html2canvas(a, {
                                //     onrendered: function (titleImg) {
                                //         img1 = titleImg.toDataURL('image/png');
                                //         // var newSize = scaleSize(565, 360, canvas.width, canvas.height);
                                //         doc.addImage(img1, 'PNG', 15, 25);
                                //     }
                                // });
                                doc.fromHTML("<h2 style='color: #000000;'>" + title + "</h2>", 20, 25);
                            }
                        }
                    }
                }

                var counter = 0;
                html2canvas(a, {
                    onrendered: function (headerBar) {
                        img1 = headerBar.toDataURL('image/png', 1.0);
                        // var newSize = scaleSize(565, 360, canvas.width, canvas.height);
                        doc.addImage(img1, 'PNG', 15, 25);

                        html2canvas(b, {
                            onrendered: function (canvas) {
                                img2 = canvas.toDataURL('image/png');
                                doc.addImage(img2, 'PNG', 15, headerBar.height + 25);
                                var elementCount = 0;
                                angular.forEach($scope.tabs, function (tab) {
                                    elementCount += $('.' + tab.phase + '-result-box').length;
                                });
                                showRatingBoxes();
                            }
                        });

                    }
                });

                function showRatingBoxes() {
                    if (counter >= $scope.tabs.length) {
                        doc.save($scope.check.title + '.pdf');
                        return;
                    }

                    // angular.forEach($scope.tabs, function (tab, k) {
                    var rowHeight = 0;
                    var firstElement = true;
                    var elements = $('.' + $scope.tabs[counter].phase + '-result-box');


                    if (elements.length > 0) {
                        var x = 15;
                        var y = 40;
                        angular.forEach(elements, function (element, key) {
                            html2canvas(element, {
                                onrendered: function (checks) {
                                    if (firstElement == true) {
                                        firstElement = false;
                                        nextPage(true, $scope.tabs[counter].title);
                                        y += 25;
                                    }
                                    img3 = checks.toDataURL('image/png');
                                    var newSize = scaleSize(250, 400, checks.width, checks.height);
                                    // doc.addImage(img2, 'PNG', x, y, newSize[0], newSize[1]);
                                    if (y + newSize[1] >= pageHeight - 40) {
                                        nextPage(true);
                                        x = 15;
                                        y = 20;
                                    }
                                    doc.addImage(img3, 'PNG', x, y);

                                    if (newSize[1] > rowHeight) {
                                        rowHeight = newSize[1];
                                    }
                                    x += 280;
                                    // // Kategorie durchlaufen, nächste Seite und Überschrift
                                    if (key == elements.length - 1) {
                                        counter++;
                                        showRatingBoxes();
                                    }
                                    // Zwei Stück in einer Reihe
                                    if ((key + 1) % 2 == 0) {
                                        x = 15;
                                        y += rowHeight + 25;
                                        rowHeight = 0;
                                    }
                                }
                            });
                        });
                    } else {
                        counter++;
                        showRatingBoxes();
                    }
                    // });
                }

                function scaleSize(maxW, maxH, currW, currH) {

                    var ratio = currH / currW;
                    if (currW >= maxW) {
                        currW = maxW;
                        currH = currW * ratio;
                    }
                    else if (currH >= maxH) {
                        currH = maxH;
                        currW = currH / ratio;
                    }
                    return [currW, currH];
                }
            };
        });
    }
    ]).filter('unique', function () {
    return function (input, key) {
        var unique = {};
        var uniqueList = [];
        for (var i = 0; i < input.length; i++) {
            if (typeof unique[input[i][key]] == "undefined") {
                unique[input[i][key]] = "";
                uniqueList.push(input[i]);
            }
        }
        return uniqueList;
    };
})
    .directive('onFinishRender', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                // $timeout(function () {
                //     var item = document.getElementById("title-row");
                //     var item2 = document.getElementById("process-text");
                //     var titleHeight = parseFloat(window.getComputedStyle(item).height);
                //     var textHeight = parseFloat(window.getComputedStyle(item2).height);
                //     var myElements = document.querySelectorAll(".section > .category");
                //     var actualHeight = parseFloat(window.getComputedStyle(myElements[0]).top);
                //     var newHeight = actualHeight + titleHeight + textHeight;
                //     angular.forEach(myElements, function (i) {
                //         i.setAttribute("style", "top: " + newHeight + "px;");
                //     })
                // }, 700);
            }
        }
    });
