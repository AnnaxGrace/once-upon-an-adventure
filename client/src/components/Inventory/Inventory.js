import React, {  useState , useEffect } from "react";
import "./Inventory.css";
import { Container } from "../Grid"
import API from "../../utils/API"
import { useParams } from "react-router-dom";

function Inventory() {
    const { id } = useParams();

    const [userMoney, setUserMoney] = useState(null)
    const [, forceUpdate] = useState();
    
    useEffect(()=> {
        setTimeout(forceUpdate, 2000);
API.getUserSprite(id).then(user => {
    const {money} = user.data[0].sprite[0]

    setUserMoney(money)
})
    }, [userMoney]);

    

    return(
        <Container>
            <div className="inventoryBG special row">
                <div className="col-md-4">
                    {/* Hearts -- hard coded for now but will later be determined by the User's data */}
                    HEALTH: 
                        <img src={require("../../images/full-heart.png")} className="heart" alt="Full Heart" />
                        <img src={require("../../images/full-heart.png")} className="heart" alt="Full Heart" />
                        <img src={require("../../images/empty-heart.png")} className="heart" alt="Empty Heart" />

                </div>

                <div className="col-md-4">
                    {/* Hard coded for now, will later be determined by user data */}
                    INVENTORY:
                        <img src={require("../../images/castle-pass.png")} className="invtImg" alt="Castle Pass" />
                        <img src={require("../../images/health-potion.png")} className="invtImg" alt="Health Potion" />
                </div>

                <div className="col-md-4">
                    {/* Hard coded for now, will later be determined by user data */}
                    COINS:
                        <img src={require("../../images/coins.png")} className="invtImg" alt="Coins" />
                        x {userMoney}
                </div>

            </div>
        </Container>
    )
}

export default Inventory;