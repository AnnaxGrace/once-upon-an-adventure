import React, { useState ,useEffect } from "react";
import StoreTextBox from "../components/TextBox/StoreTextBox"
import InventoryGame from "../components/Inventory/inventoryGame"
import { useParams } from "react-router-dom";
import API from "../utils/API";
import MenuBtns from "../components/MenuBtns/MenuBtns";
import ThroneRoom from "../components/ThroneRoom/ThroneRoom";

function InnerCastle() {

    const { id } = useParams();

    const [userAvatar, setUserAvatar] = useState(null)
    const [userAvatarName, setUserAvatarName] = useState(null)
    const [userMoney, setUserMoney] = useState(null)

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
            
        }).then(()=>{
            API.getUserSprite(id).then(user => {
                const {money} = user.data[0].sprite[0]
                return setUserMoney(money)
            })
        })
    }, []);

    return(
        <div>
                <h1 className="text-center">The Forest</h1>

                {/* Inventory Bar */}
                <InventoryGame />
                {/* Throne Room */}
                <ThroneRoom />

                <div>
                    <div>
                        {/* Dynamically rendered game text appears in text-box */}
                        <StoreTextBox avatarName={userAvatarName}/>
                    </div>
                </div>
                <MenuBtns />
        </div>
    )
}

export default InnerCastle;