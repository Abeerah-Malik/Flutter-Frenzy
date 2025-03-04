// font for title and insctructions
var flutterfrenzy;
var othertxt;

//image
var introimg;
var bgsky;
var girlimg;
var scoremeter;
var winscene;
var losescene;

//music
var bgmusic;

//scene ids
var sceneId = 0;

var introscene;
var butterflygame;
var player;
var timer;
var youlose;

function preload() {
  //load font
  flutterfrenzy = loadFont("Milkyway.ttf");
  othertxt = loadFont("Boldwinn.ttf");

  //illustrations
  introimg = loadImage("intro.png");
  bgsky = loadImage("bgsky.png");
  girlimg = loadImage("girl.png");
  scoremeter = loadImage("score.png");
  winscene = loadImage("win.png");
  losescene = loadImage("lose.png");

  //bg music for game
  bgmusic = loadSound("happy.mp3");
}

function setup() {
  createCanvas(800, 800);

  introscene = new intro();
  butterflygame = new CatchGame();
  player = new Player(girlimg, width / 2, height - 320, 300, 300);
  timer = new Timer(50);
  youlose = new losescreen();
  if (!bgmusic.isPlaying()) {
    bgmusic.loop();
  }
}

function draw() {
  if (sceneId === 0) {
    introscene.display();
  } else if (sceneId === 1) {
    if (!timer.isRunning) {
      timer.start();
    }

    timer.update();
    butterflygame.display();
    player.display();
    timer.display();

    if (timer.isFinished) {
      sceneId = 2;
    }
  } else if (sceneId === 2) {
    youlose.display();
  }
}
