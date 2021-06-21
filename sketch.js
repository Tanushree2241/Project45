const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
var snows = [];
var boy1 , boy1Img , girl1 , girl1Img , snowBall , snowBallImg;
var slingShot , music;

var girl_options={
  isStatic : true
}
var snowBall_options={
  isStatic : true
}

function preload() {
  backgroundImg = loadImage("snow2.png");
  boy1Img  = loadImage("boy.png");
  girl1Img = loadImage("girl.png");
  snowBallImg = loadImage("snowBall.png");
  music = loadSound("snowSound.mp3");
}


function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  boy1 = createSprite(700,300,50,50);
  boy1.scale = 0.4;
  boy1.addImage(boy1Img);

  girl1 = Bodies.rectangle(200,300,50,50,girl_options);
  World.add(world,girl1); 

  snowBall = Bodies.rectangle(150,280,20,20,snowBall_options);
  World.add(world,snowBall);
  
  slingShot = new SlingShot(this.snowBall,{x:150,y:280});
}

function draw() {
  //background(255,255,255);  
  background(backgroundImg);
  Engine.update(engine);

  if(frameCount%10===0) {
    snows.push(new snow(random(5,750),10,10));
 }

 for (var l = 0; l < snows.length; l++) {
  snows[l].display();
}

if(boy1.y < 250) {
  boy1.velocityY = 0;
  boy1.y = 300;
}

imageMode(CENTER)
image(girl1Img ,girl1.position.x , girl1.position.y,100,200);

imageMode(CENTER)
image(snowBallImg ,snowBall.position.x , snowBall.position.y,40,30);

slingShot.display();
  drawSprites();
  fill("black");
  textSize(20);
  text("Press Space To Get Snow Back" , 250,50);

  fill("black");
  textSize(20);
  text("Press Enter To Jump The Boy" , 250,80);
}

function mouseDragged(){
  Matter.Body.setPosition(this.snowBall,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
  music.play();
}

function keyPressed(){

if(keyCode === 32) {
  Matter.Body.setPosition(this.snowBall,{x:150 , y:280});
  slingShot.attach(this.snowBall);
}

if(keyCode === 13) {
  boy1.velocityY = -8;
}
} 