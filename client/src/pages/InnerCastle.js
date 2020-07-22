import React, { useState ,useEffect } from "react";
import CastleTextBox from "../components/TextBox/CastleTextBox"
import InventoryGame from "../components/Inventory/inventoryGame"
import { useParams } from "react-router-dom";
import API from "../utils/API";
import MenuBtns from "../components/MenuBtns/MenuBtns";
import ThroneRoom from "../components/ThroneRoom/ThroneRoom";
import MusicBtn from "../components/SoundBtns/MusicBtn";
import YouWin from "../components/ComingSoon/YouWin";

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
            <MusicBtn />
                <h1 className="text-center">The Throne Room</h1>

                {/* Inventory Bar */}
                {/* <InventoryGame /> */}
                {/* Throne Room */}
                <ThroneRoom />

                <div>
                    <div>
                        {/* Dynamically rendered game text appears in text-box */}
                        <CastleTextBox avatarName={userAvatarName}/>
                    </div>
                </div>
                <MenuBtns />
        </div>
    )
}

export default InnerCastle;