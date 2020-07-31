import React, { useState ,useEffect } from "react";
import StoreTextBox from "../components/TextBox/StoreTextBox"
import { useParams } from "react-router-dom";
import API from "../utils/API";
import MenuBtns from "../components/MenuBtns/MenuBtns";
import MusicBtn from "../components/SoundBtns/MusicBtn";

function ForestGame() {

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
    });


    return(
        <div>
            <MusicBtn />
                <h1 className="text-center">The Forest</h1>

                {/* Inventory Bar */}
                {/* <InventoryGame /> */}
                {/* <ComingSoon /> */}
                {/* <Store handleStoreBtn={handleStoreBtn}/> */}

                <div>
                    {/* Game Board */}
                        {/* <World avatar={userAvatar} avatarName={userAvatarName}/> */}
                    <div>
                        {/* Dynamically rendered game text appears in text-box */}
                        <StoreTextBox avatarName={userAvatarName}/>
                    </div>
                </div>
                <MenuBtns />
        </div>
    )
}

export default ForestGame;