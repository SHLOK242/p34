const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies



var particle=[]
var division=[]
var plinko=[]


function setup() {
  createCanvas(480,800);
 
  engine=Engine.create()
  world=engine.world
  Engine.run(engine)

  ground1=new Ground(240,1150,20,20)
  ground2=new Ground(-200,400,20,800)
  ground3=new Ground(700,400,20,800)

  

  for( var i=16; i<480; i=1+65){
division.push(new Division(i,650))
  }


  for(var i=0; i=width; i=i+50){
    plinko.push(new Plinko(1,50))
  }
 

  for(var i=30; i=width; i=i+50){
    plinko.push(new Plinko(1,150))
  }

  for(var i=60; i=width; i=i+50){
    plinko.push(new Plinko(1,300))
  }

  for(var i=90; i=width; i=i+50){
    plinko.push(new Plinko(1,450))
  }
}

function draw() {
  background(0);  
  drawSprites();
 ground1.display()
  ground2.display()
  ground3.display()
  

  if(frameCount% 30===0){
    particle.push(new Particle())
  }

  for( var i=0; i<particle.length; i++){
    particle[i].display()
  }


  for( var i=0; i<division.length; i++){
    division[i].display()
  }

  for(var i=0; i<plinko.length; i++){
    plinko[i].display()
  }
}