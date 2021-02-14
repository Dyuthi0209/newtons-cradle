const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var roof; 
var  bobObject1;
var  bobObject2;
var  bobObject3;
var  bobObject4;
var  bobObject5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
var roofObject;

function setup() {

  createCanvas(900,500);

  engine = Engine.create();
    world = engine.world;

    

  bobObject1=  new Bob(230,330,50)

  bobObject2=  new Bob(330,330,50)

  bobObject3=  new Bob(430,330,50)
  
  bobObject4=  new Bob(530,330,50)
 
  bobObject5=  new Bob(630,330,50)

roofObject= new Roof(430,50, 510,15)
  
rope1 = new Rope(bobObject1.body,roofObject.body,-200,10);
rope2 = new Rope(bobObject2.body,roofObject.body,-100,10);
rope3 = new Rope(bobObject3.body,roofObject.body,0,10);
rope4 = new Rope(bobObject4.body,roofObject.body,100,10);
rope5 = new Rope(bobObject5.body,roofObject.body,200,10);


  Engine.run(engine);
  Engine.update(engine);
}

function draw() {
  background(255, 239, 8);  

  bobObject1.display(); 
	bobObject2.display();  
	bobObject3.display();  
	bobObject4.display(); 
	bobObject5.display();  
	roofObject.display();
	rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  keyPressed();
  
  drawSprites();

}


function keyPressed(){
  if (keyDown(UP_ARROW)){
  Matter.Body.applyForce(bobObject5.body, bobObject5.body.position,{x:200,y:0})
}
}

