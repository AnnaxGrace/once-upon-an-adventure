import React from "react";
import "./snake.css"

    // The direction at with our snake moves
    var xv = 0;
    var yv = 0;

    //the position of our snake rectangles
    var px = 12;
    var py = 10;

    //this grid size of our snake rectangles
    var gs = 20;

    //The tile count of our canvas space
    var tc = 20;

    //Our right answer position
    var ax = 15;
    var ay = 15;

    //Our wrong answer position
    var wx = 40;
    var wy = 40;
    
    //Used to determine our equation
    var numArray = [1, 2, 3, 4]

    //Variables needed for our snake tail/size
    var trail = [];
    var tail = 5;

    //Show how many points we've gained
    var points = 0;
    
    //Needed for our equation 
    var answer = 2;
    var num1 = 1;
    var num2 = 1;
    let ctx;

class CanvasSnake extends React.Component {

    //variables that we can use outside of our canvas that display stuff in game
    state = {
        number1: 1,
        number2: 1,
        statePoints: 0
    }
 
    componentDidMount() {

        let canvas = this.refs.canvas
        ctx = canvas.getContext("2d")

        let equation = this.refs.equation
        equation.value = num1 + " " + num2 + " = " 
        
       
        document.addEventListener("keydown", this.keyPush);
        setInterval(this.game, 2000/15);
        
    }
    
    game = () => {
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
                    if ( tail > 5) {
                        console.log("you lose")  
                    }
                    
                }

            }

            trail.push({x: px, y: py});

            while (trail.length > tail) {
                trail.shift();
                
            }

            if(wx*gs + (2 * gs * 2) === px*gs && wy*gs === py*gs) {
                console.log("you LOSE");
            }

            //this is if you touch the right math answer
            if(ax*gs === px*gs && ay*gs === py*gs) {
                tail += 4
                // console.log("hi")
                ax=Math.floor(Math.random() * tc);
                ay=Math.floor(Math.random() * tc);

                wx=Math.floor(Math.random() * tc);
                wy=Math.floor(Math.random() * tc);

                // wx=Math.floor(Math.random() * tc);
                // wy=Math.floor(Math.random() * tc);

                let indexNum = Math.floor(Math.random() * 4 ) 
                
                let indexNum2 = Math.floor(Math.random() * 4 ) 

               
                
                num1 = numArray[indexNum]
                this.setState({number1: num1})
                // console.log(num1)
                num2 = numArray[indexNum2]
                this.setState({number2: num2})
                console.log(num2)

                answer = num1 + num2
                points++;
                this.setState({statePoints: points})
                console.log(points)
                console.log("answer")
                console.log(answer)
                
            }

            
            ctx.fillStyle ="red";
            ctx.font="30px arial";
            
            //right answers
            ctx.fillText(answer, ax*gs, (ay*gs) + 20 )
            
            //wrong answer
           let ranNum = 2
                
            ctx.fillText(answer + ranNum, wx*gs + (2 * gs * 2), (wy*gs) + 20 )
        
    }

     keyPush = event =>  {
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



    render() {
        return(
          <div>
            <canvas ref="canvas" width={500} height={400} />
                <div ref="equation" id="equation">
                    <p>{this.state.number1} + {this.state.number2} = </p>
                    <p>Points: {this.state.statePoints} </p>
                </div>
          </div>
        )
      }
    }
    export default CanvasSnake