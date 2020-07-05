import React, { useState ,useEffect } from "react";
import GameTextBox from "../components/TextBox/GameTextBox"
import { Container } from "../components/Grid"
import Inventory from "../components/Inventory/Inventory"
import World from '../features/world/index';
import { useParams } from "react-router-dom";
import API from "../utils/API";

const styles= {
    bookImg: {
        marginTop: 30,
        width: "100%",
    }
}

function CastleGame() {

    const { id } = useParams();

    const [userAvatar, setUserAvatar] = useState(null)
    const [userAvatarName, setUserAvatarName] = useState(null)

    useEffect(() => {
        API.getUserSprite(id).then(user => {
            console.log(user.data[0].sprite[0])
            const { sprite } = user.data[0].sprite[0]
       
            // console.log(sprite, name)
                return setUserAvatar(sprite)
        }).then(() => {API.getUserSprite(id).then(user => {
            console.log(user.data[0].sprite[0])
            const { name } = user.data[0].sprite[0]
       
            console.log(name)
            setUserAvatarName(name)
            console.log("userAvatar: ",userAvatar)
        })
            
        })
    }, []);

    return(
        <div>
                <h1 className="text-center">World Map</h1>

                {/* Inventory Bar */}
                <Inventory />

                <div>
                    {/* Game Board */}
                    <img src={require("../images/open-book-board.png")} style={styles.bookImg} alt="World Map" />
                        <World avatar={userAvatar} avatarName={userAvatarName}/>
                    <div>
                        {/* Dynamically rendered game text appears in text-box */}
                        <GameTextBox avatarName={userAvatarName}/>
                    </div>
                </div>

                <div className="card-body text-center">
                    <p></p>
                    <h5>Menu</h5>

                    {/* Saves Your Game */}
                    <button className="btn">
                        Save Game!
                    </button>

                    {/* Pulls up GameTextModal */}
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
                        Game Log!
                    </button>
                </div>
        </div>
    )
}

export default CastleGame;