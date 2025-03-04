class Player {
  constructor(_img, _x, _y, _w, _h) {
    this.x = _x;
    this.y = _y;
    this.width = _w;
    this.height = _h;
    this.speed = 10;
    this.image = _img;
    this.dir = 1;
    this.keys = {
      ArrowRight: false,
      ArrowLeft: false,
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

    this.enable();
  }

  enable() {
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);
  }

  handleKeyDown(event) {
    if (this.keys.hasOwnProperty(event.key)) {
      this.keys[event.key] = true;
      event.preventDefault();
    }
  }

  handleKeyUp(event) {
    if (this.keys.hasOwnProperty(event.key)) {
      this.keys[event.key] = false;
      event.preventDefault();
    }
  }

  update() {
    if (this.keys.ArrowRight) {
      this.x += this.speed;
      this.dir = 1;
    }
    if (this.keys.ArrowLeft) {
      this.x -= this.speed;
      this.dir = 1;
    }

    // Constrain player position within the screen
    this.x = constrain(this.x, 0, width - this.width);
  }

  display() {
    this.update();
    
    push();
    translate(this.x, this.y,);
    scale(this.dir,1);
    image(this.image, 0,0,  this.width, this.height);
    pop();
  }
}
