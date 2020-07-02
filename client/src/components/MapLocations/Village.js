import React from "react";
import "./MapLocations.css"

function Village() {
    return(
        <div className="text-center special villageDiv">
            <img src={require("../../images/mapVillage.png")} alt="Village" className="village" />
            <br />
            Village
        </div>
    )
}

export default Village;