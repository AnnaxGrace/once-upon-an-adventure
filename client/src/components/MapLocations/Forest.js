import React from "react";
import "./MapLocations.css";
import { Link } from "react-router-dom";
import ForestModal from "../MapModals/ForestModal"

function Forest() {
    return(
        <div>
        <div className="text-center special forestDiv">
            <img src={require("../../images/mapForest.png")} alt="Forest" className="forest" />
            <br />
            <a href="#ForestGameModal" data-toggle="modal" data-target="#ForestGameModal">
                Forest
            </a>
        </div>
        <ForestModal />
        </div>
    )
}

export default Forest;