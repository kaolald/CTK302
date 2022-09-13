let fonts = [] ;

function setup() {
  createCanvas(400, 400);
  background(220);
   fonts[0] = loadFont('assets/fonts/AGENCYB.TTF') ;
   fonts[1] = loadFont('assets/fonts/arial.ttf') ;
   fonts[2] = loadFont('assets/fonts/bahnschrift.ttf') ;
   fonts[3] = loadFont('assets/fonts/BAUHS93.ttf') ;

}

function draw() {
  //background(220);
  if (mouseIsPressed) {
  textFont(random(fonts));
  fill(0, 0, random(255));
  textSize(random(10, 20));
  text("hydro homies", mouseX, mouseY)
  }
}