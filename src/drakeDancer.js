var DrakeDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img class="drizzyDancer" src="images/drizzy.gif"/>');
  this.setPosition(top, left);
  this.step();

};

DrakeDancer.prototype = Object.create(Dancer.prototype);
DrakeDancer.prototype.constructor = DrakeDancer;

DrakeDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};