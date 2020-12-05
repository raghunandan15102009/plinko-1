const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, division, engine;
var plinko = [];
var particle = [];

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480, 600);
  ground = new Division(240, 600, 480, 20);
  division = new Division(0, 500, 10, 200);
  division1 = new Division(80, 500, 10, 200);
  division2 = new Division(160, 500, 10, 200);
  division3 = new Division(240, 500, 10, 200);
  division4 = new Division(320, 500, 10, 200);
  division5 = new Division(400, 500, 10, 200);
  division6 = new Division(480, 500, 10, 200);
}

function draw() {
  background(0);
  ground.display();
  division.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  for (var i = 40; i <= 480; i = i + 50) {
    plinko.push(new Plinko(i,175))
  }
  for (var i = 15; i <= 470; i = i + 50) {
    plinko.push(new Plinko(i,75))
  }
  for (var i = 40; i <= 480; i = i + 50) {
    plinko.push(new Plinko(i,275))
  }
  for (var i = 15; i <= 470; i = i + 50) {
    plinko.push(new Plinko(i,375))
  }
  if(frameCount%90===0){
    particle.push(new Particle(random(230,250),10))
  }
  for(var i=0;i<plinko.length;i++){
    plinko[i].display();
  }
  for(var k=0;k<particle.length;k++){
    particle[k].display();
  }
  drawSprites();
}