import React from "react";

class CanvasSnake extends React.Component {

    componentDidMount() {
        let canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        let x = 10
        let y = 10
        let width = 20
        let height = 20
        
        ctx.tabIndex = 0;

        var table = drawRect(10, 100, width, height)
        drawRect(10, 30, width, height);

        function drawRect(x, y, width, height) {
            ctx.fillStyle = "#666"
            ctx.fillRect(x, y, width, height)
        }

        //comment to push
        window.addEventListener("keydown", function(event) {
            console.log(event);
            switch (event.keyCode) {
                case 37 || 65:   //left arrow
                    console.log("left");
                    x -= 2;
                    break;
                case 38 || 87:   //up arrow
                    console.log("up");     
                    y -= 2;
                    break;
                case 39 || 68:   //right arrow
                    console.log("right");
                    x += 2;
                    break;
                case 40 || 83:    //down arrow
                    console.log("down")
                    y += 2;
                    break;
                default:
                    return;
            }
            event.preventDefault();
            ctx.clearRect(0, 0, 500, 500)
            drawRect(x, y, width, height)
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