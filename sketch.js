var ship;
var sea;
var shipImage;
var seaImage;
function preload(){
  seaImage=loadImage("sea.png");
  shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,400,400);
  sea.addImage(seaImage);
  ship=createSprite(100,370,30,50);
  ship.addAnimation("moving",shipImage);
  ship.scale=0.2;
  invisibleGround=createSprite(300,190,600,5);
  invisibleGround.visible=false;
 

}

function draw() {
  background("blue");
  if(sea.y>400){
    sea.y=200;
  
    }
  drawSprites();
}