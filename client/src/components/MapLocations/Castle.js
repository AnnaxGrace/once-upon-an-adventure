import React from "react";
import "./MapLocations.css"
import { Link, useParams } from "react-router-dom"


function Castle(props) {
    const {id} = useParams()

    const castle = ()=> {
        window.location.replace("/castle/" + id)
    }
    
    return(
        <div className="text-center special castleDiv">
            <img src={require("../../images/mapCastle.jpg")} alt="Castle" className="castle" />
            <br />
            {/* <Link to={"/castle/" + id}>
                Castle
            </Link> */}
            <Link onClick={()=>{
                window.location.replace("/castle/" + id)
            }}>Castle</Link>
        </div>
    )
}

export default Castle;