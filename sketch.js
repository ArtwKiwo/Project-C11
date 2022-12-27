var sea
var ship

var seaImage
var shipAnimation

function preload(){

sea = loadImage("sea.png");

ship = loadAnimation("ship-1.png","ship-2.png");

}

function setup(){

  createCanvas(400,400);
  
  seaImage = createSprite(200,200);
  seaImage.addImage(sea);
  seaImage.scale = 0.3;

  shipAnimation = createSprite(100,200);
  shipAnimation.addAnimation("cruzeiro",ship);
  shipAnimation.scale = 0.3;

}

function draw() {
  background("blue");
    drawSprites();

  seaImage.velocityX = -10

  if(seaImage.x < 0){

     seaImage.x = 200;

  }
}
