import React from "react";
import ExpoBtn from "../ExpoBtn";


//our exposition buttons for our thief when we first talk to them
function ThiefExposition(props) {
    return (
        <div>
          
          <ExpoBtn
            className={props.hideState}
            id = "thiefNo"
            onClick={props.handleBtnClick}
            data-value="thiefNo"
            name="No"
          />
          <ExpoBtn
            className={props.hideState}
            id = "thiefYes"
            onClick={props.handleBtnClick}
            data-value="thiefYes"
            name="Yes"
          />

          
        </div>
      );
}

export default ThiefExposition;