let img1, img2, img3, img4 ;

let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
  img1 = loadImage("assets/img1.jpg");
  img2 = loadImage("assets/img2.jpg");
  img3 = loadImage("assets/img3.jpg");
  img4 = loadImage("assets/img4.jpg");
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
    text("where is everyone?", 5, 22) ; 
    image(img1, 0, 50, 400, 400);
      break ;
      
      case 1: 
       text("oh... hi", 5, 22) ; 
       image(img2, 0, 50, 400, 400);
      // put a picture here
      break ;
      
      case 2:
      text("oh ok theres more now", 5, 22) ; 
      image(img3, 0, 50, 400, 400);
            // put a picture here
      break ;
      
      case 3:
     text("WHERE DID YOU ALL COME FROM", 5, 22) ; 
     image(img4, 0, 50, 400, 400);
            // put a picture here
      break ;
    
      
  }
  
}