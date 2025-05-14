let x = 200;
let y = 200;
let xspeed = 3;
let yspeed = 3;
let colors = ['#FF00FF', '#00FFFF', '#39FF14', '#F72585'];
let currentColor = 0;

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent('gameCanvas');
  background(0);
}

function draw() {
  background(0);
  fill(colors[currentColor]);
  ellipse(x, y, 50, 50);
  
  x += xspeed;
  y += yspeed;
  
  if (x > width || x < 0) xspeed *= -1;
  if (y > height || y < 0) yspeed *= -1;
}

function mousePressed() {
  let d = dist(mouseX, mouseY, x, y);
  if (d < 25) {
    currentColor = (currentColor + 1) % colors.length;
  }
}