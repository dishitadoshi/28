
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone;
var boy;
function preload()
{
	boyImage=loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	stone = new Stone(100,200,40,60);
	//boy = createSprite(200,300,30,50);
    //boy.addImage(boyImage);
	//Create the Bodies Here.

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 stone.display();
 boy.display()
}



