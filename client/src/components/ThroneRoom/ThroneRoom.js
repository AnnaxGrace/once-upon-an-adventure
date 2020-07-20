import React, { useState } from "react";
import "./ThroneRoom.css"
import API from "../../utils/API";
import { useParams } from "react-router-dom";



const styles = {
    throneImg: {
        height: "360px"

    }
}



function ThroneRoom(props) {

    const { id } = useParams();

    const [userImage, setUserImage] = useState("placeholder.gif")



    API.getUserSprite(id).then(user => {
        console.log(user.data[0].sprite[0])
        const { sprite } = user.data[0].sprite[0]
        console.log("this is userImage ")
        console.log( sprite )
        setUserImage(sprite)
        
    });

    return(
        <div className="thronePosition">
          
            <img src={require("../../images/Throne-Room.png")} alt="Throne Room" style={styles.throneImg}/>

            <div className="charPosition">
                {/* Chacter Sprite here */}
                {/* Currently the img that shows up is hard coded to option 1. need to make it dynamic */}

                <img className="avatar-back-image" src={require("../../images/2-" + userImage)} />
            </div>
        </div>
    )
}

export default ThroneRoom;