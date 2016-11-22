'use strict';

angular.module('desktopApp')
    .directive('xlIcicle', function () {
        return {
            restrict: "EA",
            scope: {
                data: '=xlData',
                filters: '=xlFilters'
            },
            link: function (scope, element, attrs) {

                // Die eigentliche Zeichenfunktion
                scope.draw = function () {

                    var width = 900,
                        height = 500;

                    var x = d3.scale.linear()
                        .range([0, width]);

                    var y = d3.scale.linear()
                        .range([0, height]);

                    var color = d3.scale.category20c();

                    var partition = d3.layout.partition()
                        .children(function(d) { return isNaN(d.value) ? d3.entries(d.value) : null; })
                        .sort(function(a, b) {
                            return b < a ? -1 : b > a ? 1 : 0;
                        })
                        .value(function(d) { return 1; });

                    var svg = d3.select(element[0]).append("svg")
                        .attr("width", width)
                        .attr("height", height);

                    var rect = svg.selectAll("rect");

                    var label = svg.selectAll(".label");

                    d3.json("icicle.json", function(error, root) {
                        rect = rect
                            .data(partition(d3.entries(root)[0]))
                            .enter().append("rect")
                            .attr("x", function(d) { return x(d.x); })
                            .attr("y", function(d) { return y(d.y); })
                            .attr("width", function(d) { return x(d.dx); })
                            .attr("height", function(d) { return y(d.dy); })
                            .attr("fill", function(d) { return color((d.children ? d : d.parent).key + Math.random(0, 1000)); })
                            .on("click", clicked)
                            .on("mouseover", function(x) {
                                //;
                            })

                        label = label
                            .data(partition(d3.entries(root)[0]))
                            .enter().append("text")
                            .attr("class", "label")
                            .attr("dy", ".35em")
                            .attr("transform", function(d) { return "translate(" + x(d.x + d.dx / 2) + "," + y(d.y + d.dy / 2) + ")"; })
                            .attr("text-anchor", "middle")
                            .text(function(d) { return d.key })
                            .style("opacity", function(d) { return x(d.x + d.dx) - x(d.x) > 200 ? 1 : 0 });

                        d3.selectAll("rect")
                            .append("title")
                            .text(function(d) { return d.key + ', ' + d.value });

                    });

                    function clicked(d) {
                        x.domain([d.x, d.x + d.dx]);
                        y.domain([d.y, 1]).range([d.y ? 20 : 0, height]);

                        rect.transition()
                            .duration(750)
                            .attr("x", function(d) { return x(d.x); })
                            .attr("y", function(d) { return y(d.y); })
                            .attr("width", function(d) { return x(d.x + d.dx) - x(d.x); })
                            .attr("height", function(d) { return y(d.y + d.dy) - y(d.y); });

                        label.transition()
                            .duration(750)
                            .style("opacity", function(d) { return x(d.x + d.dx) - x(d.x) > 200 ? 1 : 0 })
                            .attr("transform", function(d) { return "translate(" + x(d.x + d.dx / 2) + "," + y(d.y + d.dy / 2) + ")"; })
                            .transition()




                    }

                }

                scope.draw();


            }
        }
    });