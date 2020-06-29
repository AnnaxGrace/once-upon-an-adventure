import React from "react";

class CanvasSnake extends React.Component {

    componentDidMount() {
        let canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        let x = 250
        let y = 200
        let width = 20
        let height = 20
        let direction = "right";
        
        ctx.tabIndex = 0;

        // var table = drawRect(10, 100, width, height)
        drawRect(252, 200, width, height);

        function drawRect(x, y, width, height) {
            ctx.fillStyle = "pink"
            ctx.fillRect(x, y, width, height)
        }

        function updateFrame() {
            ctx.clearRect(0, 0, 1000, 1000)
            drawRect(x, y, width, height)
            // drawRect(x-10, y, width, height)
        }

        var game = setInterval(snakeStart, 100)


        function snakeStart() {
            switch (direction) {
                case "right":
                    x += 2;
                    if (x === 482) {
                        console.log("lose")
                        direction = "stop"
                        break;
                    }
                    updateFrame();
                    break;
                case "left":
                    x -= 2;
                    if (x === 0) {
                        console.log("lose")
                        direction = "stop"
                        break;
                    }
                    updateFrame();
                    break;
                case "up":
                    y -= 2;
                    if (y === 0) {
                        console.log("lose")
                        direction = "stop"
                    }
                    console.log(y)
                    updateFrame();
                    break;
                case "down":
                    y += 2;
                    if (y === 382) {
                        console.log("lose")
                        direction = "stop"
                    }
                    console.log(y)
                    updateFrame();
                    break;
                case "stop":
                    clearInterval(game)
                    console.log("party");
                    break;
            }
            if (direction === "stop"){
                clearInterval(game)
            }
            // updateFrame();
        }

        //comment to push
        window.addEventListener("keydown", function(event) {
            switch (event.keyCode) {
                case 37 || 65:   //left arrow
                    direction = "left"
                    break;
                case 38 || 87:   //up arrow
                    direction = "up"
                    break;
                case 39 || 68:   //right arrow
                    direction = "right"
                    break;
                case 40 || 83:    //down arrow
                    direction = "down"
                    break;
                default:
                    return;
            }
            //stops the arrow keys from making the page scroll
            event.preventDefault();
            // ctx.clearRect(0, 0, 500, 500)
            // drawRect(x, y, width, height)
            // drawRect((x+2), y+2, width, height)
        }, false);
        // window.addEventListener('keydown', SnakeDirection)
    }

    

    render() {
        return(
          <div>
            <canvas ref="canvas" width={500} height={400} />
            {/* <img ref="image" src={cheese} className="hidden" /> */}
          </div>
        )
      }
    }
    export default CanvasSnake