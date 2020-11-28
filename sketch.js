var monkey, monkey_running, monkeyImage;
var bananaImage, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime;

function preload() {

  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  monkey = createSprite(100, 280, 1, 1);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.12;

  ground = createSprite(100, 395, 600, 5);
  ground.velocityX = -4;

  foodGroup = createGroup();
  obstacleGroup = createGroup();

  score = 0;

  survivalTime = 0;
}


function draw() {
  createCanvas(400, 400);
  background("white");
  
  stroke("green");
  textSize(15);
  fill("blue");
  survivalTime = Math.ceil(frameCount/60);
  text("Survival Time: " + survivalTime, 100,50);

  if (keyDown("space") && monkey.y >= 350) {
    monkey.velocityY = -19;
  }

  monkey.velocityY = monkey.velocityY + 0.8;

  if (ground.x < 100) {
    ground.x = ground.width / 2;
  }

  monkey.collide(ground);
  food();
  obstacles();
  console.log(frameCount);
  drawSprites();
}

function food() {
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(400, 160, 50, 50);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX = -4;
    banana.lifetime = 300;
    foodGroup.add(banana);
  }
}

function obstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400, 375, 50, 50);
   // obstacle.x = Math.round(random(120, 200));
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX = -4;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
}