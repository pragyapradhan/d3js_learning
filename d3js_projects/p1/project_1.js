var theData = [ 1, 2, 3 ]

var p = d3.select("body").selectAll("p")
  .data(theData)
  .enter()
  .append("p")
  .text("hello ");
  .text( function (d) { return d; } ); 

  /* Above javascript function definition 
  function functionName (variableName){
  return variableName;}
  */


/* styled SVG elements based on data from a data set!*/

var circleRadii = [150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
 
 var svgContainer = d3.select("body").append("svg")
                                     .attr("width", 2000)
                                     .attr("height", 2000);
 
 var circles = svgContainer.selectAll("circle")
                           .data(circleRadii)
                           .enter()
                           .append("circle");

 var circleAttributes = circles
                       .attr("cx", 150)
                       .attr("cy", 150)
                       .attr("r", function (d) { return d; })
                       .style("fill", function(d) {
                         var returnColor;
                         if (d === 150) { returnColor = "pink";
                         } else if (d === 140) { returnColor = "yellow";
                         } else if (d === 130) { returnColor = "orange"; 
                         } else if (d === 120) { returnColor = "pink";
                         } else if (d === 110) { returnColor = "yellow";
                     	   } else if (d === 100) { returnColor = "orange";
                     	   } else if (d === 90) { returnColor = "pink";
                         } else if (d === 80) { returnColor = "yellow";
                     	   } else if (d === 70) { returnColor = "orange";
                     	   } else if (d === 60) { returnColor = "pink";
                         } else if (d === 50) { returnColor = "yellow";
                     	   } else if (d === 40) { returnColor = "orange";
                         } else if (d === 30) { returnColor = "pink ";
                     	   } else if (d === 20) { returnColor = "yellow";
                     	   } else if (d === 10) { returnColor = "orange";
                     	   }

                         return returnColor;
                     });






var spaceCircles = [30, 70, 110];

var svgContainer = d3.select("body").append("svg")
                                   .attr("width", 200)
                                   .attr("height", 200);

var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200)
                                    .style("border", "1px solid black");
var circles = svgContainer.selectAll("circle")
                                  .data(spaceCircles)
                                  .enter()
                                 .append("circle");



var spaceCircles = [30, 70, 110];
 
 var svgContainer = d3.select("body").append("svg") 
                                     .attr("width", 200)
                                     .attr("height", 200);
 
 var circles = svgContainer.selectAll("circle")
                           .data(spaceCircles)
                          .enter()
                          .append("circle");

var circleAttributes = circles
                      .attr("cx", function (d) { return d; })
                       .attr("cy", function (d) { return d; })
                       .attr("r", 20 );                                 

// Data Structures D3.js Accepts

var spaceCircles = [30, 70, 110];
spaceCircles[0]
spaceCircles[1]
spaceCircles[2]


//Hard coded values are never a good idea, because if our data changes, then we would have to change our code in several places.

var jsonCircles = [
  {
   "x_axis": 30,
    "y_axis": 30,
    "radius": 20,
    "color" : "green"
   }, {
    "x_axis": 70,
    "y_axis": 70,
   "radius": 20,
   "color" : "purple"
  }, {
   "x_axis": 110,
   "y_axis": 100,
   "radius": 20,
   "color" : "red"
}];
  

  //JASON

  var jsonCircles = [
   {
    "x_axis": 30,
    "y_axis": 30,
    "radius": 20,
    "color" : "green"
   }, {
    "x_axis": 70,
    "y_axis": 70,
   "radius": 20,
   "color" : "purple"
  }, {
   "x_axis": 110,
   "y_axis": 100,
   "radius": 20,
   "color" : "red"
}];

var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200);

var circles = svgContainer.selectAll("circle")
                          .data(jsonCircles)
                          .enter()
                         .append("circle");


console.log(d3.select("body").append("svg").attr("width", 200).attr("height", 200).selectAll("circle").data(jsonCircles).enter().append("circle"));


var jsonCircles = [
  { "x_axis": 30, "y_axis": 30, "radius": 20, "color" : "green" },
  { "x_axis": 70, "y_axis": 70, "radius": 20, "color" : "purple"},
  { "x_axis": 110, "y_axis": 100, "radius": 20, "color" : "red"}];
 
 var svgContainer = d3.select("body").append("svg")
                                     .attr("width", 200)
                                     .attr("height", 200);
 
