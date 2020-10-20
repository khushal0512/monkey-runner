
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime=0;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  

  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  console.log(ground.x);
  
   monkey.collide(ground);
  
  obstacleGroup = createGroup();
  foodGroup = createGroup();
}


function draw() {
  background("white");

  if(keyDown("space")&& monkey.y >= 310) {
        monkey.velocityY = -15;
  }
  monkey.velocityY=monkey.velocityY + 0.8;
  
  
      ground.x = ground.width/2;
    
  
 monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime:"+survivalTime,100,50);
  
  
  food();
  obstacles();
  drawSprites();
}
function food(){
  if(frameCount%80===0){
    banana=createSprite(400,400,40,10);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX=-4;
    banana.lifetime=200;
    banana.scale=0.1;
    foodGroup.add(banana);
    
  }
}
function obstacles(){
  if(frameCount%300===0){
   obstacle=createSprite(400,330,50,50);
    obstacle.x=Math.round(random(120,200));
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-4;
    obstacle.lifetime=200;
    obstacle.scale=0.1;
    obstacleGroup.add(obstacle);
  }
  
  
  
}




