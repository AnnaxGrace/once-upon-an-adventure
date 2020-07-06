import React from "react";
import "./MenuBtns.css"

function MenuBtns() {
    return (
        <div className="card-body text-center menu">
                    <p></p>
                    <h5>Menu</h5>

                    {/* Saves Your Game */}
                    <button className="btn special">
                        Save Game!
                    </button>

                    {/* Pulls up GameTextModal */}
                    <button type="button" className="btn special">
                        Log Out!
                    </button>
                </div>
    )
}

export default MenuBtns;