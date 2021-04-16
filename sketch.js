
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var rubber;
var stone;
var hammer;
var iron;
var sand1,sand2,sand3,sand4,sand5,sand6;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rubber = new Rubber(2,2,8);
	sand1 = new Sand(9,9,4);
	sand2 = new Sand(8,8,4);
	sand3 = new Sand(7,7,4);
	sand4 = new Sand(6,6,4);
	sand5 = new Sand(5,5,4);
    sand6 = new Sand(5,5,4);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  rubber.display();
	sand1.display(); 
	sand2.display(); 
	sand3.display(); 
	sand4.display(); 
	sand5.display(); 
    sand6.display(); 





  
  
 
}



