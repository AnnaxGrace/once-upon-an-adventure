import React from "react";
import ExpoBtn from "../ExpoBtn";


//our exposition buttons for our Wizard
function WizardExposition(props) {
    return (
        <div>
          
          <ExpoBtn
            className={props.hideState}
            id = "jaceNo"
            onClick={props.handleBtnClick}
            data-value="jaceNo"
            name="No"
          />
          <ExpoBtn
            className={props.hideState}
            id = "jaceYes"
            onClick={props.handleBtnClick}
            data-value="jaceYes"
            name="Yes"
          />
        </div>
      );
}

export default WizardExposition;