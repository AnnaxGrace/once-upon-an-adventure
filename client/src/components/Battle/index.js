import React, { Component } from "react";
import "./battle.css"
import CanvasSnake from "../CanvasSnake"
import Hangman from "../CanvasHangman"
// import SnakeGame from "../SnakeGame/index"


class Battle extends Component {

    render() {
    return (
        // <button type="button" class="btn btn-primary battleBtn" onClick={handleNewScreen}></button>
    <div id="login-page" className="beige">
      Hello world!

      {/* <CanvasSnake /> */}
      <Hangman />
     
    </div>
    )
    }
}

export default Battle;