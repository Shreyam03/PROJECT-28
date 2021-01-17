
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,stone,tree,boy,m1,m2,m3,m4,m5,chain;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=loadImage("tree.png");
	ground=new Ground;
	stone=new Stone;
	m1=new Mango(400,370);
	m2=new Mango(500,400);
	m3=new Mango(540,300);
	m4=new Mango(620,380);
	m5=new Mango(720,370)
	
    chain=new Chain(stone.body,{x:20,y:550});
  boy=loadImage("boy.png");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  ground.display();
  imageMode(CENTER);
  image(tree,550,450,450,450);
  image(boy,100,620,200,200);
  stone.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  detectCollision(stone,m1);
  detectCollision(stone,m2);
  detectCollision(stone,m3);
  detectCollision(stone,m4);
  detectCollision(stone,m5);
  //ellipse(200,60,30,30)
  drawSprites();
 
}
function mouseDragged(){
	stone.body.position.x=mouseX;
	stone.body.position.y=mouseY;
}
function mouseReleased(){
	chain.fly();
}
function detectCollision(a,b){
  stonePos=a.body.position;
  mangoPos=b.body.position;
  var distance=dist(mangoPos.x,mangoPos.y,stonePos.x,stonePos.y);
  if(distance<=a.radius+b.radius){
	  Matter.Body.setStatic(b.body,false);
  }
}



