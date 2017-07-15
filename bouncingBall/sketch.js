
function Ball(posX, posY, velX, velY, diameter, accel, friction) {
  this.posX = posX;
  this.posY = posY;
  this.velX = velX;
  this.velY = velY;
  this.diameter = diameter;
  this.accel = accel;
  this.friction = friction;

  this.findVel = function() {
    if(this.posY >= (600 - this.diameter / 2)) {
      this.velY *= -this.friction;
      this.velX *= this.friction;
    }

    // Apply acceleration
    this.velY += this.accel;
  };

  this.move = function() {
    this.findVel();
    this.posX += this.velX;
    this.posY = Math.min(this.velY + this.posY, 600 - this.diameter / 2);

    noStroke();
    fill(255, 10, 255);
    ellipse(this.posX, this.posY, this.diameter, this.diameter);
  };
}

var posX = 20,
    posY = 20,
    velX = 10,
    velY = 30,
    diameter = 40,
    accel = 1,
    friction = 0.8; // between 0 and 1
var ball_1 = new Ball(posX, posY, velX, velY, diameter, accel, friction);

function setup() {
  createCanvas(1500, 700);
  background(150);
}

function draw() {
  background(150);
  ball_1.move();
}
