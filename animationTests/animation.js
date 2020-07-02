//Size of the canvas where animations are rendered
const canvasWidth = 600;
const canvasHeight = 450;

//Position where frame will be drawn
let xAxis = 325;
let yAxis = 150;

//Position on the image to be animated
let srcX;
let srcY;

//size of the sprite.png
const sheetWidth = 832;
const sheetHeight = 1344;

//number of rows & columns in the sprite.png
const columns = 13;
const rows = 21;
//Defines the row to use to animate coresponding movement.
let trackLeft = 9;
let trackRight = 11;
let trackUp = 8;
let trackDown = 2;
let movingLeft = false;
let movingRight = false;
let movingUp = false;
let movingDown = true;
//Height and width of each frame of animation = 64
const width = sheetWidth / columns;
const height = sheetHeight / rows;

// Frame that will be rendered frist (measured by the position on x-axis)
let curretFrame = 0;

const tree = new Image()
tree.src = "../client/src/assets/tiles/tree.png"
const character = new Image();
character.src = "../client/src/assets/sprites/anna.png";

//defines element on html to render the animations
const canvas = document.getElementById('canvas');

//Sets height and width of animation canvas
canvas.width = canvasWidth;
canvas.height = canvasHeight;

//has animation images render as a 2d image
const context = canvas.getContext('2d');

//Moves character and sets appropriate animation
function charMove(event) {
    console.log(event);
    switch (event.keyCode) {
        case 37 || 65:   //left arrow
            console.log("left");
            movingLeft = true;
            movingRight = false;
            movingUp = false;
            movingDown = false;
            xAxis -= 2;
            characterStart();
            break;
        case 38 || 87:   //up arrow
            console.log("up");
            movingLeft = false;
            movingRight = false;
            movingUp = true;
            movingDown = false;
            yAxis -= 2;
            characterStart();
            break;
        case 39 || 68:   //right arrow
            console.log("right");
            movingLeft = false;
            movingRight = true;
            movingUp = false;
            movingDown = false;
            xAxis += 2;
            characterStart();
            break;
        case 40 || 83:    //down arrow
            console.log("down")
            movingLeft = false;
            movingRight = false;
            movingUp = false;
            movingDown = true;
            yAxis += 2;
            characterStart();
            break;
        default:
            return;
    }
}

//updates the displayed frame and removes the preiously displayed frame
function updateFrame() {
    context.clearRect(xAxis, yAxis+10, width, height);
    curretFrame = ++curretFrame % 5; //9 is the number of columns to be animated
    srcX = curretFrame * width;
    if (movingLeft === true) {
        srcY = trackLeft * height;//right: 704 down: 640 left:576 up:512
    } else if (movingRight === true) {
        srcY = trackRight * height;
    } else if (movingUp === true) {
        srcY = trackUp * height;
    } else {
        srcY = trackDown * height;
    }
}

// context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);

function drawTree() {
    window.onload = function () {
        // context.drawImage(character, srcX, srcY, width, height, xAxis, yAxis, width, height);
        // clearInterval(myVar);
        context.drawImage(tree, 25, 0, 100, 100);
        context.drawImage(tree, 250, 250, 100, 100);
        context.drawImage(tree, 150, 100, 100, 100);
        context.drawImage(tree, 75, 90, 100, 100);
        context.drawImage(tree, 30, 75, 100, 100);
        context.drawImage(tree, 400, 120, 100, 100);
    }
}

//draws the sprite
function drawSprite() {
    updateFrame();
    context.drawImage(character, srcX, srcY, width, height, xAxis, yAxis, width, height);
}

var myVar = setInterval(characterStart, 125);
//if direction arrow is not pressed dont runn this function
//sets the speed of sprite animation
function characterStart() {
    drawSprite();
}

function chacterStop(event) {
    switch (event.keyCode) {
        case 37:
            clearInterval(myVar)
            break;
        case 38:
            clearInterval(myVar)
            break;
        case 39:
            clearInterval(myVar)
            break;
        case 40:
            clearInterval(myVar)
            break;
        default:
            return;
    }

}

drawTree();

//key down event listener
window.addEventListener('keydown', charMove)
window.addEventListener('keyup', chacterStop)