let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background("green");

      for (let j = 0; j <= height; j += 25) {
        for (let i = 0; i <= width; i += 25) {
          fill(random(243), 181, 63);
          rect(i, j, 20, 20, random(12), random(2));
        }
      }
      fill("white");
      text("in state 0 (illinois)", 100, 100);
      break;

    case 1:
      background(97, 0, 0);
      for (let j = 0; j <= height; j += 10) {
        for (let i = 0; i <= width; i += 10) {
          fill(random(255), 0, 0);
          rect(i, j, 20, 20, 12, 2);
          fill(21, 21, 21);
          rect(j, j, random(100, -100), 20);
        }
      }
      rotate(0);
      fill("white");
      text("in state 1 (new jersey)", 100, 100);
      break;

    case 2:
      background("white");
      for (let i = 0; i <= width; i += 25)
        for (let j = 0; j <= height; j += 25) {
          {
            fill(219, 195, 81);
            rect(i, i, 20, 400);
            fill(34, 32, 150);
            rect(j, j, 20, -400);
          }
        }
      fill("white");
      text("in state 2 (ohio)", 100, 100);
      break;
    case 3:
      background("#FFB218");
      for (let j = 0; j <= height; j += 25) {
        for (let i = 0; i <= width; i += 5) {
          fill(random(50, 100), 0, random(245, 255));
          rect(i, j, 20, 20);
          fill(225, 255, 12);
          rect(j, j, 400, -20);
        }
      }
      fill("white");
      text("in state 3 (kentucky)", 50, 300);
      break;

    case 4:
      background(0);
      for (let j = 0; j <= height; j += 25) {
        for (let i = 0; i <= width; i += 5) {
          for (let k = 0; k <= height; k += 15) {
            fill(58, 58, 58);
            rect(i, i, -400, 20);
            fill(214, 210, 140);
            rect(j, j, 400, -20);
            fill(21, 21, 21);
            rect(k, k, random(-200, 200), 5);
          }
        }
      }
      fill("white");
      text("in state 4 (new york)", 100, 100);
      break;
  }
}

function mouseReleased() {
  state++;
  print("state changed");
  if (state > 4) {
    state = 0;
  }
}
