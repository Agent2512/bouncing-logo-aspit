var v1, angle, rectSize, img, fs

function preload() {
  img = loadImage('logo.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  rectMode(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  strokeWeight(0);
  fill(255, 0, 0);

  v1 = createVector(width / 2, height / 2);
  angle = random(26, 55);
  rectSize = 130;
  fs = false
}

function draw() {
  background(255);
  // rect(v1.x, v1.y, rectSize, rectSize);
  image(img, v1.x, v1.y, rectSize, rectSize);

  v1 = move(v1, angle);
  v1 = move(v1, angle);
  v1 = move(v1, angle);

  angle = bounce(v1, angle, rectSize);
}

function move(v, angle) {
  v.x = v.x + cos(angle);
  v.y = v.y + sin(angle);
  return v
}

function bounce(v, angle, rectSize) {
  if (v.x > width - rectSize / 2 || v.x < rectSize / 2) {
    angle = angleReflect(angle, 90);
  }
  if (v.y > height - rectSize / 2 || v.y < rectSize / 2) {
    angle = angleReflect(angle, 180);
  }

  return angle;
}

function angleReflect(incidenceAngle, surfaceAngle) {
  const a = surfaceAngle * 2 - incidenceAngle;
  return a >= 360 ? a - 360 : a < 0 ? a + 360 : a;
}

function mousePressed() {
  fullscreen(!fs)
  fs = !fs
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}