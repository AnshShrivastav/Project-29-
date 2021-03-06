const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2,polygon;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

 

  ground1 = new Ground(470,250,240,10);
  ground2 = new Ground(400,400,800,1)

 // block1= new Block(410,235,30,40);
  block2= new Block(430,235,30,40);
  block3= new Block(440,240,30,40);
  block4= new Block(450,235,30,40);
  block5= new Block(460,235,30,40);
  block6= new Block(460,235,30,40);
  block7= new Block(440,215,30,40);
  
  //block8= new Block(440,210,30,40);
  block9= new Block(450,215,30,40);
  block10= new Block(460,215,30,40);
  

  block11= new Block(450,200,30,40);
  block12= new Block(455,200,30,40);

  block13= new Block(455,180,30,40);

  polygon= Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new Launcher(this.polygon,{x:250,y:40});
  


}

function draw() {
  background(220,225,226);  

  Engine.update(engine);

  ground1.display();
  ground2.display();

 // block1.display();


  fill("cyan");
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  
  
  fill("violet");
  block7.display();
//  block8.display();
  block9.display();
  block10.display();
 
  fill("orange")
  block13.display();

  fill("green");
  block11.display();
  block12.display();
fill("yellow")
  ellipse(polygon.position.x,polygon.position.y,20);
  slingshot.display();
  
  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x: mouseX , y: mouseY});

}

function mouseReleased(){
  slingshot.fly();
}