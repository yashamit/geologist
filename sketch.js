
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone 
var floor
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   stone = new Stone(400,30,100,100)
   floor = new Ground(0 , 680 , 800 , 20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  
 stone.display();
 floor.display();

  drawSprites();
 
}



