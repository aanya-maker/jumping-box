var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box = createSprite(random(20,750))



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));

if(Block.IsTouching(ball)){
    ball.ahapeColor = rgb(225,128,0);
    ball.velocityX = 0;
    music.stop();
}




    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
