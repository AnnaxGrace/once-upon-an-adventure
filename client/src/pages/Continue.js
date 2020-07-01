import React from "react";
import TextBox from "../components/TextBox/TextBox"
import { Container } from "../components/Grid"

const styles= {
    bookImg: {
        margin: "auto",
        width: "100%"
    }
}

function Continue() {
    return(
        <Container>
                <h1 className="text-center">Continue Your Adventure</h1>

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

                    <button className="btn">
                        Text Log
                    </button>
                </div>
        </Container>
    )
}

export default Continue;