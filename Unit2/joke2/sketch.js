let state = 0 ;
let timer = 0 ;

function setup() {
  createCanvas(500, 500);
  textSize(24);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
  background("red");
  
  
  switch(state) {
    case 0: 
    background('grey');
    text('what do you get when you cross a rock star and an EDM artist?', width/2, height/2, width/2, height/2);
      break ;
    case 1:
      text('B4cks1ash/', width/2, height/2, 250, 250);
      break ;
  }

  timer++ ;
  if (timer > 4 * 60) {
    timer = 0;
    state++ ;
  }
}

function mouseReleased() {
  state++ ;
  if (state > 1) state = 0;
}

