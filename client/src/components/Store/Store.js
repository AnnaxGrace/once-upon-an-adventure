import React from "react";
import "./Store.css"

const styles = {
    storeItem: {
        width: "50px"
    }
}

function Store() {
    return(
        <div className="storePosition">
            <div className="storeBG">
                <div className="storeBox card-body">
                    <p className="special text-center">
                        Castle Pass
                        <br />
                        <img src={require("../../images/castle-pass.png")} alt="Castle Pass" style={styles.storeItem} />
                        <button className="store-btn">
                            Buy? (50 coins)
                        </button>
                    </p>

                </div>
            </div>

        </div>
    )
}

export default Store;