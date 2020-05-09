class CanonBall {
  constructor(x, y, radius) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    this.body = Bodies.rectangle(x, y, radius, options);
    this.radius = radius
    //this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rect(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
};