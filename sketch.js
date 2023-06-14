const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, rock;
var rockimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  rockimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  };

  rock = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, rock);

  player = Bodies.rectangle(250, rock.position.y - 160, 50, 180, options);
  World.add(world,player)

}

function draw() {
  background(backgroundImg);
  image(rockimage,rock.position.x,rock.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)

  Engine.update(engine);


  
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}