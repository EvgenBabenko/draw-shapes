var Shape = require('./Shape');

function Line(params) {
  Shape.apply(this, arguments);

  this.x1 = params.x1;
  this.y1 = params.y1;
  this.x2 = params.x2;
  this.y2 = params.y2;
}

Line.prototype = Object.create(Shape.prototype);

Line.prototype.draw = function draw() {
  this.context.strokeStyle = this.strokeStyle;

  this.context.moveTo(this.x1, this.y1);
  this.context.lineTo(this.x2, this.y2);
  this.context.stroke();
};

module.exports = Line;
