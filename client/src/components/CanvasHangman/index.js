import React from "react";
import "./hangman.css"

let wrong = 0;
let win = "false";
let ctx;
let wordArray = [["q","u","i","p"], ["w", "a", "v", "e"]]
let word;
let miniWrong = 0;
let wrongSpacing = 0;
let right = 0;

class Hangman extends React.Component {

    //variables that we can use outside of our canvas that display stuff in game
    state = {
        img1: "../../images/Hangman1.png",
        img2: "../../images/Hangman2.png",
        img3: "../../images/Hangman2.png",
        img4: "../../images/Hangman2.png",
        img5: "../../images/Hangman2.png",
        img6: "../../images/Hangman2.png",
        letter: ""
    }
 
    //when our page loads
    componentDidMount() {

        //get our canvas
        let canvas = this.refs.canvas
        ctx = canvas.getContext("2d")
        ctx.fillStyle="white";
        ctx.fillRect(80, 50, 140, 190)
        let image1 = this.refs.Hangman1
        ctx.drawImage(image1, 80, 50)
        let space = this.refs.Hangmanspace
        ctx.drawImage(space, 20, 300)
        ctx.drawImage(space, 130, 300)
        ctx.drawImage(space, 240, 300)
        ctx.drawImage(space, 350, 300)

        this.game()
    }

    game = () => {
        let indexNum = Math.floor(Math.random() * 2);
        word = wordArray[indexNum]
        console.log(word)
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
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
    
        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        // console.log(this.state.letter)
        this.setState({
          letter: "",
        });
        console.log(word)
        for (var i = 0; i < word.length; i++){
            if (word[i] === this.state.letter) {
                miniWrong = 0
                console.log(word[i])
                let position=i
                ctx.fillStyle ="black";
                ctx.font="30px arial";
                // ctx.fillText(word[i], 25 , 310)
                console.log(position)
                // if (position === 0) {
                //     console.log("hi")
                //     ctx.fillText(word[i], 55, 340)
                //     right++
                // }
                // else if (position === 1) {
                //     console.log("hi")
                //     ctx.fillText(word[i], 165, 340)
                //     right++
                // }
                // else if (position === 2) {
                //     console.log("hi")
                //     ctx.fillText(word[i], 275, 340)
                //     right++
                // }
                // else if (position == 3) {
                //     console.log("hi")
                //     ctx.fillText(word[i], 275, 340)
                //     right++
                // }
                switch (position) {
                    case 0:
                        console.log("hi")
                        ctx.fillText(word[i], 55, 340)
                        right++
                        break;
                    case 1:
                        console.log("hi")
                        ctx.fillText(word[i], 165, 340)
                        right++
                        break;
                    case 2:
                        console.log("hi")
                        ctx.fillText(word[i], 275, 340)
                        right++
                        break;
                    case 3:
                        console.log("hi")
                        ctx.fillText(word[i], 385, 340)
                        right++
                        break;
                    default:
                        break;
                }
                if (right === 4) {
                    console.log("you win!")
                }
            }
            else {
                console.log("miniwrong before ++")
                console.log(miniWrong)

                miniWrong++
                console.log("miniwrong after ++")
                console.log(miniWrong)

                if (miniWrong === 4) {
                    ctx.fillStyle ="white";
                    ctx.font="30px arial";
                    ctx.fillText(this.state.letter, 240 + wrongSpacing, 50)
                    wrongSpacing += 25
                    console.log("nope")
                    miniWrong = 0
                    console.log("miniwrong after 0")
                    console.log(miniWrong)
                    wrong++
                    let image2 = this.refs.Hangman2
                    let image3 = this.refs.Hangman3
                    let image4 = this.refs.Hangman4
                    let image5 = this.refs.Hangman5
                    let image6 = this.refs.Hangman6
                    let image7 = this.refs.Hangman7
        
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
                            console.log('you lose')
                            break;
                        default:
                            break;
                    }
        
                }
            }
        }
        // if (miniWrong === 4) {
        //     ctx.fillStyle ="white";
        //     ctx.font="30px arial";
        //     ctx.fillText(this.state.letter, 240 + wrongSpacing, 50)
        //     wrongSpacing += 25
        //     console.log("nope")
        //     miniWrong = 0
        //     wrong++
        //     let image2 = this.refs.Hangman2
        //     let image3 = this.refs.Hangman3
        //     let image4 = this.refs.Hangman4
        //     let image5 = this.refs.Hangman5
        //     let image6 = this.refs.Hangman6
        //     let image7 = this.refs.Hangman7

        //     switch(wrong) {
        //         case 1:
        //             ctx.drawImage(image2, 80, 50);
        //             break;
        //         case 2: 
        //             ctx.drawImage(image3, 80, 50);
        //             break;
        //         case 3: 
        //             ctx.drawImage(image4, 80, 50);
        //             break;
        //         case 4: 
        //             ctx.drawImage(image5, 80, 50);
        //             break;
        //         case 5: 
        //             ctx.drawImage(image6, 80, 50);
        //             break;
        //         case 6: 
        //             ctx.drawImage(image7, 80, 50);
        //             console.log('you lose')
        //             break;
        //         default:
        //             break;
        //     }

        // }
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
                    // placeholder="First Name"
                />
          
                <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </div>
        )
      }
    }
    export default Hangman