var bullets,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)

  bullets=createSprite(50,200,90,20);
  bullets.velocityX = speed;
  bullets.shapeColor = "250,250,250";

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=80,80,80;
}

function draw() {

  background("black");  

  if (wall.x-bullets.x < (bullets.width+wall.width)/2) {
    bullets.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if (deformation>180) {
    bullets.shapeColor = "white";
    }
    if (deformation<180 && deformation>100) {
    bullets.shapeColor = "white";
    }
    if (deformation<100) {
    bullets.shapeColor = "white";
    }
  }
  
  if(hasCollided(bullets, wall)) 
  {
    bullets.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
  
    if (damage>10)
    {
      wall.shapeColor="red";
    }
    if (damage<10)
    {
      wall.shapeColor="green";
    }
  
  }

  drawSprites();
}


function hasCollided(lbullets,lwall) {
    bulletsRightEdge=lbullets.x + lbullets.width; 
    wallLeftEdge=lwall.x;
    if (bulletsRightEdge>=wallLeftEdge) {
   return true
    }
    return false;
  }
