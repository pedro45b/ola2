var seaImg,sea
var barco,barcoImg


function preload(){
seaImg = loadImage("sea.png");
barcoImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")


}

function setup(){
  createCanvas(400,400);
  sea = createSprite(50,50)
  sea.addImage("sea.png",seaImg)
sea.velocityX = -3

barco = createSprite(200,200)
barco.addAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png",barcoImg)
barco.scale=0.25
}

function draw() {
  background("blue");
    
if(sea.x < 0){
  sea.x = sea.width/2;
}
drawSprites();
}
