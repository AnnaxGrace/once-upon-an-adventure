import React from "react";
import "./ComingSoon.css";

const styles = {
    over: {
        backgroundColor: "black",
        
    },
    text: {
        color: "red"
    }
}

function YouWin() {


    return(
        <div className="cs text-center" style={styles.over}>
            <p>
                <img src="https://bestanimations.com/Holidays/Fireworks/fireworks/colorful-fan-firework-gif.gif" alt="fireworks"></img>
                <br />
                You Win!!
                <br />
                <img src={require("../../assets/sprites/anna.gif")} alt="You Win!"></img>
                <img src={require("../../assets/sprites/jace.gif")} alt="You Win!"></img>
                <img src={require("../../assets/sprites/vinnie.gif")} alt="You Win!"></img>
                <img src={require("../../assets/sprites/erik.gif")} alt="You Win!"></img>
                <img src={require("../../assets/sprites/tony.gif")} alt="You Win!"></img>
            </p>
        </div>
    )
}

export default YouWin;