
var monkey , monkey_running, ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var highScore=0
var background,bImg
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  bImg = loadImage("jungle.jpg")
 
}



function setup() {
  createCanvas(800,400);
  background = createSprite(0,0,800,400);
  background.addImage(bImg); 
  background.scale=1.5
  background.velocityX=-4
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkey_moving",monkey_running)
  monkey.scale=0.1;
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  FoodGroup=createGroup();
  obstaclesGroup=createGroup();
  ground.visible = false
}


function draw() {

  
  
if(score>0 && score%100 === 0);
  if(ground.x<0){
    ground.x=ground.width/2
  }
   if(background.x<0){
    background.x=background.width/2
  }
  if(keyDown("space")){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground)
  Food();
  obstacles();
  
  switch(score){
    case 10: monkey.scale = 0.12;
      break;
      case 20: monkey.scale = 0.14;
      break;
      case 30: monkey.scale = 0.16;
      break;
      case 40: monkey.scale = 0.18;
  }
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach()
    score = score+5
  }
  if(obstaclesGroup.isTouching(monkey)){
    monkey.scale = 0.12;
    background.velocityX = 0;
    FoodGroup.destroyEach();
    FoodGroup.setVelocityXEach(0);
    obstaclesGroup.setVelocityXEach(0);
  }
  drawSprites();
  fill("black")
  text("Score: "+ score, 500,50);
  text("HighScore: "+highScore,400,50);
      
}
function Food(){
  if(frameCount%80==0){
    banana=createSprite(600,random(120,200),40,10)
    banana.velocityX=-5;
    banana.addImage(bananaImage)
    banana.scale=0.1;
    banana.lifetime=300
    FoodGroup.add(banana)
  }
}
function obstacles(){
  if(frameCount%300==0){
    obstacle = createSprite(800,320,10,40);
    obstacle.velocityX=-6;
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15
    obstacle.lifetime=300;
    obstaclesGroup.add(obstacle)
  }
}




