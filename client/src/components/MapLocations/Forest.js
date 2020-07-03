import React from "react";
import "./MapLocations.css";
import { Link } from "react-router-dom"

function Forest() {
    return(
        <div className="text-center special forestDiv">
            <img src={require("../../images/mapForest.png")} alt="Forest" className="forest" />
            <br />
            <a href="#ForestGameModal" data-toggle="modal" data-target="#ForestGameModal">
                Forest
            </a>
        </div>
    )
}

export default Forest;