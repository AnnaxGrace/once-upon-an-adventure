//Size of the canvas where animations are rendered
const canvasWidth = 650;
const canvasHeight = 300;

//Position where frame will be drawn
const xAxis = 200;
const yAxis = 200;

//Position on the image to be animated
let srcX;
let srcY;

//size of the sprite.png
const sheetWidth = 832;
const sheetHeight = 1344;

//number of rows & columns in the sprite.png
const columns = 13;
const rows = 21;

//Height and width of each frame of animation = 64
const width = sheetWidth / columns;
const height = sheetHeight / rows;

// Frame that will be rendered frist (measured by the position on x-axis)
let curretFrame = 0;

const character = new Image();
character.src = "../assets/sprites/gladiator.png";

const canvas = document.getElementById('canvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;
const context = canvas.getContext('2d');

//updates the displayed frame and removes the preiously displayed frame
function updateFrame(){
    curretFrame= ++curretFrame % 9; //9 is the number of columns to be animated
    srcX = curretFrame * width;
    srcY = 640;

    context.clearRect( xAxis, yAxis, width, height);
}

//draws the image...
function drawImage(){
    updateFrame();
    context.drawImage(character, srcX, srcY, width, height, xAxis, yAxis, width, height);
}

//sets the speed of animation!
setInterval(function(){
    drawImage();
}, 120);