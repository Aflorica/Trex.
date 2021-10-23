
var trex ,trex_running;
var ground
var fake_ground
var ground_image
function preload(){
  trex_running=loadAnimation("trex3.png","trex4.png")
ground_image=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,190,20,50)
 trex.addAnimation("Run",trex_running)
 trex.scale=0.6
 // creating a ground sprite
 ground=createSprite(200,180,400,5)
 ground.addImage(ground_image)
 // creating a fake ground
 fake_ground=createSprite(190,190,395,5)
 //fake_ground.shapeColor="PowderBlue"
 fake_ground.visible=false
}//if(num1>50 || num1%2==0)

function draw(){
  background("PowderBlue")

  drawSprites()
  if(keyDown("space") && trex.collide(fake_ground)){

    trex.velocityY=-20
  }

    ground.velocityX=-2
  trex.velocityY=trex.velocityY+2 
  // making trex standing on the ground
  trex.collide(fake_ground  )
  //console.log(ground.x)
  if(ground.x<0){
 ground.x=ground.width/2
  }

}
