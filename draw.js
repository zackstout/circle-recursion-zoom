
var superScale;
var allCircles = [];
var setupvar = true;
var can;
var s = 1;

function setup() {
  can = createCanvas(1000, 600);
  background(200);
  superScale = 1;
  // drawThree(width/2, height/2, 200);
  // console.log(allCircles);
}

function draw() {
  background(200);
  setupvar = false;
  allCircles = [];

  can.scale(s, s);
  s += 0.001;
  // superScale = superScale + 0.01;

  // rotate(PI/3);
  drawThree(width/2, height/2, 200);
  // rotate(-PI/3);

}

// Oh of course, it was working as intended all along, I just forgot the  in the second call!
function drawThree(x, y, r) {

  rotate(PI/6);
  var scale = 0.6;
  var scale2 = 0.6;
  noFill();
  ellipse(x - 400, y - 300, r);
  rotate(-PI/6);
  var ell = {
    xPos: x,
    yPos: y,
    rad: r
  };
  allCircles.push(ell);
  if (r > 5) {
    // Yeah, the browser is smart, won't let us do this without a base condition:
    drawThree(x + r * scale, y, r * scale2);
    // Never gets to this second call.....:
    drawThree(x + r * -scale, y, r * scale2);
  } else if (setupvar) {
    console.log(allCircles);
    setupvar = false;
  }


}
