
function setup() {
  createCanvas(1000, 600);
  background(200);

  drawThree(width/2, height/2, 200);
}

function draw() {

}


function drawThree(x, y, r) {
  var scale = 1.2;
  noFill();
  ellipse(x, y, r);
  ellipse(x + r * scale, y, r/2);
  ellipse(x - r * scale, y, r/2);
  push();
  translate(x - r * scale, 0);
  ellipse(r * scale/2, y, r/4);
  ellipse(-r* scale/2, y, r/4);
  pop();

  if (r > 0.000000001) {
    // Yeah, the browser is smart, won't let us do this without a base condition:
    drawThree(x + r * scale, y, r/2);
    // Never gets to this second call.....:
    // drawThree(r * -scale, height/2, r/2);
  }


}
