
let x1 = 0 
let y1 = 0;
let x2, y2;
var redButton, greenButton
function setup() {
  createCanvas(600, 400);
  background(220);
  strokeWeight(6);
}
function draw() {
  redButton = createButton("red")
  redButton.position(50, 50)
  redButton.mousePressed(selectRed)
  greenButton = createButton("green")
  greenButton.position(100, 50)
  greenButton.mousePressed(selectGreen)

}

function selectRed(){
  stroke("red")
}
function selectGreen(){
  stroke("green")
}
function mousePressed() {
  x1 = mouseX;
  y1 = mouseY;

}
function mouseReleased() {
  x2 = mouseX;
  y2 = mouseY;
  line(x1, y1, x2, y2);
}