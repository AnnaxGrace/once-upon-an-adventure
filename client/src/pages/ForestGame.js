import React from "react";
import TextBox from "../components/TextBox/TextBox"
import { Container } from "../components/Grid"
import Inventory from "../components/Inventory/Inventory"
import GameTextModal from "../components/Modals/GameTextModal";

const styles= {
    bookImg: {
        marginTop: 30,
        width: "100%"
    }
}

function ForestGame() {
    return(
        <div>
                <h1 className="text-center">The Forest</h1>

                {/* Inventory Bar */}
                <Inventory />

                <div>
                    {/* Game Board */}
                    <img src={require("../images/open-book-board.png")} style={styles.bookImg} alt="World Map" />
                        {/* FOREST GAME-BOARD GOES HERE */}
                    <div>
                        {/* Dynamically rendered game text appears in text-box */}
                        <TextBox />
                    </div>
                </div>

                <div className="card-body text-center">
                    <p></p>
                    <h5>Menu</h5>

                    {/* Saves Your Game */}
                    <button className="btn">
                        Save Game!
                    </button>

                    {/* Pulls up GameTextModal */}
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
                        Game Log!
                    </button>
                </div>

                <GameTextModal />
        </div>
    )
}

export default ForestGame;