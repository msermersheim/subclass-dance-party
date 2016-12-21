var LizardDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<img class="lizardDancer" src="images/lizard.gif"/>');
  this.setPosition(top, left);
  this.step();

};

LizardDancer.prototype = Object.create(Dancer.prototype);
LizardDancer.prototype.constructor = LizardDancer;

LizardDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};