var RobotDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img class="roboDancer" src="images/discoRobot.gif"/>');
  this.setPosition(top, left);
  this.step();
};

RobotDancer.prototype = Object.create(Dancer.prototype);
RobotDancer.prototype.constructor = RobotDancer;

RobotDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};