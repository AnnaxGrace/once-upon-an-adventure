import React from "react";
import "./type.css"
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

        //get/setup our canvas
        let canvas = this.refs.canvas
        ctx = canvas.getContext("2d")
        this.setState({startScreen: "show"})
        
        
    }

    handleStartButtonClick = () => {
      this.setState({startScreen: "hide"})
      this.game()
    }

    // handleDoneButtonClick() {
        //this will display: none snake canvas
        //pushes points back to CliffText
        //run function game done??

    // }
    //Grabs a random word from our word array
    game = () => {
        console.log("game running?")
        setTimeout(this.gameScreenAppears, 30000);
        let indexNum = Math.floor(Math.random() * 16);
        word = wordArray[indexNum]
        ctx.fillStyle ="white";
        ctx.font="30px arial";
        ctx.fillText(word, 170 , 200)
        
        
    }

    gameScreenAppears = () => {
      if (points >= 13 ) {
        this.setState({gameScreen: "show"})
      }
      if (points < 13) {
        this.setState({gameScreenLose: "show"})
      }
      
    }
    

      handleInputChange = event => {
        event.preventDefault();

        console.log(event.target.value)
        console.log(word)
        if (event.target.value === word) {
            points++
            console.log(points)
            this.setState({points: points})
            let indexNum = Math.floor(Math.random() * 16);
            word = wordArray[indexNum]
            console.log(word)
            ctx.fillStyle ="white";
            ctx.font="30px arial";
            ctx.clearRect(0, 0, 1000, 1000)
            ctx.fillText(word, 170 , 200)
            event.target.value = ""
        }
        // let result = this.state.result.filter(item => item.name.first.includes(event.target.value));
        // this.setState({ result })
      };

    

    render() {
        return(
          <div>
            <canvas ref="canvas" width={500} height={400} />
            <SearchForm
            passWord={this.state.displayWord}
            handleInputChange={this.handleInputChange}
            results={this.state.name}
            />
            
            <div className={this.state.gameScreen} id="lose-cover">
                    <p>You win!</p>
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