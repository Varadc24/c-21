var fixedRect,   movingRect;
var obj1, obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  obj1 = createSprite(400, 400, 50 , 50);
  obj1.shapeColor = "cyan";
  obj1.velocityY = -4;
  obj2 = createSprite(400, 200, 50 , 50);
  obj2.shapeColor = "cyan";
  obj2.velocityY = 4;
}

function draw() {
  background(0,0,0);
 if (istouching(obj1, obj2)){
obj1.shapeColor = "red";
obj2.shapeColor = "red";
 }
else {obj1.obj2 = "green";
obj2.shapeColor = "green";
 }
bounceoff (obj2, obj1);


 
  drawSprites();
}
