
function setup() {
  createCanvas(1000, 600);
  background(200);

  drawThree(width/2, height/2, 200);
}

function draw() {

}

// Oh of course, it was working as intended all along, I just forgot the  in the second call!
function drawThree(x, y, r) {
  var scale = 0.6;
  var scale2 = 0.6;
  noFill();
  ellipse(x, y, r);

  if (r > 2) {
    // Yeah, the browser is smart, won't let us do this without a base condition:
    drawThree(x + r * scale, y, r * scale2);
    // Never gets to this second call.....:
    drawThree(x + r * -scale, y, r * scale2);
  }


}
