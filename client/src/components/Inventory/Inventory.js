import React from "react";
import "./Inventory.css";
import { Container } from "../Grid"

function Inventory() {
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
                        x12
                </div>

            </div>
        </Container>
    )
}

export default Inventory;