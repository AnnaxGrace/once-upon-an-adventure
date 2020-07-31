import React, {  useState , useEffect } from "react";
import "./Inventory.css";
import { Container } from "../Grid"
import API from "../../utils/API"
import { useParams } from "react-router-dom";

//inventory for continue.js
function Inventory(props) {

    //grabs our id from our URL for our database
    const { id } = useParams();

    const [userLives, setUserLives] = useState(null)
    const [userPermit, setUserPermit] = useState(null)
    
    //grabs permit and lives data from our user's sprite database
    useEffect(()=> {
        API.getUserSprite(id).then(user => {
            const {lives} = user.data[0].sprite[0]
            
                return setUserLives(lives)
        
        }).then(()=>{
            API.getUserSprite(id).then(user => {
                const {permit} = user.data[0].sprite[0]
            
                return setUserPermit(permit)
            })
        }
        
        )

    });

//Returns image depending on our many lives our user has
function heart() {
    
    if (userLives === 3){
      return <img src={require("../../images/threeHearts.png")} className="heart-three" alt="Heart Bar" />
  } else if(userLives === 2) {
          return <img src={require("../../images/twoHearts.png")} className="heart-two" alt="Heart Bar" />
  } else if (userLives === 1) {
      return<img src={require("../../images/oneHeart.png")} className="heart-one" alt="Heart Bar" />
  } 

}

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
            <div className="inventoryBG special row">
                <div className="col-md-4">
                    {/* Runs function to return image depending on lives in our database */}
                    HEALTH: 
                    {heart()}

                </div>

                <div className="col-md-4">
                    {/* Runs function to return image depending on boolean permit in our database */}
                    INVENTORY:
                    {permit()}
                        
                </div>

                <div className="col-md-4">
                    {/* Grabs our money amt from continue.js */}
                    COINS:
                        <img src={require("../../images/coins.png")} className="invtImg" alt="Coins" />
                        x {props.money}
                </div>

            </div>
        </Container>
    )
}

export default Inventory;