var OwlDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img class="owlDancer" src="images/groovyOwl.gif"/>');
  this.setPosition(top, left);
  this.step();
};

OwlDancer.prototype = Object.create(Dancer.prototype);
OwlDancer.prototype.constructor = OwlDancer;

OwlDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};