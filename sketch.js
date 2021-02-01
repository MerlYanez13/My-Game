const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    maze1=new Wall (50,100,50,PI/2);
    player=new Player (50,50,20)

}

function draw(){
    background(0);
    Engine.update(engine);

    maze1.display();
    player.display();

}
function keyPressed(){
    if(keyCode==LEFT_ARROW){
        player.move(-10,0);
    }
    else if(keyCode==RIGHT_ARROW){
        player.move(10,0);
    }
    else if(keyCode==UP_ARROW){
        player.move(0,-10);
    }
    else if(keyCode==DOWN_ARROW){
        player.move(0,+10);
    }
}