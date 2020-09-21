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
            const { sprite } = user.data[0].sprite[0]

            
       
                return setUserAvatar(sprite)
        }).then(() => {API.getUserSprite(id).then(user => {
            const { name } = user.data[0].sprite[0]
       
            setUserAvatarName(name)
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