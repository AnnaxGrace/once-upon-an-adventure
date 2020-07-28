import React, { useState ,useEffect } from "react";
import { Container } from "../components/Grid"
import InventoryGame from "../components/Inventory/inventoryGame"
import CliffWorld from '../features/world/CliffWorld';
import { useParams } from "react-router-dom";
import API from "../utils/API";
import MenuBtns from "../components/MenuBtns/MenuBtns";

function CliffGame() {

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
                <h1 className="text-center">The Cliffs</h1>

                
                <div>
                    {/* Game Board */}
                        <CliffWorld avatar={userAvatar} avatarName={userAvatarName}/>
                </div>
                <MenuBtns />
        </div>
    )
}

export default CliffGame;