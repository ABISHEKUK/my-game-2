var bgimage,bg
var boy,boyrunning;
var obstacls,obstacle1,obstacle2,coin;

function preload() {
  bgimage=loadImage("images/background.jpg")
  boyrunning = loadAnimation("images/boy 3.png",
  "images/boy 4.png","images/boy 5.png","images/boy 6.png","images/boy 7.png","images/boy 8.png");
  obstacle1=loadImage("images/obstacle1.png")
  obstacle2=loadImage("images/obstacle2.png")
  coin=loadImage("images/bitcoin.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(width/2,height/2,width,height);
  bg.addImage(bgimage)
  bg.scale=1.7;

  boy=createSprite(100,500,10,10)
  boy.addAnimation("running",boyrunning);

}

function draw() {
  background(255,255,255);  

  bg.velocityX= -5

 if(bg.x<400){
   bg.x=width/2;
 }

 spawnObstacles();
 spawnCoin();



  drawSprites();

}

function spawnObstacles() {
  if(frameCount % 50===0){
    obstacls=createSprite(width,620,10,20);
    obstacls.velocityX =-10;

    var rand = Math.round(random(1,2));
    switch(rand){
      case 1: obstacls.addImage(obstacle1);
      obstacls.scale=0.2
      break;
      case 2: obstacls.addImage(obstacle2);
      obstacls.scale=0.4;
      break;
      default:break;
    }

    
    obstacls.lifetime=width/10;
  }
}
 
function spawnCoin() {
  if(frameCount % 20===0){
    bitcoin=createSprite(width,400,30,20);
    bitcoin.velocityX=-20;
    bitcoin.addImage(coin);
    bitcoin.scale=0.1;
    bitcoin.lifetime=width/20;
    bitcoin.y=Math.round(random(100,400));
    

  }
  
}

