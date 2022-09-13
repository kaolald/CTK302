let amt, startColor, newColor;

function setup() {
  createCanvas(400, 400);
  
  startColor = color(255,255,255);
  newColor = color(random(255),random(255),random(255));
  amt = 0;
}

function draw() {
  background(220);
  
  fill("black");
  if (mouseIsPressed) {
    fill("white");
  }
  rect(0, 0, 200, 400);
  
  fill("white");
  if (mouseIsPressed) {
    fill("black");
  }
  rect(200, 0, 200, 400);
  
  fill("grey");
  circle(200, 200, 100);
  
  fill("white");
  rect(172, 250, 55, 150);
  
  fill("white");
  rect(226, 280, 50, 20);
  
  fill("silver");
  if (mouseIsPressed) {
    fill(lerpColor(startColor, newColor, amt));
  }
  amt += 0.01;
  if(amt >= 1){
    amt = 0.0;
    startColor = newColor;
    newColor = color(random(255),random(255),random(255));
  }
 quad(38, 131, 320, 100,
        130, 150, 155, 66); 
}
function mouseReleased() {
  print(mouseX + ", " + mouseY) ;
}
function mousePressed() {
  fill("white");
  rect(0, 0, 200, 400);
  
  fill("black");
  rect(200, 0, 200, 400);
 // print("the mouse is pressed")
}