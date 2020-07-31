import React, {  useState , useEffect } from "react";
import "./Inventory.css";
import { Container } from "../Grid"
import API from "../../utils/API"
import { useParams } from "react-router-dom";

//inventory for continue.js
function StoreInventory(props) {

    //grabs our id from our URL for our database
    const { id } = useParams();

    const [userLives, setUserLives] = useState(null)
    
    useEffect(()=> {
       
        //grabs lives data from our user's sprite database
        API.getUserSprite(id).then(user => {
            const {lives} = user.data[0].sprite[0]
            
            return setUserLives(lives)
        })
        
    });


// Runs function to return image depending on lives in our database

function heart() {
    
    if (userLives === 3){
      return <img src={require("../../images/threeHearts.png")} className="heart-three" alt="Full Heart" />
  } else if(userLives === 2) {
          return <img src={require("../../images/twoHearts.png")} className="heart-two" alt="Full Heart" />
  } else if (userLives === 1) {
      return<img src={require("../../images/oneHeart.png")} className="heart-one" alt="Full Heart" />
  } 

}



    

    return(
        <Container>
            <div className="inventoryStoreBG special row">
                <div className="col-md-4">
                    {/* Runs function to return image depending on lives in our database */}
                    HEALTH: 
                    {heart()}
                </div>

                <div className="col-md-4">
                    {/* Determined by our state in player index.js so it updates in page */}     
                    INVENTORY:
                    <img src={props.permitImg} className="invtImg" alt="Inventory Permit" />
                    
                </div>

                <div className="col-md-4">
                    {/* Grabs our money amt from player index.js so it updates in page */}
                    COINS:
                        <img src={require("../../images/coins.png")} className="invtImg" alt="Coins" />
                        x {props.money}
                </div>

            </div>
        </Container>
    )
}

export default StoreInventory;