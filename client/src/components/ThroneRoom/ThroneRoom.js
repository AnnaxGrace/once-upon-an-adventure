import React from "react";
import "./ThroneRoom.css"

const styles = {
    throneImg: {
        height: "360px"
    }
}

function ThroneRoom(props) {
    return(
        <div className="thronePosition">
            <img src={require("../../images/Throne-Room.png")} alt="Throne Room" style={styles.throneImg}/>

            <div className="charPosition">
                {/* Chacter Sprite here */}
                {/* Currently the img that shows up is hard coded to option 1. need to make it dynamic */}
                <img src={require("../../images/back-option1.png")} alt="Character Sprite" />
            </div>
        </div>
    )
}

export default ThroneRoom;