import React from "react";
import "./MapLocations.css";
import { Link } from "react-router-dom"

function Forest() {
    return(
        <div className="text-center special forestDiv">
            <img src={require("../../images/mapForest.png")} alt="Forest" className="forest" />
            <br />
            <Link to="/forest">
                Forest
            </Link>
        </div>
    )
}

export default Forest;