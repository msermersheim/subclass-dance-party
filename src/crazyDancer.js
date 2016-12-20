var CrazyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<img class="crazyDancer" src = "images/dancer1.gif"/>');
  this.setPosition(top, left);
  this.step();
};

// inheriting Dancer prototype
CrazyDancer.prototype = Object.create(Dancer.prototype);
CrazyDancer.prototype.constructor = CrazyDancer;

CrazyDancer.prototype.step = function() {
  
  Dancer.prototype.step.call(this);
  
  // setTimeout(function() {

  //   var y =
  //   var x =
  //   Dancer.prototype.setPosition.call(this, )
  // }.bind(this), 0);

};