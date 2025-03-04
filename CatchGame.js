class CatchGame {
  constructor() {
    this.butterflyArray = [];
    this.numItems = 10;
    this.score = 0; // initialize score

    for (var i = 0; i < this.numItems; i++) {
      this.butterflyArray[i] = new butterflies();
      this.butterflyArray[i].x = random(100, 400);
      this.butterflyArray[i].y = random(-300, -100);
      this.butterflyArray[i].speed = random(2, 5);
      this.butterflyArray[i].size = 50;
    }
  }

  display() {
    background(bgsky);
    image(scoremeter, 260, 10);
    this.displayScore(); //score

    for (var i = 0; i < this.numItems; i++) {
      var butterfly = this.butterflyArray[i];

      // move butterfly downward
      butterfly.y += butterfly.speed;

      if (this.butterflyTouchesNet(butterfly)) {
        this.score++; // increase
        this.resetButterfly(butterfly); // reset position
        continue;
      }

      // reset if butterfly falls past screen
      if (butterfly.y > height) {
        this.resetButterfly(butterfly);
      }

      // display the butterfly
      push();
      translate(butterfly.x, butterfly.y);
      butterfly.display();
      pop();
    }
  }

  resetButterfly(butterfly) {
    butterfly.y = random(-300, -100);
    butterfly.x = random(100, 400);
  }

  butterflyTouchesNet(butterfly) {
    var butterflySize = butterfly.size; // adjusted for scale

    // Define the net's position relative to the player's top part
    var netX = player.x + 50; // Adjust for accuracy (this assumes player.x is the starting point)
    var netY = player.y - 100; // Move higher to align with the top part of the PNG (net area)
    var netWidth = 60; // Width of the net area (adjust as needed)
    var netHeight = 30; // Height of the net area (adjust as needed)
    return (
      butterfly.x + butterflySize * 50 > netX &&
      butterfly.x < netX + netWidth &&
      butterfly.y + butterflySize > netY && // **Check butterfly's top, not center**
      butterfly.y < netY
    );
  }

  displayScore() {
    fill(255);
    textSize(32);
    textAlign(CENTER);
    text(this.score, 400, 90);
  }
}
