
var can;
var s = 1;
var colors = ['red', 'orange', 'yellow', 'forestgreen', 'blue', 'violet', 'indigo'];
var circleColors = {};
var colorNo = 0;

function setup() {
  can = createCanvas(1000, 600);
  background(200);
  superScale = 1;
}

function draw() {
  background(200);

  // when r is 50, we want r = 0.5, r is 25, we want 0.25, r is 10, we want 0.10
  can.scale(s, s);
  // adjust speed of zoom:
  s += 0.007;
  drawThree(width/2, height/2, 200);
}

function drawThree(x, y, r) {
  var color;

  // pretty crazy that this angle just happened to work, i don't understand the logic at all:
  rotate(PI/6);
  var scale = 0.6;
  var scale2 = 0.6;
  strokeWeight(r / 100);

  if (circleColors[r]) {
    color = circleColors[r];
  } else {
    color = colors[colorNo];
    circleColors[r] = color;
    colorNo = (colorNo + 1) % 7;
  }
  // console.log(color);

  // var colorNo = Math.floor(r) % 7;
  stroke(color);
  noFill();
  ellipse(x - 400, y - 300, r);
  rotate(-PI/6);

  if (r > 2) {
    // Yeah, the browser is smart, won't let us do this without a base condition:
    drawThree(x + r * scale, y, r * scale2);
    drawThree(x + r * -scale, y, r * scale2);
  }

}
