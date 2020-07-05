import React from "react";
import "./MapLocations.css"
import { Link } from "react-router-dom"

function Castle() {
    return(
        <div className="text-center special castleDiv">
            <img src={require("../../images/mapCastle.jpg")} alt="Castle" className="castle" />
            <br />
            <Link to="/castle">
                Castle
            </Link>
        </div>
    )
}

export default Castle;