import React, { useState ,useEffect } from "react";
import StoreTextBox from "../components/TextBox/StoreTextBox"
import { Container } from "../components/Grid"
import InventoryGame from "../components/Inventory/inventoryGame"
import World from '../features/world/index';
import { useParams } from "react-router-dom";
import API from "../utils/API";
import MenuBtns from "../components/MenuBtns/MenuBtns";
import ComingSoon from "../components/ComingSoon/ComingSoon";
import Store from "../components/Store/Store";
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
    }, []);

    // const handleStoreBtn = () => {
    //    if(userMoney >= 50){
    //        API.UpdateSpritePermit(true, id).then(()=> {
    //            console.log("updated permit")            
    //        })
    //        alert("Thank you for the Sale, Kupo!")
    //    } else{
    //        alert("Sorry, Not enough money, Kupo!")
    //    }
    //   };

    return(
        <div>
            <MusicBtn />
                <h1 className="text-center">The Forest</h1>

                {/* Inventory Bar */}
                <InventoryGame />
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