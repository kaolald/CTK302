let fires = [];
let bullets = [];
let frogPos;
let sens;
let state = 0 ;
let timer = 0 ;

function setup() {
  createCanvas(1280, 1024);
  rectMode(CENTER);
  imageMode(CENTER);

  // Spawn objects

  for (let i = 0; i < 5; i++) {
    fires.push(new Fire());
  }

  // initialize the "frog position" vector
  frogPos = createVector(width / 2, height - 80);
  sens = 5 ;
}

function draw() {
  background("white");
  //game();
  
  switch(state) {
    case 0: //menu
      background(0);
      text("Fire Fighter Deluxe Pro DX LE", width/2, height/2);
      break ;
    case 1: //game
      game();
      timer++ ;
      if (timer > 10*60) {
        timer = 0;
        state = 3;
      }
      break;
    case 2: //menu
      background(0);
      text("The Fire is out and the Theater is Saved!", width/2, height/2);
      break ;
    case 3: //menu
      background(0);
      fill(255);
      text("The Theater has burned to the ground, thankfully everyone got out in time.", width/2, height/2);
      break ;
    
  }

  if (keyIsDown(SHIFT)) {
    for (let i = 0; i < bullets.length; i++) {
      bullet[i].display();
      bullet[i].move();
        if (bullets[i].a <= 0) {
          bullets.splice(i, 1) ;
      }
    }
  }
}
function mouseReleased() {
  switch(state) {
    case 0: //menu
      state = 1 ;
      break;
    case 2: //win
      state = 0
      respawnMaster();
      break;
    case 3: //lose
      state = 0
      respawnMaster();
      break;
  }
}


function game() {
  
  // operate on every car
  for (let i = 0; i < fires.length; i++) {
    fires[i].display();
    //fires[i].move();
    if (fires[i].pos.dist(frogPos) < 30) {
      fires.splice(i, 1);
    }
  if (fires.length == 0) {
    state = 2;
  }
  }

  // add a "frog"
  fill("green");
  ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();
}

function respawnMaster() {
  
  fires = [] ;
  
  for (let i = 0; i < 5; i++) {
    fires.push(new Fire());
  }
}


function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= sens;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += sens;
  if (keyIsDown(UP_ARROW)) frogPos.y -= sens;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += sens;
}

class Fire {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(15, 900)); // initialize your attributes here
    this.velocity = createVector(random(-3, 3), random(1, 5));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100);
    this.size = random(48, 128);
  }
  // methods

  display() {
    // this can be text, images, or shapes
    fill(this.r, this.g, this.b, this.o);
    rect(this.pos.x, this.pos.y, this.size, 25);
  }

  /*move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }*/
}

class bullet {
  constructor() {
    this.pos = frogPos;
    this.vel = createVector(random(-0.8, 0.8), random(-10, -3)); 
    this.b = random(255) ;
    this.a = random(255) ;
  }
  display() {
    fill(15, 15, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, 20);
  }

  move() {
    this.pos.add(this.vel) ;
    this.a = this.a - 3 ;
  }
}