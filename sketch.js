function setup() {
createCanvas(710, 400);
  background(0);
  strokeWeight(10);
  colorMode(RGB);
}

function mouseDragged() {
 
  let lineHue = mouseX - mouseY;
  stroke(lineHue, 190, 90);
  line(pmouseX, pmouseY, mouseX, mouseY);
}