let state;
let textPosX;
let textPosY;
let door;
let arrow;
let hobart, lamp, basement, burbank;
let mic;
let vol = 0;
let mainFont;
let secFont;
let mus1, mus2, mus3, mus4, mus5, mus6, mus7 ;

function preload() {
  mus1 = loadSound("assets/music/mus1.mp3");
  mus2 = loadSound("assets/music/mus2.mp3");
  mus3 = loadSound("assets/music/mus3.mp3");
  mus4 = loadSound("assets/music/mus4.wav");
  mus5 = loadSound("assets/music/mus5.mp3");
  mus6 = loadSound("assets/music/mus6.wav");
  mus7 = loadSound("assets/music/mus7.wav");
}

function setup() {
  createCanvas(1080, 800);
  state = 0;
  textSize(25);
  textAlign(CENTER);
  textPosX = width / 2;
  textPosY = height - 100;
  door = loadImage("assets/door.png");
  arrow = loadImage("assets/arrow.png");
  hobart = loadImage("assets/hobart.jpg");
  lamp = loadImage("assets/lamp.JPG");
  basement = loadImage("assets/basement.JPG");
  burbank = loadImage("assets/burbank.JPG");
  mic = new p5.AudioIn();
  mic.start();
  mainFont = loadFont("assets/fonts/BOD_B.TTF");
  secFont = loadFont("assets/fonts/BAUHS93.TTF");
  textFont(mainFont);
}
function draw() {

  switch (state) {
    case 0:
      background(56, 56, 56);
      fill("black");
      text("you are alone, find a way out soon.", textPosX, textPosY);
      image(arrow, 50, 50, 50, 50);

      image(door, 100, 200, 200, 300);
      image(door, 450, 200, 200, 300);
      image(door, 800, 200, 200, 300);

      //opening screen, multiple doors on screen, clicking opens door
      break;
    case 1:
      background(92, 62, 22);
      image(basement, 0, 0, width, height);
      text("who goes there?", textPosX, textPosY);
      fill("black");
      image(arrow, 50, 50, 50, 50);
      //wrong room encounter, go back
      break;
    case 2:
      background(92, 22, 28);
      image(lamp, 0, 0, width, height);
      text("where are you running?", textPosX, textPosY);
      fill("black");
      image(arrow, 50, 50, 50, 50);
      //run, go back
      break;
    case 3:
      background(153, 145, 103);
      text("arent you supposed to be somewhere?", textPosX, textPosY);
      fill("black");
      image(arrow, 50, 50, 50, 50);
      image(door, 450, 200, 200, 300);
      //wrong room encounter
      break;
    case 4:
      background(16, 26, 43);
      fill("white");
      text("are you supposed to be in here?", textPosX, textPosY);
      fill("black");
      image(arrow, 50, 50, 50, 50);
      image(door, 450, 200, 200, 300);
      image(door, 800, 200, 200, 300);
      //wrong room encounter, ambient music plays
      break;
    case 5:
      background(220);
      image(burbank, 0, 0, width, height);
      text("you expected to find anything out there?", textPosX, textPosY);
      fill("black");
      image(arrow, 50, 50, 50, 50);
      image(door, 100, 200, 200, 300);
      //wrong room encounter, secret button leads to true ending
      break;
    case 6:
      background(1, 2, 5);
      fill(42, 42, 43);
      text("this door needs to be scared to open", textPosX, textPosY);
      fill("black");
      image(arrow, 50, 50, 50, 50);
      image(door, 450, 200, 200, 300);
      if (vol > 0.1 && state == 6) {
      state = 7
      mus6.stop();
  }
       vol = mic.getLevel(); // returned level is between 0 and 1

  //debug option (comment out this chunk)
  /*textSize(18);
  text(
    "Click the screen first to give\npermission for mic input.\nMy volume is " +
      vol.toFixed(3),
    200,
    200
  );*/
      //self expanitory
      //have graphic to indicate the player to do something other than click on an object
      break;
    case 7:
      background(56, 44, 32);
      fill("orange");
      image(hobart, 300, 200, 500, 400);
      textFont(secFont);
      text(
        "Happy Spooky Month, this is my pumpkin Hobart! Click on the Screen to hear spooky music!",
        textPosX,
        textPosY
      );
      //picture of Hobart on screen, font is spooky and orange
      //can only be accessed by special input
      break;
  }
}


function mousePressed() {
  //state++;
  if (mouseX > 50 && mouseX < 100 && mouseY > 50 && mouseY < 100) {
    state = 0;
    mus1.stop();
    mus2.stop();
    mus3.stop(); 
    mus4.stop();
    mus5.stop();
    mus6.stop();
    mus7.stop();

  } else if (mouseX > 100 && mouseX < 300 && mouseY > 200 && mouseY < 500 && state == 0) {
    state = 1;
    mus1.play();
    print('entering state 1');
  } else if (mouseX > 450 && mouseX < 650 && mouseY > 200 && mouseY < 500 && state == 0) {
    state = 2;
    mus3.play();
    print('entering state 2');
  } else if (mouseX > 800 && mouseX < 1000 && mouseY > 200 && mouseY < 500 && state == 0) {
    state = 3;
    mus2.play();
    print('entering state 3');
  } else if (mouseX > 450 && mouseX < 650 && mouseY > 200 && mouseY < 500 && state == 3) {
    state = 4;
    mus2.stop();
    mus7.play();
    print('entering state 4');
  } else if (mouseX > 450 && mouseX < 650 && mouseY > 200 && mouseY < 500 && state == 4) {
    state = 5;
    mus7.stop();
    mus4.play();
    print('entering state 5');
  } else if (mouseX > 100 && mouseX < 300 && mouseY > 200 && mouseY < 500 && state == 5) {
    state = 4;
    mus4.stop();
    mus7.play();
    print('re-entering state 4');
  } else if (mouseX > 800 && mouseX < 1000 && mouseY > 200 && mouseY < 500 && state == 4) {
    state = 6;
    mus6.play();
    mus7.stop();
    print('entering state 6');
  }

  if (state == 7) {
    mus5.play();
  }
  //if (state > 7) state = 0;
  print(mouseX, ",", mouseY);
  //debug feature to test
}

function touchStarted() {
  getAudioContext().resume();
}
