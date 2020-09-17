import React from "react"

function DisabledContinueButton() {
    console.log("component false")
    return (
        <button disabled className="btn">
            Continue your Adventure!
        </button>
    )
}

export default DisabledContinueButton;