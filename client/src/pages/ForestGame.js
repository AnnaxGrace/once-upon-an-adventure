import React, { useState ,useEffect } from "react";
import GameTextBox from "../components/TextBox/GameTextBox"
import { Container } from "../components/Grid"
import InventoryGame from "../components/Inventory/inventoryGame"
import World from '../features/world/index';
import { useParams } from "react-router-dom";
import API from "../utils/API";
import MenuBtns from "../components/MenuBtns/MenuBtns";
// import ComingSoon from "../components/ComingSoon/ComingSoon";
import Store from "../components/Store/Store";

const styles= {
    bookImg: {
        marginTop: 30,
        width: "100%",
    }
}

function ForestGame() {

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
                <h1 className="text-center">The Forest</h1>

                {/* Inventory Bar */}
                {/* <InventoryGame /> */}
                {/* <ComingSoon /> */}
                <Store />

                <div>
                    {/* Game Board */}
                        {/* <World avatar={userAvatar} avatarName={userAvatarName}/> */}
                    <div>
                        {/* Dynamically rendered game text appears in text-box */}
                        <GameTextBox avatarName={userAvatarName}/>
                    </div>
                </div>
                <MenuBtns />
        </div>
    )
}

export default ForestGame;