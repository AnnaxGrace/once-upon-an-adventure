import React, { useState, useEffect } from "react";
// import GameTextBox from "../components/TextBox/GameTextBox"
// import { Container } from "../components/Grid"
import InventoryGame from "../components/Inventory/inventoryGame"
import ForestWorld from '../features/world/ForestWorld';
import ForestWorldThiefMoved from '../features/world/ForestWorldThiefMoved';
// import Player from '../features/player';
import { useParams } from "react-router-dom";
import API from "../utils/API";
import MenuBtns from "../components/MenuBtns/MenuBtns"

function ForestGame() {

    const { id } = useParams();

    const [userAvatar, setUserAvatar] = useState(null)
    const [userAvatarName, setUserAvatarName] = useState(null)
    const [thiefTalk, setThiefTalk] = useState(null)

    useEffect(() => {
        console.log(id)
        API.getUserSprite(id).then(user => {
            console.log(user.data[0].sprite[0])
            const { sprite } = user.data[0].sprite[0]

            // console.log(sprite, name)
            return setUserAvatar(sprite)
        }).then(() => {
            API.getUserSprite(id).then(user => {
                console.log("USER", user)
                console.log(user.data[0].sprite[0])
                const { name, apiFirstThiefTalk } = user.data[0].sprite[0]
                console.log(name)
                setUserAvatarName(name)
                setThiefTalk(apiFirstThiefTalk)
                console.log("userAvatar: ", userAvatar)
               
            })
        })
    }, []);

    function renderForest() {
        switch (thiefTalk) {
            case true:
                return <ForestWorld avatar={userAvatar} avatarName={userAvatarName} />
            case false:
                return <ForestWorldThiefMoved avatar={userAvatar} avatarName={userAvatarName} />
        }
    }
    return (
        <div>
            <h1 className="text-center">The Forest</h1>

            {/* Inventory Bar */}
            <InventoryGame />
            <div>
                {/* Game Board */}
                {renderForest()}
                
                <div>
                    {/* Dynamically rendered game text appears in text-box */}
                    {/* <GameTextBox avatarName={userAvatarName}/> */}
                </div>
            </div>
            <MenuBtns />
        </div>
    )
}

export default ForestGame;