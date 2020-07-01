import React from "react";
import "./snake.css"

class CanvasSnake extends React.Component {

    state = {
        number1: 1,
        number2: 1
    }
 
    componentDidMount() {
        var xv = 0;
        var yv = 0;
        var px = 12;
        var py = 10;
        var gs = 20;
        var tc = 20;
        var ax = 15;
        var ay = 15;

        var numArray = [1, 2, 3, 4]
        var trail = [];
        var tail = 5;
        var points = 0;
        var answer = 2;
        var num1 = 1;
        var num2 = 1;
        var run = "Start";

        let canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")

        let equation = this.refs.equation
        equation.value = num1 + " " + num2 + " = " 
        
        // if ( run === "start") {
            document.addEventListener("keydown", keyPush);
            // setInterval(game, 1000/15);
             setInterval(game, 2000/15);
        
    
    
         function game () {
            px += xv;
            py += yv;
            
            //These are checking for walls
            if (px < 0 ) {
                console.log("hi")
                
                window.location.reload()
                clearInterval();
            }
            if (px > 24) {
               
               console.log("bye")
               window.location.reload()
            //    window.location.reload()
            }
            if (py < 0 ) {
                
                window.location.reload()
                
            }
            if (py > tc - 1) {
                
                window.location.reload()
            //    
            }
            // ctx.fillStyle="black";
            // ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.clearRect(0, 0, 1000, 1000)

            ctx.fillStyle="pink";
            for (var i=0; i < trail.length; i++) {
                ctx.fillRect(trail[i].x*gs, trail[i].y*gs, gs-2, gs-2);

                // if you touch your own tail
                if(trail[i].x === px && trail[i].y === py) {
                    // console.log("you lose")
                    // window.location.reload();
                }

            }

            trail.push({x: px, y: py});

            while (trail.length > tail) {
                trail.shift();
                
            }

            //this is if you touch the right math answer
            if(ax*gs === px*gs && ay*gs === py*gs) {
                console.log("hi")
                ax=Math.floor(Math.random() * tc);
                ay=Math.floor(Math.random() * tc);

                let indexNum = Math.floor(Math.random() * 4 ) 
                
                let indexNum2 = Math.floor(Math.random() * 4 ) 
                
                num1 = numArray[indexNum]
                this.setState({number1: num1})
                console.log(num1)
                num2 = numArray[indexNum2]
                this.setState({number2: num2})
                console.log(num2)

                answer = num1 + num2
                
                

            }

            
            ctx.fillStyle ="red";
            ctx.font="30px arial";
            
            //right answers
            ctx.fillText(answer, ax*gs, (ay*gs) + 20 )

            //This will be the wrong answers
            // for (i = 0; i < points.length; i++) {
            //     ctx.fillText(answer + ranNum, ax*ga*ranNum, (ay*gs*ranNum) + 20 )
            // }
        
    }

     function keyPush (event)  {
        switch(event.keyCode) {
            case 37:
                xv = -1;
                yv = 0;
                break;
            case 38:
                xv = 0;
                yv = -1;
                break;
            case 39:
                xv = 1;
                yv = 0;
                break;
            case 40:
                xv = 0;
                yv = 1;
                break;
            
        }
        event.preventDefault();

    }

}

    render() {
        return(
          <div>
            <canvas ref="canvas" width={500} height={400} />
                <div ref="equation" id="equation">
                    {this.state.number1} + {this.state.number2} =
                </div>
          </div>
        )
      }
    }
    export default CanvasSnake