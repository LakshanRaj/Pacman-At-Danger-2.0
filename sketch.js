var pacman,ghost1,ghost2,ghost3,ghost4;
var edges;
var Cherry;
var ghost1Img,ghost2Img,ghost3Img,ghost4Img;

function preload(){
ghost1Img = loadImage("images/ghost1.png");
ghost2Img = loadImage("images/ghost2.png");


}



function setup() {
  createCanvas(800,400);
  pacman = createSprite(50,200,50,50);
  
  
}

function draw() {
  background(0); 
/*if(keyDown("RIGHT_ARROW")){
  pacman.x = pacman.x+7;
}

if(keyDown("LEFT_ARROW")){
  pacman.x = pacman.x-7;
}*/
if(keyDown("UP_ARROW")){
  pacman.y = pacman.y-7;
}
if(keyDown("DOWN_ARROW")){
  pacman.y = pacman.y+7;
}
edges = createEdgeSprites();
pacman.bounceOff(edges);

redGhost();
blueGhost();
pinkGhost();
yellowGhost();
Cherry();
drawSprites();
}

function redGhost(){
  if(frameCount%300===0){
  ghost1 = createSprite(800,200,50,40);
    ghost1.addImage("red",ghost1Img);
    ghost1.scale = 0.1;
  ghost1.velocityX =-3;
    ghost1.y = Math.round(random(50,350));
    ghost1.lifetime = 260;
    
  }
}
function blueGhost(){
  if(frameCount%250===0){
  ghost2 = createSprite(800,200,50,40);
  ghost2.addImage("blue",ghost2Img);
  ghost2.scale = 0.1
  ghost2.velocityX =-3;
    ghost2.y = Math.round(random(50,350));
    ghost2.lifetime = 260;
    
  }
}
function pinkGhost(){
  if(frameCount%200===0){
  ghost3 = createSprite(800,200,50,40);
  ghost3.velocityX =-3;
    ghost3.y = Math.round(random(50,350));
    ghost3.lifetime = 260;
  }
}
function yellowGhost(){
  if(frameCount%150===0){
  ghost4 = createSprite(800,200,50,40);
  ghost4.velocityX =-3;
    ghost4.y = Math.round(random(50,350));
    ghost4.lifetime = 260;
  }
}
function Cherry(){
  if(frameCount%50===0){
  cherry = createSprite(800,200,20,20);
  cherry.velocityX =-5;
    cherry.y = Math.round(random(50,350));
    cherry.lifetime = 160;
  }
}


