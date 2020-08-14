var wall, thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);

  bullet=createSprite(50,200,50, 50);
  bullet.shapeColor=color("gold");
}

function draw() {
  background(0);  
bullet.velocityX = speed;

if (bullet.isTouching(wall)) {
  bullet.velocityX=0;
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  if (damage>10) {
    wall.shapeColor=color("orange")
    bullet.shapeColor=color(255, 111, 0);
  }

  if (damage<10) {
    wall.shapeColor=color("lime")
    bullet.shapeColor=color("green");
  }
}

  drawSprites();
}