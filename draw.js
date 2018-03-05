
var superScale;
var allCircles = [];

function setup() {
  createCanvas(1000, 600);
  background(200);
  superScale = 1;
  drawThree(width/2, height/2, 200);
  // console.log(allCircles);
}

function draw() {
  background(200);
  allCircles = [];
  // superScale = superScale + 0.01;
  drawThree(width/2, height/2, 200);

}

// Oh of course, it was working as intended all along, I just forgot the  in the second call!
function drawThree(x, y, r) {

  var scale = 0.6;
  var scale2 = 0.6;
  noFill();
  ellipse(x + 2 * superScale, y + 2 * superScale, r * superScale);
  allCircles.push(ell);
  if (r > 5) {
    // Yeah, the browser is smart, won't let us do this without a base condition:
    drawThree(x + r * scale, y, r * scale2);
    // Never gets to this second call.....:
    drawThree(x + r * -scale, y, r * scale2);
  } else {
    // console.log(allCircles);
  }


}
