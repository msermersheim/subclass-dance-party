var TinyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img class="tinyDancer" src="images/tinyDancer.gif"/>');
  this.setPosition(top, left);
  this.step();

};

TinyDancer.prototype = Object.create(Dancer.prototype);
TinyDancer.prototype.constructor = TinyDancer;

TinyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

