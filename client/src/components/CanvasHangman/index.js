import React from "react";
import "./hangman.css"

//global variables necessary to have gameplay
let wrong = 0;
let ctx;
let wordArray = [["q","u","i","p"], ["w", "a", "v", "e"], ["j", "i", "n", "x"], ["o", "n", "y", "x"], ["q", "u", "i", "z"], ["w", "i", "n", "k"], ["a", "c", "i", "d"], ["n", "a", "v", "y"], ["g", "a", "w", "k"], ["j", "i", "v", "e"], ["l", "i", "e", "u"], ["w", "e", "l", "t"], ["p", "e", "o", "n"], ["l", "u", "n", "g"], ["b", "a", "r", "d"], ["o", "u", "s", "t"]]
let word;
let miniWrong = 0;
let wrongSpacing = 0;
let right = 0;

class Hangman extends React.Component {

    state = {
        letter: "",
        gameScreen: "hide",
        win: ""
    }
 
    //when our page loads
    componentDidMount() {

        //get/setup our canvas
        let canvas = this.refs.canvas
        ctx = canvas.getContext("2d")
        ctx.fillStyle="white";
        ctx.fillRect(80, 50, 140, 190)

        //draws our first hangman image and all of our letter spaces
        let image1 = this.refs.Hangman1
        ctx.drawImage(image1, 80, 50)
        let space = this.refs.Hangmanspace
        ctx.drawImage(space, 20, 300)
        ctx.drawImage(space, 130, 300)
        ctx.drawImage(space, 240, 300)
        ctx.drawImage(space, 350, 300)

        this.game()
    }

    handleDoneButtonClick() {
        //this will display: none snake canvas
        //pushes points back to CliffText
        //run function game done??

    }
    //Grabs a random word from our word array
    game = () => {
        
        let indexNum = Math.floor(Math.random() * 16);
        word = wordArray[indexNum]
        
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
        event.preventDefault();
    
        this.setState({
          letter: "",
        });
        
        //we need to reset miniwrong many times so that we don't accidentally add the correct letter to the wrong list
        miniWrong = 0
        for (var i = 0; i < word.length; i++){
            //if the word's letter matches the letter given
            if (word[i] === this.state.letter) {
                //notes the position of the word the letter is in
                miniWrong = 0
                
                let position = i
                ctx.fillStyle ="black";
                ctx.font="30px arial";
                
                //Writes letter given depending on the position in the word
                switch (position) {
                    case 0:
                        console.log("hi")
                        ctx.fillText(word[i], 55, 340)
                        right++
                        miniWrong = 0
                        break;
                    case 1:
                        console.log("hi")
                        ctx.fillText(word[i], 165, 340)
                        right++
                        miniWrong = 0
                        break;
                    case 2:
                        console.log("hi")
                        ctx.fillText(word[i], 275, 340)
                        right++
                        miniWrong = 0
                        break;
                    case 3:
                        console.log("hi")
                        ctx.fillText(word[i], 385, 340)
                        right++
                        miniWrong = 0
                        break;
                    default:
                        break;
                }
                if (right === 4) {
                    this.setState({win: "You win"})
                    this.setState({gameScreen: "show"})
                }
            }
            else {
                
                miniWrong++

                //If the letter does not exist in the word
                if (miniWrong === 4) {
                    ctx.fillStyle ="white";
                    ctx.font="30px arial";

                    //wrongSpacing increasing the spacing everytime you get an answer wrong so that numbers are not written on top of each other
                    ctx.fillText(this.state.letter, 240 + wrongSpacing, 50)
                    wrongSpacing += 25
                    
                    miniWrong = 0
                    
                    wrong++
                    //defines our needed images so we can draw them
                    let image2 = this.refs.Hangman2
                    let image3 = this.refs.Hangman3
                    let image4 = this.refs.Hangman4
                    let image5 = this.refs.Hangman5
                    let image6 = this.refs.Hangman6
                    let image7 = this.refs.Hangman7
        
                    //draws the next level of image each time you get a wrong letter
                    switch(wrong) {
                        case 1:
                            ctx.drawImage(image2, 80, 50);
                            break;
                        case 2: 
                            ctx.drawImage(image3, 80, 50);
                            break;
                        case 3: 
                            ctx.drawImage(image4, 80, 50);
                            break;
                        case 4: 
                            ctx.drawImage(image5, 80, 50);
                            break;
                        case 5: 
                            ctx.drawImage(image6, 80, 50);
                            break;
                        case 6: 
                            ctx.drawImage(image7, 80, 50);
                            this.setState({win: "You Lose"})
                            this.setState({gamescreen: "show"})
                            break;
                        default:
                            break;
                    }
        
                }
            }
        }
        
        
      };

    render() {
        return(
          <div>
            <canvas ref="canvas" width={500} height={400} />
            <div id="required-images">
                <img ref="Hangman1" src ={require("../../images/Hangman1.png")}></img>
                <img ref="Hangman2" src ={require("../../images/Hangman2.png")}></img>
                <img ref="Hangman3" src ={require("../../images/Hangman3.png")}></img>
                <img ref="Hangman4" src ={require("../../images/Hangman4.png")}></img>
                <img ref="Hangman5" src ={require("../../images/Hangman5.png")}></img>
                <img ref="Hangman6" src ={require("../../images/Hangman6.png")}></img>
                <img ref="Hangman7" src ={require("../../images/Hangman7.png")}></img>
                <img ref="Hangmanspace" src ={require("../../images/Hangmanspace.png")}></img>

            </div>
            
            <form className="form form-style">
                <input
                    value={this.state.letter}
                    name="letter"
                    onChange={this.handleInputChange}
                    type="text"
                />
          
                <button onClick={this.handleFormSubmit}>Submit</button>
            </form>

            <div className={this.state.gameScreen} id="lose-cover">
                    <p>{this.state.win}</p>
                    <button className="btn btn-primary" onClick={this.handleDoneButtonClick}>
                        done
                    </button>
            </div>

          </div>
        )
      }
    }
    export default Hangman