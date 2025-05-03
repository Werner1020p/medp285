function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(20);

  let offset = map(mouseX, 0, width, -50, 50);
  let scaleAmt = map(mouseY, 0, height, 0.5, 2);

  push();
  translate(width / 2, height / 2);
  rotate(radians(offset));
  scale(scaleAmt);
  fill(200, 100, 255, 150);
  rect(0, 0, 150, 150);
  pop();
}