let cars = [] ;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn one object
  //for (let i = 0 ; i < 20 ; i++) {
    //  cars.push(new Car());
  //}
  noStroke(); 
}

function draw() {
  background(100);
  cars.push(new Car());
  
  /*for (let i = 0 ; i < cars.length ; i++) {
  cars[i].display();
  cars[i].move();
    if (cars[i].a <= 0) {
      cars.splice(i, 1) ;
    }
  }*/
if (keyIsDown(SHIFT)) {
    for (let i = 0; i < cars.length; i++) {
      cars[i].display();
      cars[i].move();
      if (cars[i].a <= 0) {
      cars.splice(i, 1) ;
    }
    }
}


  
}


  
class Car {

  // constructor
  constructor() {
    this.pos = createVector(width/2, windowHeight);
    this.vel = createVector(random(-0.8, 0.8), random(-10, -3)); 
    this.b = random(255) ;
    this.a = random(255) ;

    
    // initialize your attributes here
    
  }

  // methods

  display() {
    fill(15, 15, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, 20);
  }

  move() {
    this.pos.add(this.vel) ;
    this.a = this.a - 3 ;
  }
  
}