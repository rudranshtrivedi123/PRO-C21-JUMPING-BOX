var canvas;
var block1,block2,block3,block4;
var ball;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1=createSprite(0,570,300,30);
    block1.shapeColor="blue";

    block2=createSprite(260,570,200,30);
    block2.shapeColor="black";

 block3=createSprite(470,570,200,30);
    block3.shapeColor="red";

    block4=createSprite(690,570,200,30);
    block4.shapeColor="pink";

    
    ball=createSprite(random(20,750),100,40,40);
    ball.shapeColor="255,255,255";

    //create box sprite and give velocity
ball.velocityX=6;
ball.velocityY=6;
}

function draw() {
    background(rgb(169,169,169));
   // text(mouseX+","+mouseY,30,45)
   edges= createEdgeSprites();
ball.bounceOff(edges);
if(block1.isTouching(ball) &&ball.bounceOff(block1) ){
    ball.shapeColor="blue"
    music.play();
}

if(block2.isTouching(ball)  ){
    ball.shapeColor="black"
    music.stop();
    ball.velocityX=0
    ball.velocityY=0
}

if(block3.isTouching(ball) &&ball.bounceOff(block3) ){
    ball.shapeColor="red"
   // music.play();
}

if(block4.isTouching(ball) &&ball.bounceOff(block4) ){
    ball.shapeColor="pink"
    //music.play();
}


    //add condition to check if box touching surface and make it box

drawSprites();

}
