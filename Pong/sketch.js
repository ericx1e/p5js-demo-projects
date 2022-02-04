//GLOBAL VARIABLES (accessable everywhere in our project)
let paddle1X;
let paddle2X;
let paddle1Y;
let paddle2Y;
let paddleW = 50;
let paddleH = 200;
let paddleSpeed = 5;

let ballX;
let ballY;
let ballXV;
let ballYV;
let ballSize = 50;

let wPressed = false;
let sPressed = false;
let upPressed = false;
let downPressed = false;


function setup() {
    let canvas = createCanvas(window.innerWidth, window.innerHeight); //rather than set our canvas to a set number, we can make it always fit the screen by accessing the window width and height
    canvas.position(0, 0); //create canvas actually gives us access to the canvas we created. Here, we reposition it to be in the corner of the page so it fills the whole screen
    paddle1X = width / 8;
    paddle2X = width * 7 / 8;
    paddle1Y = height/2;
    paddle2Y = height/2;

    ballX = width/2;
    ballY = height/2;
    ballXV = -2;
    ballYV = 4;
}

function draw() {
    background(51);
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(paddle1X, paddle1Y, paddleW, paddleH);
    rect(paddle2X, paddle2Y, paddleW, paddleH);

    ellipse(ballX, ballY, ballSize);

    ballX += ballXV;
    ballY += ballYV;
    
    if(ballY + ballSize / 2 > height || ballY - ballSize / 2 < 0) {
        ballYV = -ballYV;
    }

    if(circleRect(ballX, ballY, ballSize/2, paddle1X - paddleW/2, paddle1Y - paddleH/2, paddleW, paddleH)) {
        ballXV = -ballXV;
    }

    if(circleRect(ballX, ballY, ballSize/2, paddle2X - paddleW/2, paddle2Y - paddleH/2, paddleW, paddleH)) {
        ballXV = -ballXV;
    }
    
    
    //Paddle controls
    if(wPressed) {
        paddle1Y -= paddleSpeed;
    }
    if(sPressed) {
        paddle1Y += paddleSpeed;
    }
    if(upPressed) {
        paddle2Y -= paddleSpeed;
    }
    if(downPressed) {
        paddle2Y += paddleSpeed;
    }
}

function keyPressed() {
    if(key == 'w') {
        wPressed = true;
    }
    if(key == 's') {
        sPressed = true;
    }
    if(keyCode == UP_ARROW) {
        upPressed = true;
    }
    if(keyCode == DOWN_ARROW) {
        downPressed = true;
    }
}

function keyReleased() {
    if(key == 'w') {
        wPressed = false;
    }
    if(key == 's') {
        sPressed = false;
    }
    if(keyCode == UP_ARROW) {
        upPressed = false;
    }
    if(keyCode == DOWN_ARROW) {
        downPressed = false;
    }
}



// CIRCLE/RECTANGLE collision check
function circleRect(cx, cy, radius, rx, ry, rw, rh) {

    // temporary variables to set edges for testing
    let testX = cx;
    let testY = cy;
  
    // which edge is closest?
    if (cx < rx)         testX = rx;      // test left edge
    else if (cx > rx+rw) testX = rx+rw;   // right edge
    if (cy < ry)         testY = ry;      // top edge
    else if (cy > ry+rh) testY = ry+rh;   // bottom edge
  
    // get distance from closest edges
    let distX = cx-testX;
    let distY = cy-testY;
    let distance = sqrt( (distX*distX) + (distY*distY) );
  
    // if the distance is less than the radius, collision!
    if (distance <= radius) {
      return true;
    }
    return false;
  }