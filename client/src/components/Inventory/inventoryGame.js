import React, {  useState , useEffect } from "react";
import "./InventoryGame.css";
import { Container } from "../Grid";
import API from "../../utils/API"
import { useParams } from "react-router-dom";

function InventoryGame(props) {

    //grabs our id from our URL for our database
    const { id } = useParams();

   
    const [userPermit, setUserPermit] = useState(null)
  
    
    useEffect(()=> {

    //grabs permit data from our user's sprite database
    API.getUserSprite(id).then(user => {
        const {permit} = user.data[0].sprite[0]
    
        return setUserPermit(permit)
    })

    });

//returns permit image depending on whether or not the user has a permit
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
                    {/* Determined by our state in player index.js so it updates in page */}                   
                     HEALTH: 
                     <img src={props.stateLivesImg} className={props.stateHeartClass} alt="Heart Bar" />

                </div>

                <div className="col-md-4">
                    {/* Hard coded for now, will later be determined by user data once more items are added */}
                    INVENTORY:
                    {permit()}
                </div>

                <div className="col-md-4">
                    {/* Grabs our money amt from player index.js so it updates in page */}
                    COINS:
                        <img src={require("../../images/coins.png")} className="invtImg" alt="Coins" />
                         x {props.playerMoney}
                </div>

            </div>
        </Container>
    )
}

export default InventoryGame;