import React from "react";
import "./MapLocations.css"

function Castle() {
    return(
        <div className="text-center special castleDiv">
            <img src={require("../../images/mapCastle.jpg")} alt="Castle" className="castle" />
            <br />
            <a href="#CastleGameModal" data-toggle="modal" data-target="#CastleGameModal">
                Castle
            </a>
        </div>
    )
}

export default Castle;