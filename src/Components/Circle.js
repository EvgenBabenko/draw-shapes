var Shape = require('./Shape');

function Circle(params) {
  Shape.apply(this, arguments);

  this.x = params.x;
  this.y = params.y;
  this.radius = params.radius;
  this.startAngle = params.startAngle;
  this.endAngle = params.endAngle;
  this.anticlockwise = params.anticlockwise;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function draw() {
  this.context.strokeStyle = this.strokeStyle;
  this.context.fillStyle = this.fillStyle;

  this.context.beginPath();
  this.context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
  this.context.closePath();
  this.context.stroke();

  if (this.fillStyle) {
    // eslint-disable-next-line
    this.context.fill();
  }
};

module.exports = Circle;
