var Shape = require('./Shape');

function Rectangle(params) {
  Shape.apply(this, arguments);

  this.x1 = params.x1;
  this.y1 = params.y1;
  this.x2 = params.x2;
  this.y2 = params.y2;
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.draw = function draw() {
  this.context.strokeStyle = this.strokeStyle;
  this.context.fillStyle = this.fillStyle;

  this.context.beginPath();
  this.context.rect(this.x1, this.y1, this.x2, this.y2);
  this.context.closePath();
  this.context.stroke();

  if (this.fillStyle) {
    // eslint-disable-next-line
    this.context.fill();
  }
};

module.exports = Rectangle;
