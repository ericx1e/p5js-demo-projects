let groundHeight = 300; //pixels from the bottom of the screen
let playerSize = 100;
let playerY;
let ySpeed = 0;
let score = 0;

//keep track of three obstacles
let ob1x;
let ob2x;
let ob3x;

let obW = 50; //obstacle width
let obH = 50; //obstacle height
let obSpeed = 9; //obstacle speed

function setup() {
    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
    playerY = height - groundHeight - playerSize;
    ob1x = width;
    ob2x = 1.33 * width + random(-100, 100); //we can update objects out of the canvas' bounds, we just can't see them
    ob3x = 1.66 * width + random(-100, 100);
}

function draw() {
    background(255);
    //Ground
    noStroke();
    fill(51);
    rect(0, height - groundHeight, width, groundHeight);

    //Display score
    fill(0);
    textSize(50);
    text("Score: " + score, 50, 70);

    //Draw player
    fill(255, 150, 100);
    rect(100, playerY, playerSize, playerSize);

    //Update player position
    playerY += ySpeed;
    if (playerY + playerSize - ySpeed >= height - groundHeight) {
        playerY -= ySpeed; //if after we move the player its in the ground, undo the movement
    }
    ySpeed += 0.5;

    //Draw obstacles
    fill(255, 100, 100);
    rect(ob1x, height - groundHeight - obH, obW, obH);
    rect(ob2x, height - groundHeight - obH, obW, obH);
    rect(ob3x, height - groundHeight - obH, obW, obH);

    //Update obstacle positions
    ob1x -= obSpeed;
    ob2x -= obSpeed;
    ob3x -= obSpeed;

    if (ob1x < -obW) { //when an obstacle leaves the screen, reset its position to the right of the screen and score a point
        score++;
        ob1x = width + random(0, 200);
    }
    if (ob2x < -obW) {
        score++;
        ob2x = width + random(0, 200);
    }
    if (ob3x < -obW) {
        score++;
        ob3x = width + random(0, 200);
    }

    //Check player collision with obstacles
    //Next line is scary, but it's just three of the same thing to check if any of the obstacles are touching the player
    if(isTouching(100, playerY, playerSize, playerSize, ob1x, height - groundHeight - obH, obW, obH)||isTouching(100, playerY, playerSize, playerSize, ob2x, height - groundHeight - obH, obW, obH)||isTouching(100, playerY, playerSize, playerSize, ob3x, height - groundHeight - obH, obW, obH)) {
        noStroke();
        fill(0); //black
        textSize(100);
        textAlign(CENTER, CENTER);
        text("GAME OVER", width/2, height/4);
        noLoop();
    }
}

function keyPressed() {
    if (playerY + playerSize >= height - groundHeight) { //the player should only be able to jump when touching the ground
        ySpeed = -12; //remember, negative is up in this case
        playerY += ySpeed;
    }
}

function isTouching(x1, y1, w1, h1, x2, y2, w2, h2) {
    return x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 &&  y1 + h1 > y2;
}
//hello