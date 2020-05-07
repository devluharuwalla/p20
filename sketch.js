var Car, wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  Car = createSprite(50, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  wall = createSprite(1500,200,30,500);
  wall.shapeColor=color(255);
  Car.velocityX=speed;
  Car.collide(wall);
}

function draw() {
  background(0); 
  if(wall.x-Car.x<(Car.width+wall.width)/2){
    Car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation<100){
      Car.shapeColor="green";

    }
    if(deformation < 180 && deformation > 100){
      Car.shapeColor="yellow";

    }
    if(deformation>180){
      Car.shapeColor="red";
    }

    } 
  drawSprites();
}