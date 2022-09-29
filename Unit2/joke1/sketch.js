let state = 0 ;

function setup() {
  createCanvas(500, 500);
  textSize(24);
  textAlign(CENTER);
}

function draw() {
  background("red");
  
  
  switch(state) {
    case 0: 
    background('grey');
    text('they call me the PLACEHOLDER TEXT', width/2, height/2);
      break ;
    case 1:
      text('BOTTOM TEXT', width/2, height - 50);
      text('TOP TEXT', width/2, 50);
      break ;
    case 2:

      break ;
  }
}

function mouseReleased() {
  state++ ;
  if (state > 1) state = 0;
}

