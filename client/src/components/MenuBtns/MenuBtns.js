import React from "react";
import "./MenuBtns.css"
import { Link, useParams } from "react-router-dom"

function MenuBtns() {
    const {id} = useParams()
    return (
        <div className="card-body text-center menu">
                    <p></p>
                    <h5>Menu</h5>

                    {/* Returns to World Map */}
                    <Link to ={"/continue/" + id}>
                    <button type="button" className="btn">
                        World Map
                    </button>
                    </Link>

                    {/* logs you out */}
                    <Link to ="/">
                    <button type="button" className="btn" >
                        Log Out!
                    </button>
                    </Link>
                </div>
    )
}

export default MenuBtns;