
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bob1 = new Bob(200,300,50,50);
   bob2 = new Bob(200,320,50,50);
   bob3 = new Bob(200,340,50,50);
   bob4 = new Bob(200,360,50,50);
   bob5 = new Bob(200,380,50,50);

   rope1 = new Rope(bobObject1.body,roofObject.body,- bobdiameter*2,0);
   roof = new Roof(400,600,250,50);

   Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  roof.display();
  drawSprites();
 
}