var circles = svgContainer.selectAll("circle")
                          .data(jsonCircles)
                          .enter()
                          .append("circle");

var circleAttributes = circles
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function(d) { return d.color; });



// jason

var jsonCircles = [
  { "x_axis": 150, "y_axis": 150, "radius": 150, "color" : "pink" },
  { "x_axis": 140, "y_axis": 140, "radius": 140, "color" : "yellow"},
  { "x_axis": 130, "y_axis": 130, "radius": 130, "color" : "orange"},
  { "x_axis": 120, "y_axis": 120, "radius": 120, "color" : "pink"},
  { "x_axis": 110, "y_axis": 110, "radius": 110, "color" : "yellow"},
  { "x_axis": 100, "y_axis": 100, "radius": 100, "color" : "orange"},
  { "x_axis": 90,  "y_axis":  90, "radius": 90, "color" : "pink"},
  { "x_axis": 80,  "y_axis":  80, "radius": 80, "color" : "yellow"},
  { "x_axis": 70,  "y_axis":  70, "radius": 70, "color" : "orange"},
  { "x_axis": 60,  "y_axis":  60, "radius": 60, "color" : "pink"},
  { "x_axis": 50,  "y_axis":  50, "radius": 50, "color" : "yellow"}, 
  { "x_axis": 40, "y_axis":   40, "radius": 40, "color" : "orange"},
  { "x_axis": 30, "y_axis":   30, "radius": 30, "color" : "pink"},
  { "x_axis": 20, "y_axis":   20, "radius": 20, "color" : "yellow"},
  { "x_axis": 10, "y_axis":   10, "radius": 10, "color" : "orange"},
];
 
 var svgContainer = d3.select("body").append("svg")
                                     .attr("width", 2000)
                                     .attr("height", 2000);
 
var circles = svgContainer.selectAll("circle")
                          .data(jsonCircles)
                          .enter()
                          .append("circle");

var circleAttributes = circles
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d)  { return d.radius; })
                       .style("fill", function(d) { return d.color});


var jsonCircles = [
  { "x_axis": 150, "y_axis": 150, "radius": 150, "color" : "pink" },
  { "x_axis": 150, "y_axis": 150, "radius": 140, "color" : "yellow"},
  { "x_axis": 150, "y_axis": 150, "radius": 130, "color" : "orange"},
  { "x_axis": 150, "y_axis": 150, "radius": 120, "color" : "pink"},
  { "x_axis": 150, "y_axis": 150, "radius": 110, "color" : "yellow"},
  { "x_axis": 150, "y_axis": 150, "radius": 100, "color" : "orange"},
  { "x_axis": 150, "y_axis": 150, "radius": 90, "color" : "pink"},
  { "x_axis": 150, "y_axis": 150, "radius": 80, "color" : "yellow"},
  { "x_axis": 150, "y_axis": 150, "radius": 70, "color" : "orange"},
  { "x_axis": 150, "y_axis": 150, "radius": 60, "color" : "pink"},
  { "x_axis": 150, "y_axis": 150, "radius": 50, "color" : "yellow"}, 
  { "x_axis": 150, "y_axis": 150, "radius": 40, "color" : "orange"},
  { "x_axis": 150, "y_axis": 150, "radius": 30, "color" : "pink"},
  { "x_axis": 150, "y_axis": 150, "radius": 20, "color" : "yellow"},
  { "x_axis": 150, "y_axis": 150, "radius": 10, "color" : "orange"},
];
 
 var svgContainer = d3.select("body").append("svg")
                                     .attr("width", 2000)
                                     .attr("height", 2000);
 
var circles = svgContainer.selectAll("circle")
                          .data(jsonCircles)
                          .enter()
                          .append("circle");

var circleAttributes = circles
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d)  { return d.radius; })
                       .style("fill", function(d) { return d.color});

//SVG Basic Shapes and D3.js

//Make an SVG Container
var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200);

//Draw the Circle
var circle = svgContainer.append("circle")
                         .attr("cx", 30)
                         .attr("cy", 30)
                         .attr("r", 20);



