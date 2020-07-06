import React from "react";
import "./MenuBtns.css"

function MenuBtns() {
    return (
        <div className="card-body text-center menu">
                    <p></p>
                    <h5>Menu</h5>

                    {/* Saves Your Game */}
                    <button className="btn">
                        Save Game!
                    </button>

                    {/* Pulls up GameTextModal */}
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
                        Game Log!
                    </button>
                </div>
    )
}

export default MenuBtns;