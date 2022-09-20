let x = 0 ;
let f1, f2, f3, f4 ;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/fonts/AGENCYB.TTF");
  f2 = loadFont("assets/fonts/BAUHS93.TTF");
  f3 = loadFont("assets/fonts/BELL.TTF");
  f4 = loadFont("assets/fonts/BASKVILL.TTF");
}

function draw() {
  background(109);
  fill("lightblue");
  textSize(50);
  textFont(f1)
  text("stay hydrated", x, 50, 250, 250);
  x += 5;
  if (x > width) {
    x = 0;
  }
}
