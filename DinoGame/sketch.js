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
let obH = 100; //obstacle height
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
}

function keyPressed() {
    if (playerY + playerSize >= height - groundHeight) { //the player should only be able to jump when touching the ground
        ySpeed = -15; //remember, negative is up in this case
        playerY += ySpeed;
    }
}