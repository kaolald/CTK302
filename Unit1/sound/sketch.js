let memories ;

function preload() {
  memories = loadSound("assets/memories.mp3");
}

function setup() {
  createCanvas(1000, 500);
  textAlign(CENTER);
  memories.play() ;
}

function draw() {
  textSize(20);
  text("hello", width/2, 100);
  text("this song is called memories, it was one of the first songs I found", width/2, 150);
  text("this assignment was due a few days ago", width/2, height/2);
  text("sorry i interrupted andor (is it any good btw?)", width/2, 300);
}

function mouseReleased() {
  // the music was playing when the mouse was clicked, but once it started it wouldnt stop if it was clicked again
  // the print command in the else statement was not appearing in the console on my computer
  if(memories.isPlaying()) {
    memories.pause ;
  } else {
    memories.play ;
    print("music stopped");
  }

}

function touchStarted() {
  getAudioContext().resume();
}
