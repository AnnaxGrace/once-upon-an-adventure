import React from "react";
import ExpoBtn from "../ExpoBtn";

function WizardExposition(props) {
    return (
        <div>
          
          <ExpoBtn
            className={props.hideState}
            id = "jaceNo"
            // style={{ opacity: props.image ? 1 : 0 }}
            onClick={props.handleBtnClick}
            data-value="jaceNo"
            name="No"
          />
          <ExpoBtn
            className={props.hideState}
            id = "jaceYes"
            // style={{ opacity: props.image ? 1 : 0 }}
            onClick={props.handleBtnClick}
            data-value="jaceYes"
            name="Yes"
          />
        </div>
      );
}

export default WizardExposition;