var girl,girlImg;
var path,pathImg;
var sound,girlfallImg;
var gameOverImg;
var resetImg;
var diamondsImg;
var dianosaurImg;
var girlstandingImg;
var score=0;
var gameState= "start"


function preload(){
   girlImg=loadAnimation("run1.png","run2.png","run3.png","run4.png");
 girlstandingImg=loadImage("standing.png");
girlfallImg=loadImage("fall.png");
gameOverImg=loadImage("gameover.png");
pathImg=loadImage("road.jpg");
resetImg=loadImage("reset button.png");
dianosaurImg=loadImage("dianasour-.png");
diamondsImg=loadImage("diamond.png");
sound=loadSound("sound.wav");
speed=loadImage("speed.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(width/2,200);
path.scale= 0.5
path.addImage(pathImg);
path.velocityY = 4;
girl=createSprite(750,700,50,50)
girl.addImage(girlstandingImg);
girl.scale=1.5
}

function draw() {

  
  background(0);
  
  if(path.y > height ){
    path.y = height/2;
  }
  if(keyWentDown(UP_ARROW)){
    girl.addAnimation("running",girlImg)
//girl.velocityY=-4
gameState="play"
  }

  if(gameState==="play"){
   
  }
  drawSprites();
  textSize(20);
  fill(255);
  text("Score: "+ score,width-150,30);
  }