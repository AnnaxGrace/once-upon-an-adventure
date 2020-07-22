import React from "react";
import "./MapLocations.css";
import { Link, useParams } from "react-router-dom";


function Forest() {
    const {id} = useParams()
    return(
        <div className="text-center special forestDiv">
            <img src={require("../../images/mapForest.png")} alt="Forest" className="forest" />
            <br />
            {/* <Link to={"/forest/" + id}>
                Forest
            </Link> */}
            <Link onClick={()=>{
                window.location.replace("/forest/" + id)
            }}>Forest</Link>
        </div>
    )
}

export default Forest;