//importação de módulos
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


//variáveis iniciais
var engine, world, backgroundImg;
var canvas, angle, tower, towerImage, ground;

//variável para o canhão(aluno)

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;

  //para deixar o chão parado(propriedade)
  var options = {
    isStatic: true
  }

  //criando o chão e adc ao mundo
  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  //criando a torre e adc ao mundo
  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  //criar canhão baseado na classe Cannon


  //definir ângulo

}

function draw() {

  //imagem de fundo
  //rect(0, 0, width, height);
  image(backgroundImg, 0, 0, width, height);

  //atualização da física
  Engine.update(engine);

  //chão/linha
  rect(ground.position.x, ground.position.y, width * 2, 1);

  //torre
  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

  //exibição de canhão

}
