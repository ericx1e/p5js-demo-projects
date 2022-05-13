//GLOBAL VARIABLES (accessable everywhere in our project)
let paddle1X;
let paddle2X;
let paddle1Y;
let paddle2Y;
let paddleW = 50;
let paddleH = 200;
let paddleSpeed = 15;

let ballX;
let ballY;
let ballXV;
let ballYV;
let ballSize = 50;

let wPressed = false;
let sPressed = false;
let upPressed = false;
let downPressed = false;

let p1_score = 0;
let p2_score = 0;


function setup() {
    let canvas = createCanvas(window.innerWidth, window.innerHeight); //rather than set our canvas to a set number, we can make it always fit the screen by accessing the window width and height
    canvas.position(0, 0); //create canvas actually gives us access to the canvas we created. Here, we reposition it to be in the corner of the page so it fills the whole screen
    paddle1X = width / 8;
    paddle2X = width * 7 / 8;
    paddle1Y = height/2;
    paddle2Y = height/2;

    ballX = width/2;
    ballY = height/2;
    ballXV = -8;
    ballYV = 16;
    random_direction();  

}

function draw() {
    background(51);
    fill(255);
    noStroke();
    rectMode(CENTER);
    textSize(100);
    fill(124, 158, 178);
    text(p1_score, 20, 100);
    rect(paddle1X, paddle1Y, paddleW, paddleH);
    fill(206, 236, 151);
    text(p2_score, width - 70, 100);

    rect(paddle2X, paddle2Y, paddleW, paddleH);
    fill(255)

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
    

    // player 1 on right
    // player 2 on left

    if (ballX + ballSize / 2 > width) {
        p1_score += 1; 
        console.log("Player 1:" + p1_score);
        ballX = width/2;
        ballY = height/2;  
        random_direction();  
    }

    if(ballX - ballSize / 2 < 0) {
        p2_score += 1
        console.log("Player 2:" + p2_score)
        ballX = width/2;
        ballY = height/2;  
        random_direction();  

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



// keep paddles in bounds

// side hit w/ ball


function random_direction() {
    // ball x could be neg or pos
    // ball y could neg or pos
    let choice = random(0, 2)
    print(choice)
    if (choice < 1) {
        ballXV = -ballXV 
    }
    else {
        ballXV = ballXV
    }
    choice = random(0, 2)
    if (choice < 1) {
        ballYV = -ballYV 
    }
    else {
        ballYV = ballYV
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