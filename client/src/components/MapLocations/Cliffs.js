import React from "react";
import "./MapLocations.css";
import { Link, useParams } from "react-router-dom"

function Cliffs() {
    const {id} = useParams()
    return(
        <div className="text-center special cliffDiv">
            <img src={require("../../images/mapCliff.jpg")} alt="Cliff" className="cliff" />
            <br />
            {/* <Link to={"/cliffs/" + id}>
                Cliffs
            </Link> */}
            <Link onClick={()=>{
                window.location.replace("/cliffs/" + id)
            }}>Cliffs</Link>
        </div>
    )
}

export default Cliffs;