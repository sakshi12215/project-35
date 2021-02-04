var balloon,balloonIMG;
var database,position;
var backgroundImg;

function preload(){
  backgroundImg = loadImage("IMG/Hot Air Ballon-01.png");
  balloonIMG = loadImage("IMG/Hot Air Ballon-02.png");
  balloon=createSprite(100,300,30,40);
  balloon.addImage(image,balloonIMG);
  database=firebase.database()
}

function setup() {
  createCanvas(500,500);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg); 
  
  if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x-10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x+10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y=balloon.y-10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y=balloon.y+10;
  }

  drawSprites();
}