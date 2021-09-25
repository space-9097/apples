var garden, rabbit;
var gardenImg, rabbitImg;
var apple, appleimg
var leaves, leaveimg


var select_sprites = Math.round(random(1,2));

if (frameCount % 80 == 0) {
  if (select_sprites === 1) {
    createApples()
  }
  else {
     createLeaves()
  }
}

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png")
  leaveimg = loadImage("orangeLeaf.png")
}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);

  function createApples() {
    apple = createSprite(random(50, 350), 40, 10, 10);
    apple.addImage(appleimg);
    apple.scale = 0.5
    apple.velocityY = 4
    apple.lifetime = 30
  }

  function createLeaves() {
    leaves = createSprite(random(50, 350), 40, 10, 10);
    leaves.addImage(leaveimg);
    leaves.scale = 0.5
    leaves.velocityY = 4
    leaves.lifetime = 30
  }


}

function draw() {
  background(0);

  edges = createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();
}