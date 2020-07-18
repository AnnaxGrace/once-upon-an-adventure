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
        win: "",
        points: 0
    }
 
    //when our page loads
    componentDidMount() {

        //get/setup our canvas
        let canvas = this.refs.canvas
        ctx = canvas.getContext("2d")
        this.game()
        
    }

    // handleDoneButtonClick() {
        //this will display: none snake canvas
        //pushes points back to CliffText
        //run function game done??

    // }
    //Grabs a random word from our word array
    game = () => {
        
        setTimeout(this.gameScreenAppears, 30000);
        let indexNum = Math.floor(Math.random() * 16);
        word = wordArray[indexNum]
        ctx.fillStyle ="white";
        ctx.font="30px arial";
        ctx.fillText(word, 170 , 200)
        
        
    }

    gameScreenAppears = () => {
      this.setState({gameScreen: "show"})
    }
    

      handleInputChange = event => {
        event.preventDefault();

        console.log(event.target.value)
        console.log(word)
        if (event.target.value === word) {
            points++
            console.log(points)
            let indexNum = Math.floor(Math.random() * 16);
            word = wordArray[indexNum]
            console.log(word)
            ctx.fillStyle ="white";
            ctx.font="30px arial";
            ctx.clearRect(0, 0, 1000, 1000)
            ctx.fillText(word, 170 , 200)
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
                    <p>{this.state.win}</p>
                    <button className="btn btn-primary" onClick={this.props.handleDoneButtonClick}>
                        done
                    </button>
            </div>

          </div>
        )
      }
    }
    export default Type