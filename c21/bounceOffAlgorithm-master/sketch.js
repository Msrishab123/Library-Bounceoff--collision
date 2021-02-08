var fixedRect, movingRect;
var gobj1,gobj2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gobj1=createSprite(100,200,50,50);
  gobj2=createSprite(250,200,50,50);
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  bounceoff(movingRect,fixedRect);
  gobj1.x=World.mouseX;
  gobj2.y=World.mouseY;
  if(isTouching(gobj1,gobj2)){
    gobj1.shapeColor="yellow";
    gobj2.shapeColor="yellow";
  }
  else{
    gobj1.shapeColor="blue";
    gobj2.shapeColor="blue";
  }
  
  drawSprites();
}