//Make an SVG Container
 var svgContainer = d3.select("body").append("svg")
                                     .attr("width", 200)
                                     .attr("height", 200);
 
 //Draw the Rectangle
 var rectangle = svgContainer.append("rect")
                             .attr("x", 10)
                             .attr("y", 10)
                             .attr("width", 50)
                             .attr("height", 100);


//Draw the Ellipse
 var circle = svgContainer.append("ellipse")
                          .attr("cx", 50)
                          .attr("cy", 50)
                         .attr("rx", 25)
                         .attr("ry", 10);

//Draw the line
 var circle = svgContainer.append("line")
                         .attr("x1", 5)
                          .attr("y1", 5)
                         .attr("x2", 50)
                         .attr("y2", 50);



//The data for our line
 var lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
                  { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
                  { "x": 80,  "y": 5},  { "x": 100, "y": 60},
                  { "x": 100, "y":10},  { "x": 120, "y": 20}];
 
 //This is the accessor function we talked about above
 var lineFunction = d3.line()
                          .x(function(d) { return d.x; })
                          .y(function(d) { return d.y; })
                         .curve(d3.curveStepBefore);   //http://bl.ocks.org/emmasaunders/c25a147970def2b02d8c7c2719dc7502

//The SVG Container
var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                   .attr("height", 200);

//The line SVG Path we draw
var lineGraph = svgContainer.append("path")
                            .attr("d", lineFunction(lineData)) //** imporatant** function defined by linefunction and Dataset name defined: lineData 
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");

// Dynamic SVG Coordinate Space 

var jsonRectangles = [
   { "x_axis": 10, "y_axis": 10, "height": 20, "width":20, "color" : "pink" },
   { "x_axis": 40, "y_axis": 40, "height": 20, "width":20, "color" : "orange" },
   { "x_axis": 70, "y_axis": 70, "height": 20, "width":20, "color" : "yellow" },
   { "x_axis": 100,"y_axis": 100,"height": 20, "width":20, "color" : "pink" }
  ];
 
 var svgContainer = d3.select("body").append("svg")
                                     .attr("width", 120)
                                     .attr("height", 120);
 
var rectangles = svgContainer.selectAll("rect")
                             .data(jsonRectangles)
                             .enter()
                             .append("rect");

var rectangleAttributes = rectangles
                          .attr("x", function (d) { return d.x_axis; })
                          .attr("y", function (d) { return d.y_axis; })
                          .attr("height", function (d) { return d.height; })
                          .attr("width", function (d) { return d.width; })
                          .style("fill", function(d) { return d.color; });



//Dynamically Adjusting SVG Container Space

var jsonRectangles = [
   { "x_axis": 10, "y_axis": 10, "height": 20, "width":20, "color" : "green" },
   { "x_axis": 160, "y_axis": 40, "height": 20, "width":20, "color" : "purple" },
   { "x_axis": 70, "y_axis": 70, "height": 20,  "width":20, "color" : "red" },
   { "x_axis": 170, "y_axis": 75, "height": 120, "width":20, "color" : "red"}];
 
 var max_x = 0; //This will be updated to be the max x-coordinate
 var max_y = 0; //This will be updated to be the max y-coordinate
 

 ////We loop through our jsonRectangles array
 for (var i = 0; i < jsonRectangles.length; i++) {
  var temp_x, temp_y;
  var temp_x = jsonRectangles[i].x_axis + jsonRectangles[i].width;
  var temp_y = jsonRectangles[i].y_axis + jsonRectangles[i].height;

  if ( temp_x >= max_x ) { max_x = temp_x; }

  if ( temp_y >= max_y ) { max_y = temp_y; }
}

var svgContainer = d3.select("body").append("svg")
                                    .attr("width", max_x)
                                    .attr("height", max_y)

var rectangles = svgContainer.selectAll("rect")
                             .data(jsonRectangles)
                             .enter()
                             .append("rect");

var rectangleAttributes = rectangles
                          .attr("x", function (d) { return d.x_axis; })
                          .attr("y", function (d) { return d.y_axis; })
                          .attr("height", function (d) { return d.height; })
                          .attr("width", function (d) { return d.width; })
                          .style("fill", function(d) { return d.color; });


