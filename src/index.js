var Line = require('./Components/Line');
var Rectangle = require('./Components/Rectangle');
var Circle = require('./Components/Circle');
var drawAllShapes = require('./helpers/drawAllShapes');
require('./main.css');

var shapesList = {
  line: new Line({
    canvas: document.getElementById('canvas1'),
    x1: -20,
    y1: 0,
    x2: 200,
    y2: 100,
    strokeStyle: 'green'
  }),
  rectangle: new Rectangle({
    canvas: document.getElementById('canvas2'),
    x1: 10,
    y1: 40,
    x2: 100,
    y2: 140,
    strokeStyle: 'green'
  }),
  rectangleFiled: new Rectangle({
    canvas: document.getElementById('canvas2'),
    x1: 120,
    y1: 40,
    x2: 150,
    y2: 140,
    strokeStyle: 'red',
    fillStyle: 'blue'
  }),
  circle: new Circle({
    canvas: document.getElementById('canvas1'),
    x: 60,
    y: 140,
    radius: 50,
    startAngle: 0,
    endAngle: Math.PI * 2,
    anticlockwise: false,
    strokeStyle: 'red'
  }),
  circleFilled: new Circle({
    canvas: document.getElementById('canvas1'),
    x: 170,
    y: 140,
    radius: 50,
    startAngle: 0,
    endAngle: Math.PI * 2,
    anticlockwise: false,
    strokeStyle: 'red',
    fillStyle: 'yellow'
  })
};

drawAllShapes(shapesList);
