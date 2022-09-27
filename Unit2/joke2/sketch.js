let state = 0 ;
let timer = 0 ;

function setup() {
  createCanvas(500, 500);
  textSize(24);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
  background("red");
  
  
  switch(state) {
    case 0: 
    background('grey');
    text('they call me the PLACEHOLDER TEXT', width/2, height/2);
      break ;
    case 1:
      text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Diam vel quam elementum pulvinar etiam non quam lacus. Ultrices sagittis orci a scelerisque. Nec feugiat nisl pretium fusce id velit. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Eget aliquet nibh praesent tristique magna sit. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Egestas maecenas pharetra convallis posuere morbi. Vitae tortor condimentum lacinia quis vel eros donec ac. Id diam maecenas ultricies mi eget mauris pharetra et.', width/2, height/2, 250, 250)
      break ;
    case 2:

      break ;
  }

  timer++ ;
  if (timer > 4 * 60) {
    timer = 0;
    state++ ;
  }
}

function mouseReleased() {
  state++ ;
  if (state > 1) state = 0;
}

