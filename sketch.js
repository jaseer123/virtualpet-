var dog,happydog,food,dogImage,database,foodStroke

function preload()
{
  //load images here
  dogImage=loadImage("dogImg.png")
  happydog=loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  dog=createSprite(250,250,)
  dog.addImage(dogImage)
  dog.scale=0.5
  database=firebase.database()
  foodStroke=database.ref("food")
  foodStroke.on("value",readStroke)

}


function draw() {  
background(46,139,87)
  
  //add styles here
if(keyWentDown(UP_ARROW)){
  writeStroke(foodStroke)
  dog.addImage(happydog)
}

drawSprites()
}
textSize(50)
text("foodStroke",foodStroke,100,200)
fill("yellow")
Stroke()
function readStroke(data){
  foodStroke=data.val()
}
function writeStroke(x){
  database.ref("food").set({
foodStroke:x
  })
  
}



