var rect1;
var rect2;
function setup() {
  createCanvas(800,400);
  rect1=createSprite(100,100);
  rect2=createSprite(200,100);
  rect1.shapeColor="pink";
  rect2.shapeColor="blue";
  rect1.velocityX=-4;
  rect2.velocityX=4;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if (rect2.x-rect1.x<rect1.width/2+rect2.width/2&&rect1.x-rect2.x<rect1.width/2+rect2.width/2) {
    rect1.velocityX=rect1.velocityX*(-1);
    rect2.velocityX=rect2.velocityX*(-1);
  }
  if (rect2.y-rect1.y<rect1.width/2+rect2.width/2&&rect1.y-rect2.y<rect1.width/2+rect2.width/2) {
    rect1.velocityY=rect1.velocityY*(-1);
    rect2.velocityY=rect2.velocityY*(-1);
  }
}