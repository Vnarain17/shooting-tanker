//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

const Engine = Matter.Engine
const World= Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;

var engine, world;
var tanker;
var ground;
var canonball;
var shootball;
var ball;
function setup() {
   var canvas = createCanvas(800,400);
   engine = Engine.create();
    world = engine.world;

    tanker = new Tanker(35,360,70,70);
    ground = new Ground(600,height,1200,20);
    canonball = new CanonBall(200,40,50);
    shootball = new Shootball(tanker.body,{x:200,y:40});
    ball = new Ball(500,30,25);
  
}


function draw() {
    background("black");
    Matter.Engine.update(engine);
    tanker.display();
    ground.display();  
    canonball.display();
    shootball.display()
    ball.display();
}

function mouseDragged(){
    Matter.Body.setPosition(tanker.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    shootball.fly();
}