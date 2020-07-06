import React from "react";
import "./MapLocations.css"
import { Link, useParams } from "react-router-dom"


function Castle(props) {
    const {id} = useParams()
    return(
        <div className="text-center special castleDiv">
            <img src={require("../../images/mapCastle.jpg")} alt="Castle" className="castle" />
            <br />
            <Link to={"/castle/" + id}>
                Castle
            </Link>
        </div>
    )
}

export default Castle;