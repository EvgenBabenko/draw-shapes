var Shape = require('../Components/Shape');

module.exports = function drawAllShapes(shapes) {
  Object
    .keys(shapes)
    .forEach(function forEach(shape) {
      if (shapes[shape] instanceof Shape) {
        shapes[shape].draw();
      }
    });
};
