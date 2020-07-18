const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //first layer.
    pig1 = new Pig(800,360,50,50)
    box1 = new Box(700,360,70,70);
    box2 = new Box(900,360,70,70);
    log1 = new Log(800,320,300,PI/2);

    //second layer.
    pig2 = new Pig(800,250,50,50)
    box3 = new Box(700,250,70,70);
    box4 = new Box(900,250,70,70);
    log2 = new Log(800,210,300,PI/2);

    //third layer.
    box5 = new Box(800,180,70,70);
    log3 = new Log(730,180,150,PI/4);
    log4 = new Log(870,180,150,PI/4*3);

    ground = new Ground(600,400,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    pig1.display();
    box1.display();
    box2.display();
    log1.display();

    pig2.display();
    box3.display();
    box4.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    ground.display();

  
}