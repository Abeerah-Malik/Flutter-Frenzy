class butterflies {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.speed = random(2, 5);

    this.scaleFactor = 0.2;

    //body variables
    this.bodyx = 300 * this.scaleFactor;
    this.bodyy1 = 320 * this.scaleFactor;
    this.bodyy2 = 380 * this.scaleFactor;
    this.bodyy3 = 450 * this.scaleFactor;

    this.bodycolors = [
      "#22333b",
      "#22223b",
      "#4a4e69",
      "#432818",
      "#081c15",
      "#9c6644",
    ];
    this.bodycolor = random(this.bodycolors);

    //wings variables Y-axis
    this.wingY1 = 380 * this.scaleFactor;
    this.wingY2 = 210 * this.scaleFactor;
    this.wingY3 = 270 * this.scaleFactor;
    this.wingY4 = 460 * this.scaleFactor;
    //right wing X-axis
    this.rightX1 = 310 * this.scaleFactor;
    this.rightX2 = 420 * this.scaleFactor;
    this.rightX3 = 540 * this.scaleFactor;

    //left wing X-axis
    this.leftX1 = 290 * this.scaleFactor;
    this.leftX2 = 180 * this.scaleFactor;
    this.leftX3 = 60 * this.scaleFactor;

    this.wingcolors = [
      "#184e77",
      "#1e6091",
      "#1a759f",
      "#168aad",
      "#34a0a4",
      "#52b69a",
      "#76c893",
      "#99d98c",
      "#b5e48c",
      "#d9ed92",
    ];
    this.bigWingcolor = random(this.wingcolors);

    this.smallWingcolor = random(this.wingcolors);

    //pattern of shapes
    this.patternshapes = ["circle", "square", "triangle"];
    this.patternpositions = [
      {
        x: 130 * this.scaleFactor,
        y: 300 * this.scaleFactor,
        size: 40 * this.scaleFactor,
      },
      {
        x: 180 * this.scaleFactor,
        y: 320 * this.scaleFactor,
        size: 30 * this.scaleFactor,
      },
      {
        x: 215 * this.scaleFactor,
        y: 335 * this.scaleFactor,
        size: 15 * this.scaleFactor,
      },
    ];

    //array for pattern colors
    this.patterncolors = [
      "#eae2b7",
      "#fcbf49",
      "#f77f00",
      "#d62828",
      "#003049",
    ];

    this.patterncolor = random(this.patterncolors);

    this.shape = random(this.patternshapes);
  }

  display() {
    noStroke();

    push();
    translate(this.x, this.y);

    var offsetX = -500 * this.scaleFactor; // Adjust this based on butterfly shape
    var offsetY = -200 * this.scaleFactor; // Adjust this based on butterfly shape
    translate(offsetX, offsetY);

    //body of butterfly
    fill(this.bodycolor);
    triangle(
      this.bodyx,
      this.bodyy1,
      this.bodyx + 12 * this.scaleFactor,
      this.bodyy2,
      this.bodyx,
      this.bodyy3
    );
    triangle(
      this.bodyx,
      this.bodyy1,
      this.bodyx - 12 * this.scaleFactor,
      this.bodyy2,
      this.bodyx,
      this.bodyy3
    );

    //right big wing
    fill(this.bigWingcolor);
    triangle(
      this.rightX1,
      this.wingY1,
      this.rightX2,
      this.wingY2,
      this.rightX3,
      this.wingY3
    );
    triangle(
      this.rightX1,
      this.wingY1,
      this.rightX2 + 40 * this.scaleFactor,
      this.wingY1,
      this.rightX3,
      this.wingY3
    );

    //right small wing
    fill(this.smallWingcolor);
    triangle(
      this.rightX1,
      this.wingY1,
      this.rightX2 + 20 * this.scaleFactor,
      this.wingY1 + 20 * this.scaleFactor,
      this.rightX2 + 40 * this.scaleFactor,
      this.wingY4
    );
    triangle(
      this.rightX1,
      this.wingY1,
      this.rightX2 - 20 * this.scaleFactor,
      this.wingY1 + 100 * this.scaleFactor,
      this.rightX2 + 40 * this.scaleFactor,
      this.wingY4
    );

    //left big wing
    fill(this.bigWingcolor);
    triangle(
      this.leftX1,
      this.wingY1,
      this.leftX2,
      this.wingY2,
      this.leftX3,
      this.wingY3
    );
    triangle(
      this.leftX1,
      this.wingY1,
      this.leftX2 - 60 * this.scaleFactor,
      this.wingY1,
      this.leftX3,
      this.wingY3
    );

    //left small wing
    fill(this.smallWingcolor);
    triangle(
      this.leftX1,
      this.wingY1,
      this.leftX2 - 20 * this.scaleFactor,
      this.wingY1 + 20 * this.scaleFactor,
      this.leftX3 + 80 * this.scaleFactor,
      this.wingY4
    );
    triangle(
      this.leftX1,
      this.wingY1,
      this.leftX2 + 20 * this.scaleFactor,
      this.wingY4 + 30 * this.scaleFactor,
      this.leftX3 + 80 * this.scaleFactor,
      this.wingY4
    );

    fill(this.patterncolor);

    for (var pos of this.patternpositions) {
      if (this.shape == "circle") {
        ellipse(pos.x, pos.y, pos.size, pos.size);
        ellipse(600 * this.scaleFactor - pos.x, pos.y, pos.size, pos.size);
      } else if (this.shape == "square") {
        rect(pos.x - pos.size / 2, pos.y - pos.size / 2, pos.size, pos.size);
        rect(
          600 * this.scaleFactor - pos.x - pos.size / 2,
          pos.y - pos.size / 2,
          pos.size,
          pos.size
        );
      } else if (this.shape == "triangle") {
        triangle(
          pos.x,
          pos.y - pos.size / 2,
          pos.x - pos.size / 2,
          pos.y + pos.size / 2,
          pos.x + pos.size / 2,
          pos.y + pos.size / 2
        );
        triangle(
          600 * this.scaleFactor - pos.x,
          pos.y - pos.size / 2,
          600 * this.scaleFactor - (pos.x - pos.size / 2),
          pos.y + pos.size / 2,
          600 * this.scaleFactor - (pos.x + pos.size / 2),
          pos.y + pos.size / 2
        );
      }
    }

    pop();
  }
}
