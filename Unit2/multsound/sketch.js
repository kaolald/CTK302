let state = -1;
let s1, s2, s3 ;

function preload() {
  s1 = loadSound("assets/mus1.mp3");
  s2 = loadSound("assets/mus2.mp3");
  s3 = loadSound("assets/mus3.mp3");
}

function setup() {
  createCanvas(800, 800);
}

function draw() {

  background(158, 240, 179);
  
  switch (state) {

    case -1:
      text("click to start", 100, 100);
      break;

    case 0:
      background(158, 235, 240);
      text("0", 100, 100);
      if (!s1.isPlaying()) {
        s1.play() ;
      }
      break;

    case 1:
      text("1", 100, 100);
      if (!s2.isPlaying()) {
        s2.play() ;
      }
      break;

    case 2:
      text("2", 100, 100);
      if (!s3.isPlaying()) {
        s3.play() ;
      }
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;
  s1.stop() ;
  s2.stop() ;
  s3.stop() ;
}

function touchStarted() {
  getAudioContext().resume();
}