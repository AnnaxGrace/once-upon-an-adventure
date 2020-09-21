import React from "react";
import "./hangman.css"
import LetterBtns from "./LetterBtns"

//global variables necessary to have gameplay
let wrong = 0;
let ctx;
let wordArray = [["q","u","i","p"], ["w", "a", "v", "e"], ["j", "i", "n", "x"], ["o", "n", "y", "x"], ["q", "u", "i", "z"], ["w", "i", "n", "k"], ["a", "c", "i", "d"], ["n", "a", "v", "y"], ["g", "a", "w", "k"], ["j", "i", "v", "e"], ["l", "i", "e", "u"], ["w", "e", "l", "t"], ["p", "e", "o", "n"], ["l", "u", "n", "g"], ["b", "a", "r", "d"], ["o", "u", "s", "t"]]
let word;
let miniWrong = 0;
let wrongSpacing = 0;
let right = 0;
let varWin;

class Hangman extends React.Component {

    state = {
        gameScreen: "hide",
        win: "",
        endWord: ""
    }
 
    //when our page loads
    componentDidMount() {
        let canvas = this.refs.canvas
        ctx = canvas.getContext("2d")

        this.game()
    }
    
    //Grabs a random word from our word array
    game = () => {
        
        wrongSpacing=0;
        wrong=0;
        right=0;
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
        let indexNum = Math.floor(Math.random() * 16);
        word = wordArray[indexNum]

        ctx.fillStyle="black";
        ctx.fillRect(230, 20, 280, 160)
        
    }

    //This hides the you win/lose page
    hideScreen = () => {
        this.setState({gameScreen: "hide"})

    }


    //When you click on a letter
    handleBtnClick = event => {
        event.preventDefault();
    
        //get the data value of the button - which will be a letter value
        const btnType = event.target.attributes.getNamedItem("data-value").value;

        
        
        //we need to reset miniwrong many times so that we don't accidentally add the correct letter to the wrong list
        miniWrong = 0
        for (var i = 0; i < word.length; i++){
            //if the word's letter matches the letter given
            if (word[i] === btnType) {
                miniWrong = 0
                
                //notes the position of the word the letter is in
                let position = i
                ctx.fillStyle ="black";
                ctx.font="30px arial";
                
                //Writes letter given depending on the position in the word
                switch (position) {
                    case 0:
                        ctx.fillText(word[i], 55, 340)
                        right++
                        miniWrong = 0
                        break;
                    case 1:
                        ctx.fillText(word[i], 165, 340)
                        right++
                        miniWrong = 0
                        break;
                    case 2:
                        ctx.fillText(word[i], 275, 340)
                        right++
                        miniWrong = 0
                        break;
                    case 3:
                        ctx.fillText(word[i], 385, 340)
                        right++
                        miniWrong = 0
                        break;
                    default:
                        break;
                }
                //if you get four letters right, you win and then the game resets to be able to play again
                if (right === 4) {
                    this.setState({win: "You win"})
                    this.setState({gameScreen: "show"})
                    this.setState({endWord: word})
                    this.game()
                    varWin = "yes"
                }
            }
            //Each time it's wrong it adds to variable miniWrong, which keeps track of if it's not in the word
            else {
                
                miniWrong++

                //If the letter does not exist in the word
                if (miniWrong === 4) {
                    ctx.fillStyle ="white";
                    ctx.font="30px arial";

                    //Write the wrong letter next to the tree
                    //wrongSpacing increases the spacing everytime you get an answer wrong so that numbers are not written on top of each other
                    ctx.fillText(btnType, 240 + wrongSpacing, 50)
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
                        //If you lose, we show the lose screen and reset the game
                            ctx.drawImage(image7, 80, 50);
                            this.setState({win: "You Lose - You will lose one heart and 10 gold!"})
                            this.setState({gameScreen: "show"})
                            this.setState({endWord: word})
                            this.game()

                            varWin="no"
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
                <img ref="Hangman1" src ={require("../../images/Hangman1.png")} alt="level1Hangman"></img>
                <img ref="Hangman2" src ={require("../../images/Hangman2.png")} alt="level2Hangman"></img>
                <img ref="Hangman3" src ={require("../../images/Hangman3.png")} alt="level3Hangman"></img>
                <img ref="Hangman4" src ={require("../../images/Hangman4.png")} alt="level4Hangman"></img>
                <img ref="Hangman5" src ={require("../../images/Hangman5.png")} alt="level5Hangman"></img>
                <img ref="Hangman6" src ={require("../../images/Hangman6.png")} alt="level6Hangman"></img>
                <img ref="Hangman7" src ={require("../../images/Hangman7.png")} alt="level7Hangman"></img>
                <img ref="Hangmanspace" src ={require("../../images/Hangmanspace.png")} alt="Spaces for the Hangman"></img>

            </div>
            <div className="letters">
                <LetterBtns 
                handleBtnClick={this.handleBtnClick}
                />
            </div>

            <div className={this.state.gameScreen} id="lose-cover">
                <div className="gamescreen-words">
                    <p>{this.state.win}</p>
                    <p>The word was {this.state.endWord}</p>
                    <button className="btn btn-primary hide-screen" onClick={this.hideScreen}>
                        <button className="btn btn-primary" data-value={varWin} onClick={this.props.handleHangButtonClick}>
                            done
                        
                        </button>
                    </button>
                </div>
            </div>

          </div>
        )
      }
    }

    export default Hangman