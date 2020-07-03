import React from "react";
import "./MapLocations.css";
import { Link } from "react-router-dom"

function Cliffs() {
    return(
        <div className="text-center special cliffDiv">
            <img src={require("../../images/mapCliff.jpg")} alt="Cliff" className="cliff" />
            <br />
            <a href="#CliffsGameModal" data-toggle="modal" data-target="#CliffsGameModal">
                Cliffs
            </a>
        </div>
    )
}

export default Cliffs;