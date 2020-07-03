// //defines element on html to render the animations
// export default function useAnimation(name) {
// console.log(name)
//     const canvas = document.getElementById('canvas');
//     console.log(canvas)
//     //Size of the canvas where animations are rendered
//     // const canvasWidth = 150;
//     // const canvasHeight = 250;
//     //Sets height and width of animation canvas
//     // canvas.width = canvasWidth;
//     // canvas.height = canvasHeight;

//     //Position where frame will be drawn
//     let xAxis = 75;
//     let yAxis = 125;

//     //Position on the image to be animated
//     let srcX;
//     let srcY = 128;

//     //size of the sprite.png
//     // const sheetWidth = 832;
//     // const sheetHeight = 1344;

//     //number of rows & columns in the sprite.png
//     // const columns = 13;
//     // const rows = 21;

//     //Height and width of each frame of animation = 64
//     const width = 64;
//     const height = 64;

//     //has animation images render as a 2d image
//     const context = canvas.getContext('2d');
//     // Frame that will be rendered frist (measured by the position on x-axis)
//     let curretFrame = 0;

//     let selectedChar;

//     let character = new Image();
//     //sets the speed of sprite animation
//     function animate(name) {
//         setInterval(function characterStart(name) {
//             selectedChar = name;
//             character.src = "../client/src/assets/sprites/" + selectedChar + ".png"
//             drawSprite();
//         }, 125);
//     }

//     function updateFrame() {
//         context.clearRect(xAxis, yAxis + 10, width, height);
//         curretFrame = ++curretFrame % 5; //# is the number of columns to be animated
//         srcX = curretFrame * width;
//     }
//     //draws the sprite
//     function drawSprite() {
//         context.drawImage(character, srcX, srcY, width, height, xAxis, yAxis, width, height);
//         updateFrame();
//     }
//     animate();
// }

// export { drawSprite, updateFrame, animate, canvas, width, height }