class intro {
  constructor() {
    this.startbtn = createButton("Start");
    this.startbtn.position(20, 550);

    this.startbtn.mousePressed(() => this.startGame());

    //styling
    this.startbtn.size(300, 100);
    this.startbtn.style("border-radius", "100px");
    this.startbtn.style("font-family", "othertxt");
    this.startbtn.style("font-size", "65px");
    this.startbtn.style("background", "#4f772d");
    this.startbtn.style("color", "#fff");
    this.startbtn.style("transition", "all 0.5s ease-in-out");

    //start button is pressed, go to game scene
    this.startbtn.mousePressed(() => this.startGame());
    this.startbtn.hide(); // hide the button initially
  }

  display() {
    //illustration
    image(introimg, 0, 0, width, height);

    if (sceneId === 0) {
      this.startbtn.position(40, 550);
      this.startbtn.show(); // show

      // header txt
      textAlign(CENTER);
      textSize(100);
      textFont(flutterfrenzy);
      fill("#00296b");
      text("FLUTTER FRENZY", width / 2, 120);

      // description txt
      textFont(othertxt);
      textSize(35);
      text(
        "Catch 40 falling butterflies \nbefore the time runs out!",
        width / 2,
        200
      );

      //gameplay txt
      textSize(28);
      text("Use arrow keys \nto control the net", 170, 450);
    }
  }
  startGame() {
    sceneId = 1;
    this.startbtn.hide();
  }
}
