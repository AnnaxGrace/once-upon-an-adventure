import React, { useState ,useEffect } from "react";
// import { Container } from "../components/Grid"
import InventoryGame from "../components/Inventory/inventoryGame"
import CastleWorld from '../features/world/CastleWorld';
import CastleWorldGuardMoved from '../features/world/CastleWorldGuardMoved';
// import Player from '../features/player';
import { useParams } from "react-router-dom";
import API from "../utils/API";
import MenuBtns from "../components/MenuBtns/MenuBtns"

function CastleGame() {

    const { id } = useParams();

    const [userAvatar, setUserAvatar] = useState(null)
    const [userAvatarName, setUserAvatarName] = useState(null)
    const [guardTalk, setGuardTalk] = useState(null)

    useEffect(() => {
        console.log(id)
        API.getUserSprite(id).then(user => {
            console.log(user.data[0].sprite[0])
            const { sprite } = user.data[0].sprite[0]
       
            // console.log(sprite, name)
                return setUserAvatar(sprite)
        }).then(() => {API.getUserSprite(id).then(user => {
            console.log(user.data[0].sprite[0])
            const { name, permit } = user.data[0].sprite[0]
       
            console.log(name)
            setUserAvatarName(name)
            setGuardTalk(permit)
            console.log("userAvatar: ",userAvatar)
        })
            
        })
    }, []);

    function renderCastle() {
        switch (guardTalk) {
            case false:
                return <CastleWorld avatar={userAvatar} avatarName={userAvatarName}/>
            case true:
                return <CastleWorldGuardMoved avatar={userAvatar} avatarName={userAvatarName}/>
        }
    }

    return(
        <div>
                <h1 className="text-center">The Castle</h1>

                <div>
                    {/* Game Board */}
                        {renderCastle()}
                    <div>
                        {/* Dynamically rendered game text appears in text-box */}
                    </div>
                </div>
                <MenuBtns />
        </div>
    )
}

export default CastleGame;