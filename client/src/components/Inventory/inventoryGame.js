import React, {  useState , useEffect } from "react";
import "./InventoryGame.css";
import { Container } from "../Grid";
import API from "../../utils/API"
import { useParams } from "react-router-dom";
import { PromiseProvider } from "mongoose";

function InventoryGame(props) {
    const { id } = useParams();

    const [userMoney, setUserMoney] = useState(null)
    const [userLives, setUserLives] = useState(null)
    const [userPermit, setUserPermit] = useState(null)
  
    
    useEffect(()=> {
API.getUserSprite(id).then(user => {
    const {money} = user.data[0].sprite[0]

    return setUserMoney(money)
}).then(()=>{
    API.getUserSprite(id).then(user => {
        const {lives} = user.data[0].sprite[0]
    
        return setUserLives(lives)
    }, [])
}

).then(()=>{
    API.getUserSprite(id).then(user => {
        const {permit} = user.data[0].sprite[0]
    
        return setUserPermit(permit)
    })
}

)
    }, [userMoney]);

  function heart() {
      if (userLives === 3){
        return <img src={require("../../images/threeHearts.png")} className="heart" alt="Full Heart" />
    } else if(userLives === 2) {
            return <img src={require("../../images/twoHearts.png")} className="heart" alt="Full Heart" />
    } else if (userLives === 1) {
        return<img src={require("../../images/oneHeart.png")} className="heart" alt="Full Heart" />
    }
  }

  function permit( ){
    console.log(userPermit)
        if (userPermit === true){
            return <img src={require("../../images/castle-pass.png")} className="invtImg" alt="Castle Pass" />
        } else {
            return <img src={require("../../images/empty.png")} className="invtImg" alt="Empty" />
        }
    }
    

    return(
        <Container>
            <div className="inventoryBGI special row">
                <div className="col-md-4">
                    {/* Hearts -- hard coded for now but will later be determined by the User's data */}
                    HEALTH: 
                    <img src={props.stateLivesImg} className="heart" alt="Full Heart" />
                    {/* {userLives}
                        <img src={require("../../images/full-heart.png")} className="heart" alt="Full Heart" />
                        <img src={require("../../images/full-heart.png")} className="heart" alt="Full Heart" />
                        <img src={require("../../images/empty-heart.png")} className="heart" alt="Empty Heart" /> */}

                </div>

                <div className="col-md-4">
                    {/* Hard coded for now, will later be determined by user data */}
                    INVENTORY:
                    {permit()}
                    {/* {userPermit}
                        <img src={require("../../images/castle-pass.png")} className="invtImg" alt="Castle Pass" />
                        <img src={require("../../images/health-potion.png")} className="invtImg" alt="Health Potion" /> */}
                </div>

                <div className="col-md-4">
                    {/* Hard coded for now, will later be determined by user data */}
                    COINS:
                        <img src={require("../../images/coins.png")} className="invtImg" alt="Coins" />
                         x {props.playerMoney}
                </div>

            </div>
        </Container>
    )
}

export default InventoryGame;