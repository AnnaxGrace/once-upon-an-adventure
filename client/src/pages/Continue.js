import React, { useState ,useEffect } from "react";
import TextBox from "../components/TextBox/TextBox"
import { Container } from "../components/Grid"
import Inventory from "../components/Inventory/Inventory"
import GameTextModal from "../components/Modals/GameTextModal";
import World from '../features/world/index';
import Cliffs from "../components/MapLocations/Cliffs";
import Forest from "../components/MapLocations/Forest";
import Village from "../components/MapLocations/Village";
import Castle from "../components/MapLocations/Castle";
import { useParams } from "react-router-dom";
import API from "../utils/API";


const styles= {
    bookImg: {
        marginTop: 30,
        width: "100%",
    }
}

function Continue() {

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
        
        <Container>
            
                <h1 className="text-center">Continue Your Adventure</h1>

                {/* Inventory Bar */}
                <Inventory />

                <div>
                    {/* Game Board */}
                    <img src={require("../images/open-book-board.png")} style={styles.bookImg} alt="World Map" />
                        <World avatar={userAvatar} avatarName={userAvatarName}/>
                        <Cliffs />
                        <Forest />
                        <Village />
                        <Castle />
                    <div>
                        {/* Dynamically rendered game text appears in text-box */}
                        <TextBox avatarName={userAvatarName}/>
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
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
                        Game Log!
                    </button>
                </div>

                <GameTextModal />
        </Container>
    )
}

export default Continue;