//D3.js Scales : Using the D3.js Linear Scales, we will now be able to resize our 
//data to fit into our pre-defined SVG Coordinate Space, rather than resizing our SVG Coordinate space to fit our data.

var identityScale = d3.scaleLinear();

identityScale(1);
// 1
identityScale(2);

var domainOnlyScale = d3.scaleLinear()
                              .domain([0,10000])
                              .range([0,100]);
 domainOnlyScale(1);
//0.01

 domainOnlyScale(10);
// 0.1

domainOnlyScale(100);
// 1

domainOnlyScale(1000);
// 10

domainOnlyScale(10000);
// 100                             


var linearScale = d3.scaleLinear()
                            .domain([0,10000])
                            .range([0,100]);
 
 linearScale(1);
 //0.01
 
 linearScale(10);
 // 0.1

linearScale(100);
// 1

linearScale(1000);
// 10
linearScale(10000);
// 100



var initialScaleData = [0, 1000, 3000, 2000, 5000, 4000, 7000, 6000, 9000, 8000, 10000];

var maxInitialData = d3.max(initialScaleData);

var minInitialData = d3.min(initialScaleData);

//D3 Zoom Behavior

/*// Variables
var svgWidth  = 400,
    svgHeight = 400,    
    originalCircle = {"cx": 100, "cy": 100, "radius": 20},
    margin = {"top": 25, "right": 25, "bottom": 50, "left": 50},
    width  = svgWidth - margin.left - margin.right,       
    height = svgHeight - margin.top  - margin.bottom;

// SVG Viewport
var svgViewport = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("border", "2px solid")

// Scales
var xAxisScale = d3.scaleLinear() //d3.scale.linear()
    .domain([0, width])
    .range([0, width]);

var yAxisScale = d3.scaleLinear() //d3.scale.linear()
    .domain([0, height])
    .range([height, 0]);

// Axis Functions
var xAxis = d3.axisBottom() //d3.svg.axis()
              .scale(xScale);//.scale(xAxisScale)
              //.orient("bottom")
              //.ticks(5);

var yAxis = d3.axisLeft(scale)//d3.svg.axis()
    //.scale(yAxisScale)
   // .orient("left")
    .ticks(5);

// Zoom Function
var zoom = d3.zoom() //d3.behavior.zoom()
    .x(xAxisScale)
    .y(yAxisScale)
    .on("zoom", zoomFunction);

// Inner Drawing Space
var innerSpace = svgViewport.append("g")
    .attr("class", "inner_space")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .call(zoom);

// Draw Axis
innerSpace.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

innerSpace.append("g")
    .attr("class", "y axis")
    .call(yAxis);

// HTML Printout To Tell Us What Is Going ON
d3.select("body").append("div").attr("id", "v_scale").text("D3 Zoom Scale: ");
d3.select("#v_scale").append("span").attr("id", "v_scale_val");

// Zoom Function Event Listener
function zoomFunction() {
  
    // Pan Vector
    var panVector = d3.event.translate;
    var panX = panVector[0];
    var panY = panVector[1];

    // Scaling Multiplier
    var scaleMultiplier = d3.event.scale;

    // Tell us in HTML what is going on
    d3.select("#v_scale_val").text(scaleMultiplier);

    // Redraw the Axis
    innerSpace.select(".x.axis").call(xAxis);
    innerSpace.select(".y.axis").call(yAxis);
    
}*/

//SVG Group Element and D3.js
//The SVG Group Element is defined by <g> and </g>.
//Any transformation applied to the SVG Group Element is applied to all of the child elements contained inside



var circleData = [
   { "cx": 20, "cy": 20, "radius": 20, "color" : "green" },
   { "cx": 70, "cy": 70, "radius": 20, "color" : "purple" }];
 
 
 var rectangleData = [
   { "rx": 110, "ry": 110, "height": 30, "width": 30, "color" : "blue" },
   { "rx": 160, "ry": 160, "height": 30, "width": 30, "color" : "red" }];
 
var svgContainer = d3.select("body").append("svg")
                                    .attr("width",200)
                                    .attr("height",200);

//We add the SVG Group Element Transform Here
var circleGroup = svgContainer.append("g")
                               .attr("transform", "translate(80,0)");

