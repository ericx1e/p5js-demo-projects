let answer;
let guess = ""; //store guesses as a string (text)
let statusText = "Guess my number";
let gameover = false;
let numGuesses = 0;

function setup() {
    let canvas = createCanvas(window.innerWidth, window.innerHeight); //rather than set our canvas to a set number, we can make it always fit the screen by accessing the window width and height
    canvas.position(0, 0); //create canvas actually gives us access to the canvas we created. Here, we reposition it to be in the corner of the page so it fills the whole screen
    answer = parseInt(random(0, 100)); //random gives a random number (incuding demicals) between the range we provide. ParseInt turns that number into a integer without decimals
}

function draw() {
    background(51);
    textAlign(CENTER, CENTER) //draw text from the center rather than top left corner
    fill(255);
    textSize(100); //set text size
    text(statusText, width / 2, height / 5);
    text("Tries: " + numGuesses, width / 2, height * 4 / 5); //keep track of number of guesses the player takes
    textSize(200);
    text(guess, width / 2, height / 2); //display guess in the middle of the screen
}


function keyPressed() {
    if (gameover) { //if the player guesses the number, stop inputs
        return; //return breaks out of the function and none of the following code will run
    }
    if (key == '0' || key == '1' || key == '2' || key == '3' || key == '4' || key == '5' || key == '6' || key == '7' || key == '8' || key == '9') { //key is set to the last character typed. Make sure it's a number
        guess += key;
    }
    if (keyCode == ENTER && guess.length > 0) { //for keys that don't directly type out characters (arrows keys, shift, esc...), we use key codes
        n = parseInt(guess) //turn our guess String into a number
        //update our status message accordingly
        if (n < answer) {
            statusText = guess + " is too low"
        }
        if (n > answer) {
            statusText = guess + " is too high"
        }
        if (n == answer) {
            statusText = guess + " is my number!"
            gameover = true;
        }
        numGuesses++;
        guess = ""; //reset our guess 
    }

    if (keyCode == BACKSPACE && guess.length > 0) { //backspace
        guess = guess.substring(0, guess.length - 1);
    }
}