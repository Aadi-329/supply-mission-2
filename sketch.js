var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var horizontal,hb
var vertical1,v1b
var vertical2,v2b
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	vertical1=createSprite(240, 650, 20, 200 );
	vertical2=createSprite(240, 650, 20, 200 );
	horizontal=createSprite(width/2,640,200,20);
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	hb= Bodies.rectangle(width/2, 635, 200, 20 ,{isStatic:true} );
	World.add(world, hb)

	v1b= Bodies.rectangle(300, 650, 20, 200 ,{isStatic:true} );
	World.add(world, v1b)

	v2b= Bodies.rectangle(500, 650, 20, 200 ,{isStatic:true} );
	World.add(world, v2b)
console.log(hb.position.y);
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	  //Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 //World.add(world, ground);

	
	 
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 //  updateEngine(engine);
  horizontal.x= hb.position.x 
  horizontal.y=hb.position.y
  packageSprite.y= hb.position.y 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  vertical1.x=v1b.position.x;
  vertical2.x=v2b.position.x;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



