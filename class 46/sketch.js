var bg
var bgimg
var bigdog
var bdogimg
var smdog
var smdogimg
var cat
var catimg
var grimg
var obstacleGroup
var score
var energylevel

function preload() {
bgimg=loadImage("bg.jpeg")
bdogimg=loadImage("big dog.jpg")
smdogimg=loadImage("small dog.jpg")
obstacleGroup= new Group()
catimg=loadAnimation("cat1.jpg","cat2.jpg","cat3.jpg","cat4.jpg","cat5.jpg");
}
function setup(){
   createCanvas(600,600);
   score=0
   energylevel=0

    bg=createSprite(300,300,1200,300)
    bg.addImage(bgimg)
    bg.scale=2.4
    bg.velocityX=-5

    cat=createSprite(550,500)
    cat.addAnimation("cat",catimg)
    cat.scale=0.5
}
function draw(){
background("white");
if(bg.x<0){
    bg.x=bg.width/2
}
drawSprites();

}