let state = 0 ;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
  //background(100);

  switch (state) {
    case 0:
      background("#262d2e");
      fill("whtie");
      text("whatever you do dont press it", width/2, height/2);
      break;
    case 1:
    background("#dbab4b");
    fill(0)
    text("what have you done", width/2, height/2);
      break;
    
  }
  rect(100, 100, 100, 100);
}

function mouseReleased() {
  if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200) {
    state++ ;
    if (state > 1) state = 0;
    print("state advanced");
  }
  print(mouseX, ',', mouseY)

}
