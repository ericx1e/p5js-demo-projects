let cloudX = 0;

function setup() { //code in the setup function runs once when the pages loads
    createCanvas(800, 600); //creates a 800 pixel by 600 pixel canvas where we can 
}

function draw() { //runs repeatedly (60 times a second) while the page is open
    //        red green blue
    background(170, 190, 255); //create a blue backdrop for our cnavas
    noStroke(); //remove outline of shapes after this line
    fill(100, 200, 100); //fill color green
    rect(0, 400, 800, 200); //draw a with a top-left corner at 0, 400 that is 800 long and 200 tall. Is filled green because of previous line
    fill(255, 220, 50); //change our fill color to yellow
    rect(200, 200, 400, 200); //house body
    fill(255, 100, 100);
    triangle(100, 200, 400, 100, 700, 200); //roof
    fill(51); //giving fill only one input is the same as fill(51, 51, 51); all these colors are on the gray-scale
    rect(450, 300, 70, 100); //door
    fill(200, 180, 0);
    stroke(120, 100, 0); //brings the stroke (outline) of the shapes back and gives them a brown color
    strokeWeight(10); //makes the stroke 10 pixels thick
    rect(275, 250, 75, 75); //window

    //CLOUDS
    noStroke();
    fill(255); //white
    ellipse(cloudX, 60, 100, 75); //by drawing our clouds at a variable position rather than a fixed number, we can add animation to our scene
    ellipse(cloudX - 10, 50, 100, 75);
    ellipse(cloudX + 10, 50, 100, 75); //made of three ellipses (ovals) all following the cloudX position
    cloudX = cloudX + 1; //because the draw() function runs many times, this allows our cloud to move
} 