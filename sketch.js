var tom,jerry,tomImg1,jerryImg,jerryAni,tomAni;
var bgImg;






function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    jerryImg = loadAnimation("images/mouse1.png");
    jerryAni = loadAnimation("images/mouse2.png"," images/mouse3.png");
    tomImg1 = loadImage("images/cat1.png");
   //tomAni = loadAnimation("images/cat2.png","images/cat3.png");
}

function setup(){
    createCanvas(600,600);
    background(bgImg);
    jerry = createSprite(150,525,100,60);
    jerry.addAnimation("mouseStanding",jerryImg);
    jerry.addAnimatinon("mouseteasing",jerryAni);
    jerry.scale = 0.1;

    tom = createSprite(500,525,40,40);
    tom.addImage(tomImg1);
    tom.scale = 0.1;
    
    //create tom and jerry sprites here

}

function draw() {

 // keyPressed();
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
    if(keycode === LEFT_ARROW){
       
       jerry.changeAnimation("mouseteasing",jerryAni);
        jerry.frameDelay = 25;

       // tom.addAnimatinon("walking",tomAni);
       // tom.changeAnimation("walking",tomAni);
       // tom.frameDelay = 25;
    }

  //For moving and changing animation write code here


}
