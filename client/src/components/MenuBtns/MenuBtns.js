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
                    <Link onClick={()=>{
                window.location.replace("/continue/" + id)
            }}>
                    <button type="button" className="btn">
                        World Map
                    </button>
                    </Link>

                    {/* logs you out */}
                    <Link onClick={()=>{
                window.location.replace("/")
            }}>
                    <button type="button" className="btn" >
                        Log Out!
                    </button>
                    </Link>
                </div>
    )
}

export default MenuBtns;