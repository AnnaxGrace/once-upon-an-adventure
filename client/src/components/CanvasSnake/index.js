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
        statePoints: 0,
        gameScreen: "hide",
        equation: "show"
    }
 
    //when our page loads
    componentDidMount() {

        //get our canvas
        let canvas = this.refs.canvas
        ctx = canvas.getContext("2d")
       
        //Adds our event listener so that our arrow keys move the snake
        //Start the game
        document.addEventListener("keydown", this.keyPush);
        setInterval(this.game, 2000/15);
        
    }

    handleDoneButtonClick() {
        //this will display: none snake canvas
        //pushes points back to CliffText
        //run function game done??

    }
    
    //This function contains all of the game logic
    game = () => {

        //continually moves the snake once we've increased it once
            px += xv;
            py += yv;
            
            //These are checking for walls
            if (px < 0 ) {
                this.setState({ minigame: "show"})
            }
            if (px > 24) {
               
                this.setState({ minigame: "show"})
           
            }
            if (py < 0 ) {
                
                this.setState({ minigame: "show"})
                
            }
            if (py > tc - 1) {
                
                this.setState({ minigame: "show"})
            }
           
            ctx.clearRect(0, 0, 1000, 1000)

            ctx.fillStyle="pink";
            for (var i=0; i < trail.length; i++) {
                ctx.fillRect(trail[i].x*gs, trail[i].y*gs, gs-2, gs-2);

                // if you touch your own tail
                if(trail[i].x === px && trail[i].y === py) {
                    if ( tail > 5) {
                        this.setState({ minigame: "show"})
                    }
                    
                }

            }

            //This adds all of the tails
            trail.push({x: px, y: py});

            //this removes the head so it the following looks seamless
            while (trail.length > tail) {
                trail.shift();
                
            }

            //If the snake touches the wrong answer, you lose
            if(wx*gs + (2 * gs * 2) === px*gs && wy*gs === py*gs) {
                this.setState({ minigame: "show"})
            }

            //this is if you touch the right math answer
            if(ax*gs === px*gs && ay*gs === py*gs) {
                tail += 4
                
                //This handles the next numbers appearing in a random position
                ax=Math.floor(Math.random() * tc);
                ay=Math.floor(Math.random() * tc);

                wx=Math.floor(Math.random() * tc);
                wy=Math.floor(Math.random() * tc);

               
                //This selects random numbers from our array
                let indexNum = Math.floor(Math.random() * 4 ) 
                let indexNum2 = Math.floor(Math.random() * 4 ) 

                num1 = numArray[indexNum]
                this.setState({number1: num1})

                num2 = numArray[indexNum2]
                this.setState({number2: num2})

                //creates the new number we will use
                answer = num1 + num2
                //adds points that will be converted to money
                points++;
                this.setState({statePoints: points})
                
            }

            //Determines the color of our numbers
            ctx.fillStyle ="red";
            ctx.font="30px arial";
            
            //right answer
            ctx.fillText(answer, ax*gs, (ay*gs) + 20 )
            
            //wrong answer
           let ranNum = 2
                
            ctx.fillText(answer + ranNum, wx*gs + (2 * gs * 2), (wy*gs) + 20 )
        
    }

    //Defines our movement direction by arrow key
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
            default:
                break;
            
        }
        //prevents our arrow keys from scrolling
        event.preventDefault();

    }



    render() {
        return(
          <div>
            <canvas ref="canvas" width={500} height={400} />
                <div id="equation" class={this.state.equation}>
                    <p>{this.state.number1} + {this.state.number2} = </p>
                    <p>Points: {this.state.statePoints} </p>
                </div>
                <div class={this.state.gameScreen} id="lose-cover">
                    <p>YOU LOSE</p>
                    <p>End Points: {this.state.statePoints}</p> 
                    <button className="btn btn-primary" onClick={this.handleDoneButtonClick}>
                        done
                    </button>
                </div>
          </div>
        )
      }
    }
    export default CanvasSnake