import React from "react";
import SearchForm from "./SearchForm"

//global variables necessary to have gameplay
let points=0;
let ctx;
let wordArray = ["perfection", "characters", "volleyball", "homecoming", "maleficent", "convection", "abominable", "salmonella", "alzheimers", "loneliness", "helicopter", "insulation", "experiment", "foundation", "contortion", "weatherman"]
let word;


class Type extends React.Component {

    state = {
        gameScreen: "hide",
        startScreen: "hide",
        gameScreenLose: "hide",
        win: "",
        points: 0
    }
 
    //when our page loads
    componentDidMount() {

      //This makes sure you can't submit the form by pressing enter
      window.addEventListener("keydown", (event)=> {
        if(event.keyCode == 13) {
          event.preventDefault();
          return false;
        }
      })
      

        //get/setup our canvas
        let canvas = this.refs.canvas
        ctx = canvas.getContext("2d")
        this.setState({startScreen: "show"})
        
        
    }

    //Start button to start the timer/game
    handleStartButtonClick = () => {
      this.setState({startScreen: "hide"})
      this.game()
    }

    
    game = () => {
      //sets a timer for 30 seconds
        setTimeout(this.gameScreenAppears, 30000);

        //Grabs a random word from our word array
        //and displays it on screen
        let indexNum = Math.floor(Math.random() * 16);
        word = wordArray[indexNum]
        ctx.fillStyle ="white";
        ctx.font="30px arial";
        ctx.fillText(word, 170 , 200)
        
        
    }

    //Function that checks if you win or lose
    gameScreenAppears = () => {
      if (points === 13 ) {
        this.setState({gameScreen: "show"})
      }
     else if(points > 13 ) {
        this.setState({gameScreen: "show"})
      }
      else if(points < 13) {
        this.setState({gameScreenLose: "show"})
      }
      
    }
    

    //this checks to see if the word was typed correctly
      handleInputChange = event => {
        event.preventDefault();

        //If the word is typed correctly
        if (event.target.value === word) {

          //add to points
            points++
            this.setState({points: points})

            //grab another random word from the array
            //and displays it
            let indexNum = Math.floor(Math.random() * 16);
            word = wordArray[indexNum]
            ctx.fillStyle ="white";
            ctx.font="30px arial";
            ctx.clearRect(0, 0, 1000, 1000)
            ctx.fillText(word, 170 , 200)

            //clears the form for easier typing
            event.target.value = ""
        }
        
      };

    

    render() {
        return(
          <div>
            <canvas ref="canvas" width={500} height={400} />

            {/* component for our form that our user types into */}
            <SearchForm
            passWord={this.state.displayWord}
            handleInputChange={this.handleInputChange}
            results={this.state.name}
            />
            
            <div className={this.state.gameScreen} id="lose-cover">
                    <p>You win!</p>
                    <p>You got {this.state.points} points!</p>
                    <button className="btn btn-primary" onClick={this.props.handleDoneButtonClick}>
                        done
                    </button>
            </div>
            <div className={this.state.gameScreenLose} id="lose-cover">
                    <p>You Lose!</p>
                    <p> You got {this.state.points} points! You have lost a heart. Try again to win the game!</p>
                    <button className="btn btn-primary" onClick={this.props.handleLoseDoneButtonClick}>
                        done
                    </button>
            </div>

            <div className={this.state.startScreen} id="lose-cover">
                    <p>You have 30 seconds to receive as many points as you can by typing in the word. Get 13 points, and you win!</p>
                    <button className="btn btn-primary" onClick={this.handleStartButtonClick}>
                        Get Started!
                    </button>
            </div>

          </div>
        )
      }
    }
    export default Type