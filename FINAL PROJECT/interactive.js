
let pacman;
let stars = [];

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("interactiveCanvas");
  angleMode(DEGREES);
  pacman = new PacMan();
  for (let i = 0; i < 10; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background(0);

  pacman.update(mouseX, mouseY);
  pacman.display();

  for (let i = stars.length - 1; i >= 0; i--) {
    stars[i].display();
    if (pacman.eats(stars[i])) {
      stars.splice(i, 1);
      stars.push(new Star());
    }
  }
}

class PacMan {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.r = 30;
  }

  update(mx, my) {
    this.x = lerp(this.x, mx, 0.1);
    this.y = lerp(this.y, my, 0.1);
  }

  display() {
    let angle = atan2(mouseY - this.y, mouseX - this.x);
    push();
    translate(this.x, this.y);
    rotate(angle);
    fill(255, 255, 0);
    arc(0, 0, this.r * 2, this.r * 2, 30, 330, PIE);
    pop();
  }

  eats(star) {
    let d = dist(this.x, this.y, star.x, star.y);
    return d < this.r;
  }
}

class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.r = 8;
  }

  display() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }
}
