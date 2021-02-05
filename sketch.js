const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var gamestate="start";
var level=1;
var currentLevel;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    if(level==1){
        currentLevel=new Level2();
    }
    player=new Player (50,50,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    

    currentLevel.display();
    player.display();
    if(gamestate=="won"){
        textSize(35);
        fill("white")
        text("Level Complete",250,300)
        level+=1;
    }
}
function keyPressed(){
    if(gamestate=="start"){
        if(keyCode==LEFT_ARROW){
            player.move(-15,0);
        }
        else if(keyCode==RIGHT_ARROW){
            player.move(15,0);
        }
        else if(keyCode==UP_ARROW){
            player.move(0,-15);
        }
        else if(keyCode==DOWN_ARROW){
            player.move(0,+15);
        }
    }
    
}