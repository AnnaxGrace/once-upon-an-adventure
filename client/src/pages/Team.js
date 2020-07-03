import React from "react";
import { Container } from "../components/Grid";

const styles = {
  sprites: {
    height: 300,
  },
  devCard: {
    margin: 20,
  },
  divPos: {
    margin: "auto",
    width: "90%",
  },
  teamImg: {
    width: 150,
    height: 250,
    margin: "auto",
  },
  creditsDiv: {
    marginTop: 50,
  },
};
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
  },
];

function Team() {
  return (
    <div>
      <div style={styles.divPos}>
        <h1 className="text-center">The Team</h1>
        <div className="row">
          {teamInfo.map(item => (
            <div
              className="col-md-2 card text-center"
              style={styles.devCard}
              key={item.id}
            >
              <img src={item.img} style={styles.teamImg} alt={item.name} />
              <h5>{item.name}</h5>
              <p className="special">{item.roles}</p>
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
            <a
              href="https://www.freevector.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FreeVector.com
            </a>
            <br />
            <a
              href="https://kronbits.itch.io/matriax-free-assets"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kronbits
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
}
export default Team;
