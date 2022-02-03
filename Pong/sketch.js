//GLOBAL VARIABLES (accessable everywhere in our project)


function setup() {
    let canvas = createCanvas(window.innerWidth, window.innerHeight); //rather than set our canvas to a set number, we can make it always fit the screen by accessing the window width and height
    canvas.position(0, 0); //create canvas actually gives us access to the canvas we created. Here, we reposition it to be in the corner of the page so it fills the whole screen
}

function draw() {
    background(51);
}