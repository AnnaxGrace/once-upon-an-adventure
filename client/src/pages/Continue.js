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

function Continue() {
    return(
        <Container>
                <h1 className="text-center">Continue Your Adventure</h1>

                <Inventory />

                <div>
                    <img src={require("../images/open-book-board.png")} style={styles.bookImg} alt="World Map" />

                    <div>
                        <TextBox />
                    </div>
                </div>

                <div className="card-body text-center">
                    <p></p>
                    <h5>Menu</h5>

                    <button className="btn">
                        Save Game!
                    </button>

                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
                        Game Log!
                    </button>
                </div>

                <GameTextModal />
        </Container>
    )
}

export default Continue;