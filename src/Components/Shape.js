function Shape(params) {
  this.canvas = params.canvas;
  this.context = this.canvas.getContext('2d');
  this.strokeStyle = params.strokeStyle;
  this.fillStyle = params.fillStyle;
}

Shape.prototype.draw = function draw() {
  throw new Error('not implemented');
};

module.exports = Shape;
