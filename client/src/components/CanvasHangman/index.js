import React from "react";
// import "./snake.css"

let wrong = 0;
let win = "false";
let ctx;

class Hangman extends React.Component {

    //variables that we can use outside of our canvas that display stuff in game
    state = {
        img1: "../../images/Hangman1.png",
        img2: "client/src/images/Hangman2.png",
        img3: "client/src/images/Hangman2.png",
        img4: "client/src/images/Hangman2.png",
        img5: "client/src/images/Hangman2.png",
        img6: "client/src/images/Hangman2.png"
    }
 
    //when our page loads
    componentDidMount() {

        //get our canvas
        let canvas = this.refs.canvas
        ctx = canvas.getContext("2d")
        let image1 = this.refs.Hangman1
        ctx.drawImage(image1, 80, 50)
        let space = this.refs.Hangmanspace
        ctx.drawImage(space, 20, 300)
        ctx.drawImage(space, 130, 300)
        ctx.drawImage(space, 240, 300)
        ctx.drawImage(space, 350, 300)
    }

    game = () => {
        while ( win === "false") {

        }
    }

    handleFormSubmit = () => {

    }

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
                <div id="letter-form">

                </div>
          </div>
        )
      }
    }
    export default Hangman