import React from "react";
// import {canvas, xAxis, yAxis, srcX, srcY, width, height, context, curretFrame, selectedChar, character, animate, updateFrame, drawSprite} from "../assets/teamMovement/animate";
// import useAnimation from "../assets/teamMovement/animate"
import { Container } from "../components/Grid"

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
    },
    creditsDiv: {
        marginTop: 50
    }
}

const teamInfo = [
    {
        id: 1,
        img: require("../images/teamAnna.png"),
        name: "Anna Conover",
        roles: "Mini Games, Story Logic, Thief",
        // animation: function () {
        //     return useAnimation("anna")
        // }
    },
    {
        id: 2,
        img: require("../images/teamJace.png"),
        name: "Jace Clements",
        roles: "Front-end Appearance, Math Wizard",
       
    },
    {
        id: 3,
        img: require("../images/teamVinnie.png"),
        name: "Vinnie Lopez",
        roles: "Back-End Development, Authentication, Heart-giving Orc"
    },
    {
        id: 4,
        img: require("../images/teamTony.png"),
        name: "Tony Garces",
        roles: "Canvas grid, Castle Guard"
    },
    {
        id: 5,
        img: require("../images/teamErik.png"),
        name: "Erik Hirsch",
        roles: "Sprite Animation, Shopkeeper"
    }
]

function Team() {
    return(
        <div>
            <div style={styles.divPos}>
                <h1 className="text-center">The Team</h1>
                    <div className="row">
                        {teamInfo.map(item => (
                            <div className="col-md-2 card text-center" style={styles.devCard} key={item.id}>
                                {/* <canvas id="canvas" style={styles.teamImg}></canvas> */}
                                <img src={item.img} style={styles.teamImg} alt={item.name} />
                                    <h5>{item.name}</h5>
                                        <p className="special">
                                            {item.roles}
                                        </p>
                            </div>
                        ))}
                    </div>
            </div>

            <Container>
                <div className="text-center" style={styles.creditsDiv}>
                    <h5>Additional Credits</h5>
                    <p>
                        Images and Sprites sourced from:
                        <br />
                        <a href="https://www.freevector.com/" target="_blank" rel="noopener noreferrer">FreeVector.com</a>
                        <br />
                        <a href="https://kronbits.itch.io/matriax-free-assets" target="_blank" rel="noopener noreferrer">Kronbits</a>
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default Team;