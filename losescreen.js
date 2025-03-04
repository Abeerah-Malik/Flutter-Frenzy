class losescreen {
  constructor() {
    this.restartbtn = createButton("Play Again?");

    //styling
    this.restartbtn.size(400, 100);
    this.restartbtn.style("border-radius", "30px");
    this.restartbtn.style("font-family", "Boldwinn");
    this.restartbtn.style("font-size", "50px");
    this.restartbtn.style("background", "#519977");
    this.restartbtn.style("color", "#fff");
    this.restartbtn.style("transition", "all 0.5s ease-in-out");

    this.restartbtn.mousePressed(() => this.restartGame());
    this.restartbtn.hide(); // Hide the button initially
  }

  display() {
    if (butterflygame.score >= 40) {
      image(winscene, 0, 0, width, height); // Win background
    } else {
      image(losescene, 0, 0, width, height); // Lose background
    }

    textSize(50);
    fill(255);
    textAlign(CENTER);
    text(butterflygame.score, 400, 430);

    this.restartbtn.position(220, 600);
    this.restartbtn.show(); //restart button
  }
  restartGame() {
    butterflygame = new CatchGame();
    timer = new Timer(30);
    sceneId = 0;
    this.restartbtn.hide();
  }
}
