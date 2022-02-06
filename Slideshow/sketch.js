let slide = 0;
let image1;
let image2;
let image3;

function preload() {
    image1 = loadImage("https://s3.india.com/wp-content/uploads/2015/10/1163.jpg");
    image2 = loadImage("https://images.unsplash.com/photo-1586410073908-5f314173d3a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnVubnklMjBjYXR8ZW58MHx8MHx8&w=1000&q=80");
    image3 = loadImage("https://pbs.twimg.com/media/Eq8JE2VVkAU_07Z.jpg");
}

function setup() {
    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
}

function draw() {
    background(255);
    imageMode(CENTER);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(100);
    if (slide == 0) {
        background(160, 130, 80);
        image(image1, width / 2, height / 2);
        text("catto", width / 2, height / 8);
    }
    if (slide == 1) {
        background(220);
        image(image2, width / 2, height / 2);
        text("cat", width / 2, height / 8);
    }
    if (slide == 2) {
        background(255, 230, 230);
        image(image3, width / 2, height / 2);
        text("kitters", width / 2, height / 8);
    }
    // if(slide)
}
function keyPressed() {
    if (keyCode == RIGHT_ARROW && slide < 2) {
        slide++;
    }
    if (keyCode == LEFT_ARROW && slide > 0) {
        slide--;
    }
}
