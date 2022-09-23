let state = 0 ;
let timer = 0 ;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  switch(state){
    case 0:
      timer++ ;
      text('every end of a time is another begun', 100, 100);
      if (timer > 3*60){
        timer = 0;
        state = 1;
      }
      break;
    case 1:
      background('pink');
      timer++ ;
      fill('black');
      text("there was nothing to fear nothing to doubt", 100, 100);
      if (timer > 7*60){
        timer = 0;
        state = 2;
      }
      break;
    case 2:
      background('lime');
      timer++ ;
      fill('black');
      text("go little rockstar", 100, 100)
      if (timer > 4*60){
        timer = 0;
        state = 0;
      }
      break;
  }
}