//Circles added to the circleGroup
var circles = circleGroup.selectAll("circle")
                          .data(circleData)
                          .enter()
                          .append("circle");

var circleAttributes = circles
                       .attr("cx", function (d) { return d.cx; })
                       .attr("cy", function (d) { return d.cy; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function (d) { return d.color; });

//Rectangles added to the svgContainer
var rectangles = svgContainer.selectAll("rect")
                             .data(rectangleData)
                           .enter()
                            .append("rect");
var rectangleAttributes = rectangles
                          .attr("x", function (d) { return d.rx; })
                         .attr("y", function (d) { return d.ry; })
                         .attr("height", function (d) { return d.height; })
                          .attr("width", function (d) { return d.width; })
                          .style("fill", function(d) { return d.color; });
 
 
 var rectangleData = [
   { "rx": 110, "ry": 110, "height": 30, "width": 30, "color" : "blue" },
   { "rx": 160, "ry": 160, "height": 30, "width": 30, "color" : "red" }];
 
var svgContainer = d3.select("body").append("svg")
                                    .attr("width",200)
                                    .attr("height",200);

//We add the SVG Group Element Transform Here
var circleGroup = svgContainer.append("g")
                               .attr("transform", "translate(80,0)");

//Circles added to the circleGroup
var circles = circleGroup.selectAll("circle")
                          .data(circleData)
                          .enter()
                          .append("circle");

var circleAttributes = circles
                       .attr("cx", function (d) { return d.cx; })
                       .attr("cy", function (d) { return d.cy; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function (d) { return d.color; });

//Rectangles added to the svgContainer
var rectangles = svgContainer.selectAll("rect")
                             .data(rectangleData)
                             .enter()
                             .append("rect");
var rectangleAttributes = rectangles
                          .attr("x", function (d) { return d.rx; })
                         .attr("y", function (d) { return d.ry; })
                         .attr("height", function (d) { return d.height; })
                          .attr("width", function (d) { return d.width; })
                          .style("fill", function(d) { return d.color; });


//SVG Text Element

//Circle Data Set
 var circleData = [
   { "cx": 20, "cy": 20, "radius": 20, "color" : "green" },
   { "cx": 70, "cy": 70, "radius": 20, "color" : "purple" }];
 
 //Create the SVG Viewport
 var svgContainer = d3.select("body").append("svg")
                                      .attr("width",200)
                                      .attr("height",200);

//Add circles to the svgContainer
var circles = svgContainer.selectAll("circle")
                           .data(circleData)
                           .enter()
                           .append("circle");

//Add the circle attributes
var circleAttributes = circles
                       .attr("cx", function (d) { return d.cx; })
                      .attr("cy", function (d) { return d.cy; })
                      .attr("r", function (d) { return d.radius; })
                       .style("fill", function (d) { return d.color; });

//Add the SVG Text Element to the svgContainer
var text = svgContainer.selectAll("text")
                        .data(circleData)
                        .enter()
                        .append("text");

//Add SVG Text Element Attributes
var textLabels = text
                .attr("x", function(d) { return d.cx; })
                .attr("y", function(d) { return d.cy; })
                //.text( function (d) { return "hello" })
                .text( function (d) { return "( " + d.cx + ", " + d.cy +" )"; })
                .attr("font-family", "sans-serif")
                .attr("font-size", "20px")
                .attr("fill", "red")
                .attr("text-anchor", "middle");

//D3.js Axes

d3.select(".axis")
.call(d3.axisBottom(x));
/////////////////////////////


//Create the SVG Viewport
var svgContainer = d3.select("body").append("svg")
                                      .attr("width", 400)
                                      .attr("height", 100);
 
 //Create the Scale we will use for the Axis
 var axisScale = d3.scaleLinear()
                          .domain([0, 100])
                          .range([0, 400]);

//Create the Axis d3 v3
// var xAxis = d3.svg.axis()
//                   .scale(axisScale);
//Create the Axis 
var xAxis = d3.axisBottom(axisScale);        

//Create an SVG group Element for the Axis elements and call the xAxis function
var xAxisGroup = svgContainer.append("g")
                             .call(xAxis);