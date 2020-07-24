import React, {  useState , useEffect } from "react";
import "./Inventory.css";
import { Container } from "../Grid"
import API from "../../utils/API"
import { useParams } from "react-router-dom";

//inventory for Inner Castle
function InnerCastleInventory(props) {

    return(
        <Container>
            <div className="inventoryCastleBG special row">
                <div className="col-md-4">
                    {/* Determined by our state in CastleTextBox so it updates in page */}
                    HEALTH: 
                    <img src={props.livesImg} className={props.heartClass} alt="Heart Bar" />

                </div>

                <div className="col-md-4">
                    {/* Hard coded for now, will later be determined by user data once more items are added */}
                    INVENTORY:
                    <img src={require("../../images/castle-pass.png")} className="invtImg" alt="Castle Pass" />
                        
                </div>

                <div className="col-md-4">
                    {/* Grabs our money amt from CastleTextBox */}
                    COINS:
                        <img src={require("../../images/coins.png")} className="invtImg" alt="Coins" />
                        x {props.money}
                </div>

            </div>
        </Container>
    )
}

export default InnerCastleInventory;