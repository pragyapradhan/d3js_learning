var data = [30, 86, 168, 281, 303, 365];

var scale = d3.scale.linear()
  .domain([0, 365])
 .range([0, 300])

d3.select(".chart")
  .selectAll(".div") 
  .data(data)
  	.enter()
  	.append("div")
  	.style("width", function(d) { return scale(d) + "px" })
  	.text(function(d) { return '$' + d;});

d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return d * 10 + "px"; })
    .text(function(d) { return d; });

d3.selectAll("section")
    .attr("class", "special")
    .append("div")
    .attr("text-anchor", "left")// 
    .html("Line Graph");













