let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
    text("where is everyone?", 5, 22) ; 
      break ;
      
      case 1: 
       text("oh... hi", 5, 22) ; 
      // put a picture here
      break ;
      
      case 2:
      text("oh ok theres two now", 5, 22) ; 
            // put a picture here
      break ;
      
      case 3:
     text("WHERE DID YOU ALL COME FROM", 5, 22) ; 
            // put a picture here
      break ;
    
      
  }
  
}