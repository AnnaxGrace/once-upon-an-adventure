import React from "react";
import { Container } from "../components/Grid";

const styles = {
    sprites: {
        height: 100
    },
    devCard: {
        margin: 20
    },
    divPos: {
        margin: "auto",
        width: "90%"
    },
    teamImg: {
        width: 150,
        height: 250,
        margin: "auto"
    }
}

function Team() {
    return(
        <div style={styles.divPos}>
            <h1 className="text-center">The Team</h1>
                <div className="row">
                    <div className="col-md-2 card" style={styles.devCard}>
                        <img src={require("../images/teamAnna.png")} style={styles.teamImg} alt="Anna" />
                        <h5 className="text-center">Anna Conover</h5>
                        <ul>
                            <li>Mini-Games</li>
                            <li>Story Logic</li>
                            <li>Thief</li>
                        </ul>
                    </div>

                    <div className="col-md-2 card" style={styles.devCard}>
                        <img src={require("../images/teamJace.png")} style={styles.teamImg} alt="Jace" />
                        <h5 className="text-center">Jace Clements</h5>
                        <ul>
                            <li>Front-End Appearence</li>
                            <li>Math Wizard</li>
                        </ul>
                    </div>

                    <div className="col-md-2 card" style={styles.devCard}>
                        <img src={require("../images/teamVinnie.png")} style={styles.teamImg} alt="Vinnie" />
                        <h5 className="text-center">Vinnie Lopez</h5>
                        <ul>
                            <li>Back-End</li>
                            <li>Authentication</li>
                            <li>Heart-Giving Orc</li>
                        </ul>
                    </div>

                    <div className="col-md-2 card" style={styles.devCard}>
                        <img src={require("../images/teamTony.png")} style={styles.teamImg} alt="Tony" />
                        <h5 className="text-center">Tony Garces</h5>
                        <ul>
                            <li>Canvas Grid</li>
                            <li>Castle Guard</li>
                        </ul>
                    </div>

                    <div className="col-md-2 card" style={styles.devCard}>
                        <img src={require("../images/teamErik.png")} style={styles.teamImg} alt="Erik" />
                        <h5 className="text-center">Erik Hirsch</h5>
                        <ul>
                            <li>Sprite Animation</li>
                            <li>Shopkeeper</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default Team;