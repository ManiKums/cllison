var car,wall1

var speed,wieght


















function setup() {
  createCanvas(800,400);
 car=createSprite(400, 200, 50, 50);
 //car.shapeColor="yellow"
 car.velocityX=4
 wall=createSprite(700,200,50,100)
// wall.shapeColor="black"

speed=random(51,91)
wieght=random(400,1500)


}

function draw() {
  background("black");  
  if(wall.x-car.x<(wall.width+car.width)/2){
    car.velocityX=0
    var deformation=0.5*wieght*speed*speed/22500
    console.log=deformation
    if(deformation>180){
      car.shapeColor=color("red")
      wall.shapeColor=color("red")
    }
    if(deformation<180&&deformation>100){
      car.shapeColor=color("red")
      wall.shapeColor=color("black")
    }
    if(deformation<100){
      car.shapeColor=color("red")
      wall.shapeColor=color("white")
    }
  }
  
  drawSprites();
}