let angle = 0;
let radius = 150;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background(10, 10, 30);
  fill(255, 204, 0);
  ellipse(width / 2, height / 2, 80, 80); // Central sun

  for (let i = 0; i < 6; i++) {
    let orbitRadius = radius + i * 25;
    let x = width / 2 + orbitRadius * cos(angle + i * 60);
    let y = height / 2 + orbitRadius * sin(angle + i * 60);
    fill(100 + i * 20, 200 - i * 30, 255 - i * 40);
    ellipse(x, y, 30 - i, 30 - i);
  }

  angle += 0.5;
}