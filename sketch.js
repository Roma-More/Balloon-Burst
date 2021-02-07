var gameState = "start";

var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup, arrowSound, burst;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  arrowSound = loadSound("Sound.mp3");
  burst = loadSound("Burst.mp3");
  
  
}



function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0 
  
  arrowGroup = createGroup();
  redB = createGroup();
  blueB = createGroup();
  pinkB = createGroup();
  greenB = createGroup();
   
}

function draw() {
  if(gameState === "start") {
   textSize(40);  
  text("B A L L O O N  B U S T E R",10,100);
  textSize(20);
  text("Burst each balloon and earn 1 point ",80,150);
  text("Press space key to release the arrow from ",80,180);
  text("the bow",80,200);
  text("Press 'Enter' to start the game",80,230);
  
  
  bow.visible = false;
  arrowGroup.visible = false;
  redB.visible = false;
  blueB.visible = false;
  pinkB.visible = false;
  greenB.visible = false;
  }
  
 if(keyDown("enter")) {
   gameState = "play";
 }
 if(gameState === "play"){
   
    // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
      
      
    }
   
   
 
  
  //moving bow
  bow.y = World.mouseY
   
  // making evrything visible
   bow.visible = true;
  arrowGroup.visible = true;
  redB.visible = true;
  blueB.visible = true;
  pinkB.visible = true;
  greenB.visible = true;
   
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    arrowSound.play();
    
  }
 
  //Bursting the balloons
  if(arrowGroup.isTouching(redB)) {
    redB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
    burst.play();
  }
  
  if(arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
    burst.play();
  }
  
  if(arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
    burst.play();
  }
  
  if(arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
    burst.play();
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }


  
  drawSprites();
  textSize(20);
  stroke("black");
  text("Score: "+ score, 300,50);
 }
 
  
 
}




function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
 // return red
  
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
  //return blue;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
  //return green;   
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);
 // return pink;
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
  
}
