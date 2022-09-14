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
  
  fill(126, 182, 207);
  square(random(255), random(255), 20, 5, 15);
  square(random(300), random(300), 20, 5, 15);

  fill("grey");
  circle(200, 200, 100);
  
  fill("white");
  rect(172, 250, 55, 150);
  
  fill("white");
  rect(226, 280, 50, 20);
  
  fill(36, 36, 31);
  rect(267, 100, 10, 200);
  arc(267, 100, 300, 100, 85, 0);
  
  if (mouseIsPressed) {
    fill("red");
    rect(300, 112, 20, 100);
    ellipseMode(CENTER);
    ellipse(310, 230, 20);
    
    fill("yellow");
    beginShape();
    vertex(13, 0);
    vertex(15, 50);
    vertex(37, 88);
    vertex(32, 187);
    vertex(51, 350);
    vertex(80, 223);
    vertex(85, 147);
    vertex(81, 76);
    vertex(53, 0);
    //vertex(-35, 0);
    endShape();  }
  
  fill("silver");
  if (mouseIsPressed) {
    fill(lerpColor(startColor, newColor, amt));
  }
  amt += 0.05;
  if(amt >= 1){
    amt = 0.0;
    startColor = newColor;
    newColor = color(random(255),random(255),random(255));
  }
  quad(65, 135, 185, 100,
    85, 165, 155, 66); 
}
function mouseReleased() {
  print(mouseX + ", " + mouseY) ;
}