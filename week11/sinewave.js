let xspacing = 8;
let w;
let theta = 0.0;
let amplitude = 50.0;
let period = 300.0;
let dx;
let yvalues;

function setup() {
  createCanvas(600, 400);
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  background(0);
  calcWave();
  renderWave();
}

function calcWave() {
  theta += 0.03;

  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude + cos(x * 2) * (amplitude / 2);
    x += dx;
  }
}

function renderWave() {
  noFill();
  stroke(0, 255, 200);
  strokeWeight(2);
  beginShape();
  for (let x = 0; x < yvalues.length; x++) {
    vertex(x * xspacing, height / 2 + yvalues[x]);
  }
  endShape();
}