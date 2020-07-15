import React from "react";
import ExpoBtn from "../ExpoBtn";

function ThiefExposition(props) {
    return (
        <div>
          
          <ExpoBtn
            className={props.hideState}
            id = "thiefNo"
            // style={{ opacity: props.image ? 1 : 0 }}
            onClick={props.handleBtnClick}
            data-value="thiefNo"
            name="No"
          />
          <ExpoBtn
            className={props.hideState}
            id = "thiefYes"
            // style={{ opacity: props.image ? 1 : 0 }}
            onClick={props.handleBtnClick}
            data-value="thiefYes"
            name="Yes"
          />
        </div>
      );
}

export default ThiefExposition;