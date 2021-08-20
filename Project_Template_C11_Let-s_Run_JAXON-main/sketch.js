var runner,runnerImg;
var track,trackImg;
var invisibleborder1,invisibleborder2



function preload(){
  runnerImg = loadAnimation("Runner-1.png" , "Runner-2.png")
  trackImg = loadImage("path.png")
}




function setup(){
  createCanvas(400,400);
  track = createSprite(200,200,170,170);
  track.scale = 1.19
  track.addImage(trackImg);
  track.velocityY = 5;



  runner = createSprite(100,350,150,150);
  runner.addAnimation("runnerMoving" , runnerImg);
  runner.scale = 0.065
  

}

function draw() {
   background(0);
  if (track.y > 400) {
     track.y = track.width / 2;
     }
     edges= createEdgeSprites();
     runner.x = World.mouseX
     runner.collide(edges);
  drawSprites();
}
