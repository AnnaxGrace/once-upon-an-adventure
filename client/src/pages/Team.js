import React from "react";

const styles = {
    sprites: {
        height: 300
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
const teamInfo = [
    {
        id: 1,
        img: require("../assets/sprites/anna.gif"),
        name: "Anna Conover",
        roles: "Mini Games, Story Logic, Thief",
    },
    {
        id: 2,
        img: require("../assets/sprites/jace.gif"),
        name: "Jace Clements",
        roles: "Front-end Appearance, Math Wizard",
    },
    {
        id: 3,
        img: require("../assets/sprites/vinnie.gif"),
        name: "Vinnie Lopez",
        roles: "Back-End Development, Authentication, Heart-giving Orc",
    },
    {
        id: 4,
        img: require("../assets/sprites/tony.gif"),
        name: "Tony Garces",
        roles: "Canvas grid, Castle Guard",
    },
    {
        id: 5,
        img: require("../assets/sprites/erik.gif"),
        name: "Erik Hirsch",
        roles: "Sprite Animation, Shopkeeper",
    }
]
function Team() {
    return(
        <div style={styles.divPos}>
            <h1 className="text-center">The Team</h1>
                <div className="row">
                    {teamInfo.map(item => (
                        <div className="col-md-2 card text-center" style={styles.devCard} key={item.id}>
                            <img src={item.img} style={styles.teamImg} alt={item.name} />
                                <h5>{item.name}</h5>
                                    <p className="special">
                                        {item.roles}
                                    </p>
                        </div>
                    ))}
                </div>
        </div>
    )
}
export default Team;