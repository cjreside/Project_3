// Load and munge data, then make the visualization.
var fileName = "Data/weekly_nfl_games.csv";
var passesFields = ["complete", "incomplete", "intercepted", "sack"];

d3.csv(fileName, function(error, data) {
    var weekMap = {};
    data.forEach(function(d) {
        var week = d.week;
        weekMap[week] = [];
        console.log(week);

        // { weekName: [ bar1Val, bar2Val, etc...] }
        passesFields.forEach(function(field) {
            weekMap[week].push( +d[field] );
        });
    });
    makeVis(weekMap);
    console.log(weekMap)
});

var makeVis = function(weekMap) {
    // Define dimensions of vis
    var margin = { top: 30, right: 50, bottom: 30, left: 50 },
        width  = 550 - margin.left - margin.right,
        height = 250 - margin.top  - margin.bottom;

    // Make x scale
    var xScale = d3.scale.ordinal()
        .domain(passesFields)
        .rangeRoundBands([0, width], 0.1);

    // Make y scale, the domain will be defined on bar update
    var yScale = d3.scale.linear()
        .range([height, 0]);

    // Create canvas
    var canvas = d3.select("#vis-container")
      .append("svg")
        .attr("width",  width  + margin.left + margin.right)
        .attr("height", height + margin.top  + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Make x-axis and add to canvas
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom");

    canvas.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Make y-axis and add to canvas
    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");

    var yAxisHandleForUpdate = canvas.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    yAxisHandleForUpdate.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Value");

    var updateBars = function(data) {
        // First update the y-axis domain to match data
        yScale.domain( d3.extent(data) );
        yAxisHandleForUpdate.call(yAxis);

        var bars = canvas.selectAll(".bar").data(data);

        // Add bars for new data
        bars.enter()
          .append("rect")
            .attr("class", "bar")
            .attr("x", function(d,i) { return xScale( passesFields[i] ); })
            .attr("width", xScale.rangeBand())
            .attr("y", function(d,i) { return yScale(d); })
            .attr("height", function(d,i) { return height - yScale(d); });

        // Update old ones, already have x / width from before
        bars
            .transition().duration(250)
            .attr("y", function(d,i) { return yScale(d); })
            .attr("height", function(d,i) { return height - yScale(d); });

        // Remove old ones
        bars.exit().remove();
    };
    
    // Handler for dropdown value change
    
    function dropdownChange(ele){
      var selected = ele.values;
      console.log(selected)
    };
    // var dropdownChange = function() {
    //     var newPasses = d3.select(this).property('value'),
    //         newData   = weekMap[newPasses];

    //     updateBars(newData);
    // };
    function init(){
  var ele = document.getElementById("week_dropdown");
    var passrusherschoice = Object.keys(weekMap)
    console.log(passrusherschoice.length)
      for (var i = 0; i < passrusherschoice.length; i++) {
        console.log(passrusherschoice[i])
        ele.innerHTML = ele.innerHTML + '<option value="' + passrusherschoice[i] + '">' + passrusherschoice[i] + '</option>';
    };
}
init();
    // Get styles of passes, for dropdown
    var passes = Object.keys(weekMap).sort();   

    var initialData = weekMap[ passes[0] ];
    updateBars(initialData);
};