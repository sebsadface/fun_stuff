var bottomCenter, bottomRadii, topq;
const fps = 30;
function setup() {
  createCanvas(400, 600);
  frameRate(fps);
  var margin = 30;
  bottomRadii = { x: width * 0.5 - margin, y: height * 0.1 };
  bottomCenter = { x: width * 0.5, y: height - margin - bottomRadii.y };
  topq = { x: width * 0.5, y: margin };
  background(0);
}
var ballCount = 0;
function draw() {
  var boxSize = max(2000 / frameCount, 5);
  colorMode(HSB);
  noStroke();
  rectMode(CENTER);
  background(0, 0.02);
  for (var i = 0; i < 100; i++) {
    ballCount += 1;
    fill((ballCount * 120 + (frameCount / fps) * 20) % 360, 100, 100);
    var theta = Math.PI * random();
    var bx = bottomCenter.x + bottomRadii.x * cos(theta);
    var by = bottomCenter.y + bottomRadii.y * sin(theta);
    var perc = 1 - random() ** 2;
    let x = lerp(topq.x, bx, perc);
    let y = lerp(topq.y, by, perc);
    x = Math.round(x / boxSize) * boxSize;
    y = Math.round(y / boxSize) * boxSize;
    rect(x, y, boxSize - 2);
  }
}
