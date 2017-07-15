function Bubble(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  this.xVel = 0;
  this.yVel = 0;
  this.diameter = 10;

  this.move = function() {
    // find new velocities
    if(this.xPos > 300) {
      this.xVel += random(-0.6, 0.2);
    } else {
      this.xVel += random(-0.2, 0.6);
    }

    if(this.yPos > 300) {
      this.yVel += random(-0.6, 0.2);
    } else {
      this.yVel += random(-0.2, 0.6);
    }

    this.xPos += this.xVel;
    this.yPos += this.yVel;
    noFill();
    stroke(255);
    ellipse(this.xPos, this.yPos, this.diameter, this.diameter);
  }
}
