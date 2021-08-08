
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var engine;
var world;


var Right_side,Left_side,Bottom_side;
var ball;

function preload()
{
 
  
}

function setup() {
	createCanvas(1300, 750);


	engine = Engine.create();
	world = engine.world;
 
   
  
 
	//Create the Bodies Here.
   var ball_options = {
   isStatic : false, 
   restitution : 0.4,
   friction : 0 ,
   density:1
   
   }
	ball =Bodies.circle(100,50,40,ball_options)
	World.add(world,ball)
    
	bottom_side = new Ground(width/2,670,width,40)
	Left_side = new Ground(820,550,20,200)
  Right_side = new Ground (1070,550,20,200)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  ellipse(ball.position.x,ball.position.y,50)
  bottom_side.display();
  Right_side.display();
  Left_side.display();

  if(keyDown("UP_ARROW")){
  VForce();
  HForce();
  

   }
  


  drawSprites();
 
}


 function VForce(){

 Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:150})




 }

 function HForce(){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:150,y:0})
 
 
 
 
  }
 
 

