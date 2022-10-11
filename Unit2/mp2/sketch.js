let state;
let textPosX;
let textPosY;
let door;
let arrow;
let mic;
let vol = 0;

function setup() {
  createCanvas(1080, 800);
  state = 0;
  textSize(25);
  textAlign(CENTER);
  textPosX = width / 2;
  textPosY = height - 100;
  door = loadImage("assets/door.png");
  arrow = loadImage("assets/arrow.png");
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
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
      text("who goes there?", textPosX, textPosY);
      fill("black");
      image(arrow, 50, 50, 50, 50);
      //wrong room encounter, go back
      break;
    case 2:
      background(92, 22, 28);
      text("where are you running?", textPosX, textPosY);
      fill("black");
      iamge(arrow, 50, 50, 50, 50);
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
      background(220);
      text("are you supposed to be in here?", textPosX, textPosY);
      fill("black");
      image(arrow, 50, 50, 50, 50);
      image(door, 450, 200, 200, 300);
      image(door, 800, 200, 200, 300);
      //wrong room encounter, ambient music plays
      break;
    case 5:
      background(220);
      text("you expected to find anything out there?", textPosX, textPosY);
      fill("black");
      image(arrow, 50, 50, 50, 50);
      image(door, 100, 200, 200, 300);
      //wrong room encounter, secret button leads to true ending
      break;
    case 6:
      background(220);
      text("this door needs to be scared to open", textPosX, textPosY);
      fill("black");
      image(arrow, 50, 50, 50, 50);
      image(door, 450, 200, 200, 300);
      if (vol > 0.1 && state == 6) {
      state = 7
  }
       vol = mic.getLevel(); // returned level is between 0 and 1

  // text on the screen for debugging
  textSize(18);
  text(
    "Click the screen first to give\npermission for mic input.\nMy volume is " +
      vol.toFixed(3),
    200,
    200
  );
      //self expanitory
      //have graphic to indicate the player to do something other than click on an object
      break;
    case 7:
      background(220);
      fill("orange");
      text(
        "Happy Spooky Month, this is my pumpkin Hobart!",
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
  } else if (mouseX > 100 && mouseX < 300 && mouseY > 200 && mouseY < 500 && state == 0) {
    state = 1;
    print('entering state 1');
  } else if (mouseX > 450 && mouseX < 650 && mouseY > 200 && mouseY < 500 && state == 0) {
    state = 2;
    print('entering state 2');
  } else if (mouseX > 800 && mouseX < 1000 && mouseY > 200 && mouseY < 500 && state == 0) {
    state = 3;
    print('entering state 3');
  } else if (mouseX > 450 && mouseX < 650 && mouseY > 200 && mouseY < 500 && state == 3) {
    state = 4;
    print('entering state 4');
  } else if (mouseX > 450 && mouseX < 650 && mouseY > 200 && mouseY < 500 && state == 4) {
    state = 5;
    print('entering state 5');
  } else if (mouseX > 100 && mouseX < 300 && mouseY > 200 && mouseY < 500 && state == 5) {
    state = 4;
    print('entering state 1');
  } else if (mouseX > 800 && mouseX < 1000 && mouseY > 200 && mouseY < 500 && state == 4) {
    state = 6;
    print('entering state 6');
  }
  if (state > 7) state = 0;
  print(mouseX, ",", mouseY);
  //debug feature to test
}

function touchStarted() {
  getAudioContext().resume();
}
