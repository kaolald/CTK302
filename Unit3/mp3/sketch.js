let fires = [];
let bullets = [];
let frogPos;
let sens;
let state = 0 ;
let timer = 0 ;
let BG, title, win, lose, flame, hose, water ;
let f1 ;
let mus1, mus2, sfx1 ;
let numFires = 5 ;

function preload() {
  mus1 = loadSound("assets/audio/mus1.wav");
  mus2 = loadSound("assets/audio/mus2.mp3");
  sfx1 = loadSound("assets/audio/fire.mp3");
}

function setup() {
  createCanvas(1280, 1024);
  rectMode(CENTER);
  imageMode(CENTER);
  textAlign(CENTER);

  // Spawn objects
  BG = loadImage("assets/mp3-background.png");
  title = loadImage("assets/title-screen.png");
  win = loadImage("assets/win.png");
  lose = loadImage("assets/lose.png");
  flame = loadImage("assets/flame.png");
  hose = loadImage("assets/hose.png");
  f1 = loadFont("assets/fonts/TCCEB.TTF");
  water = loadImage("assets/water.png");
  for (let i = 0; i < numFires; i++) {
    fires.push(new Fire());
  }

  // initialize the "frog position" vector
  frogPos = createVector(width / 2, height - 80);
  sens = 3 ;
}

function draw() {
  background("white");
  //game();
  
  switch(state) {
    case 0: //main menu
      image(title, width/2, height/2, width, height);
      break ;
    case 1: //game
      image(BG, width/2, height/2, width, height);
      game();
      timer++ ;
      if (timer > 60*60) {
        timer = 0;
        mus2.play();
        state = 3;
      }
      // if (fires == 0) {
      //   state = 2 ; 
      // }
      break;
    case 2: //win screen
      background(0);
      image(win, width/2, height/2, width, height);
      sfx1.stop();
      //text("The Fire is out and the Theater is Saved!", width/2, height/2);
      break ;
    case 3: //lose screen
      background(0);
      sfx1.stop();
      image(lose, width/2, height/2, width, height);
      textFont(f1);
      textSize(50);
      fill(255);
      text("The Theater has burned to the ground. Thankfully everyone got out in time.", width/2, height/2, width, height/2);
      break ;
    
  }

}
function mouseReleased() {
  switch(state) {
    case 0: //menu
      state = 1 ;
      sfx1.play();
      break;
    case 2: //win
      numFires += 3 ;
      state = 0
      sfx1.stop();
      mus1.stop();
      respawnMaster();
      break;
    case 3: //lose
      numFires = 5 ;
      state = 0
      respawnMaster();
      break;
  }

}

// function audioControl() {
//   if (state == 1) {
//     sfx1.play();
//   } else if (state == 2) {
//     mus1.play();
//   } else if (state == 3) {
//     mus2.play();
//   }
// }
function game() {
  
  // operate on every car
  for (let i = 0; i < fires.length; i++) {
    fires[i].display();
    fires[i].move();
    if (fires[i].pos.dist(frogPos) < 30) {
      fires.splice(i, 1);
    }
  }
  if (fires.length == 0) {
    state = 2;
    sfx1.stop();
    mus1.play();
  }

  // add a "frog"
  image(hose, frogPos.x, frogPos.y, 104, 146);
  checkForKeys();

  if (keyIsDown(SHIFT)){
    bullets.push(new Bullet());
    for (let i = 0; i < bullets.length; i++) {
      bullets[i].display();
      bullets[i].move();
        if (bullets[i].a <= 0) {
          bullets[i].dead = true ;
      } 
        for (let j = 0; j < fires.length; j++) {
          if ((bullets[i].pos.dist(fires[j].pos) < 15)) {
            fires[j].dead = true;
          }
        }
    }
    for (let j = 0; j < fires.length; j++) {
      if (fires[j].dead == true) fires.splice(j, 1);
    }
    for (let j = 0; j < bullets.length; j++) {
      if (bullets[j].dead == true) bullets.splice(j, 1);
    }
  } else (bullets = []);
 
}

function respawnMaster() {
  
  fires = [] ;
  
  for (let i = 0; i < numFires; i++) {
    fires.push(new Fire());
  }
}


function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= sens;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += sens;
  if (keyIsDown(UP_ARROW)) {
    frogPos.y -= sens;
  }
  if (keyIsDown(DOWN_ARROW)) frogPos.y += sens;
}

class Bullet {
  constructor() {
    this.pos = createVector(frogPos.x, frogPos.y - 70);
    this.vel = createVector(random(-0.8, 0.8), random(-10, -3)); 
    this.b = random(255) ;
    this.a = random(255) ;
    this.size = createVector(random(40, 60), random(40,60));
    this.dead = false;

  }
  display() {
    // fill(15, 15, this.b, this.a);
    // ellipse(this.pos.x, this.pos.y, 20);
    image(water, this.pos.x, this.pos.y, this.size.x, this.size.y);
  }

  move() {
    this.pos.add(this.vel) ;
    this.a = this.a - 3 ;
  }
}

class Fire {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(height/2, height - 400)); // initialize your attributes here
    this.velocity = 2;
    /*this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100);*/
    this.size = createVector(145, 200);
    this.dead = false;
  }
  // methods

  display() {
    // this can be text, images, or shapes
    //fill(this.r, this.g, this.b, this.o);
    image(flame, this.pos.x, this.pos.y, 145, 200);
  }

  move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.velocity = -3;
    if (this.pos.x < 0) this.velocity = 3;
  }
}

function touchStarted() {
  getAudioContext().resume();
}
