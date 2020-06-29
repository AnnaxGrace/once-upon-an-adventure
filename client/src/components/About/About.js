import React from "react";
import "./About.css"
import { Link } from "react-router-dom";

function About() {
    return (
      <div className="container">
        <h3>About Us</h3>
        <div className="aboutContainer">
          <p>
            React RPG (Title Pending) is an interactive learning experience.
            Based on both RPG's and Choose Your Own Adventure games,
            React RPG (Title Pending) offers a variety of learning games that any child will enjoy.
            Our goal is to expand our world and our characters, but for now it's very easy to hop
            into the world we've made. We hope that you enjoy our little Realm of magic
            that we've created.
          </p>
          <p className="text-center">
            <Link to="/team">
              <button className="btn">
                Meet the Team
              </button>
            </Link>
          </p>
        </div>
      </div>
    );
}

export default About;