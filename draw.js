
var can;
var s = 1;
var colors = ['red', 'orange', 'yellow', 'forestgreen', 'blue', 'violet', 'indigo'];
var circleColors = {};
var colorNo = 0;

// Change 2 things: delete over-sized bodies to help with memory, and make tiny ones a bit thicker. And mess with spacing a bit.

function setup() {
  can = createCanvas(1000, 600);
  background(200);
  superScale = 1;
}

function draw() {
  background(200);

  // when r is 50, we want r = 0.5, r is 25, we want 0.25, r is 10, we want 0.10
  // Nice, we can power up to mitigate the severe slowing problem:
  // Oh crazy, passing 3 as the power skews the sketch:
  can.scale(Math.pow(s, 2), Math.pow(s, 2));
  // adjust speed of zoom:
  s += 0.010;
  drawThree(width/2, height/2, 200);
}


// Only call this if the circle is on screen, i.e. if center + radius is > minWid (0) and center - radius < wid, and same for height.
function drawThree(x, y, r) {
  var color;

  // pretty crazy that this angle just happened to work, i don't understand the logic at all:
  rotate(PI/6);
  var scale = 0.6;
  // the higher this gets, the more complex, because circles don't die as fast:
  // OH BOY WE HIT IT:
  var scale2 = 0.543458;
  // Here we can power down to make the strokeweight diminish more slowly as we zoom in to smaller circles:
  strokeWeight(Math.pow(r,0.5) / 20);

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

  // if (dist(x - 400, y - 300, ))
  if (r > 0.15) {
    // Yeah, the browser is smart, won't let us do this without a base condition:
    drawThree(x + r * scale, y, r * scale2);
    drawThree(x + r * -scale, y, r * scale2);
  }

}
