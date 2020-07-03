import React from "react";
import TextBox from "../components/TextBox/TextBox"
import { Container } from "../components/Grid"
import Inventory from "../components/Inventory/Inventory"
import GameTextModal from "../components/Modals/GameTextModal";
import World from '../features/world/index';
import Cliffs from "../components/MapLocations/Cliffs";
import Forest from "../components/MapLocations/Forest";
import Village from "../components/MapLocations/Village";
import Castle from "../components/MapLocations/Castle";

const styles= {
    bookImg: {
        marginTop: 30,
        width: "100%",
    }
}

function Continue() {
    

    return(
        <Container>
                <h1 className="text-center">World Map</h1>

                {/* Inventory Bar */}
                <Inventory />

                <div>
                    {/* Game Board */}
                    <img src={require("../images/open-book-board.png")} style={styles.bookImg} alt="World Map" />
                        <World />
                        <Cliffs />
                        <Forest />
                        <Village />
                        <Castle />
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
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
                        Game Log!
                    </button>
                </div>

                <GameTextModal />
        </Container>
    )
}

export default Continue;