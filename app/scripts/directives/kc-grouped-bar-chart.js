'use strict';

angular.module('desktopApp')
    .directive('kcGroupedBarChart', function(){
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                checkId: '='
            },
            link: function(scope, element, attrs, $promise){

                scope.$watch('checkId', function(checkId) {
                    if(checkId) {

                        var margin = {top: 20, right: 20, bottom: 30, left: 40},
                            width = 900 - margin.left - margin.right,
                            height = 500 - margin.top - margin.bottom;

                        var x0 = d3.scale.ordinal()
                            .rangeRoundBands([0, width], .1);

                        var x1 = d3.scale.ordinal();

                        var y = d3.scale.linear()
                            .range([height, 0]);

                        var color = d3.scale.ordinal()
                            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

                        var xAxis = d3.svg.axis()
                            .scale(x0)
                            .orient("bottom");

                        var yAxis = d3.svg.axis()
                            .scale(y)
                            .orient("left")
                            .tickFormat(d3.format("0"))
                            .tickValues([0,1, 2, 3, 4]);

                        var svg = d3.select(element[0]).append("svg")
                            .attr("width", width + margin.left + margin.right)
                            .attr("height", height + margin.top + margin.bottom)
                            .append("g")
                            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                        d3.csv("/api/evaluate/csv/" + scope.checkId, function(error, data) {


                            var runName = d3.keys(data[0]).filter(function(key) { return key !== "Kompetenz"; });

                            data.forEach(function(d) {
                                d.runs = runName.map(function(name) { return {name: name, value: +d[name]}; });
                            });

                            // Baut eine Skala für die Kompetenzen
                            x0.domain(data.map(function(d) { return d.Kompetenz; }));
                            // Baut eine Skala für die einzelnen Runs, also für die "Balken" innerhalb
                            // einer Kompetenz
                            x1.domain(runName).rangeRoundBands([0, x0.rangeBand()]);
                            // Erstellt eine Skala für die Einschätzungsstufen
                            y.domain([0, d3.max(data, function(d) { return d3.max(d.runs, function(d) { return d.value; }); })]);

                            svg.append("g")
                                .attr("class", "x axis")
                                .attr("transform", "translate(0," + height + ")")
                                .call(xAxis);

                            // Beschriftung der y-Achse
                            svg.append("g")
                                .attr("class", "y axis")
                                .call(yAxis)
                                .append("text")
                                .attr("transform", "rotate(-90)")
                                .attr("y", 6)
                                .attr("dy", ".71em")
                                .style("text-anchor", "end")
                                .text("Einschätzungsstufe");

                            var kompetenz = svg.selectAll(".kompetenz")
                                .data(data)
                                .enter().append("g")
                                .attr("class", "g")
                                .attr("transform", function(d) {
                                    return "translate(" + x0(d.Kompetenz) + ",0)";
                                });

                            // Balken
                            kompetenz.selectAll("rect")
                                .data(function(d) { return d.runs; })
                                .enter().append("rect")
                                .attr("width", x1.rangeBand())
                                .attr("x", function(d) { return x1(d.name); })
                                .attr("y", function(d) { return y(d.value); })
                                .attr("height", function(d) { return height - y(d.value); })
                                .style("fill", function(d) { return color(d.name); });

                            // Vorbereitung der Legende oben rechts
                            var legend = svg.selectAll(".legend")
                                .data(runName.slice().reverse())
                                .enter().append("g")
                                .attr("class", "legend")
                                .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; })

                            // Legende oben rechts: Farbkästchen
                            legend.append("rect")
                                .attr("x", width - 18)
                                .attr("width", 18)
                                .attr("height", 18)
                                .style("fill", color)


                            // Legende oben rechts: Beschriftungen der Kästchen
                            legend.append("text")
                                .attr("x", width - 24)
                                .attr("y", 9)
                                .attr("dy", ".35em")
                                .style("text-anchor", "end")
                                .text(function(d) { return d; });
                        })


                    }
                })

      }
        }
    })