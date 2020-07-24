import React from "react";
import ExpoBtn from "../ExpoBtn";

//Our exposition buttons for our guard
function Exposition(props) {
    return (
        <div>
          <ExpoBtn
            className={props.hideState}
            id= "guardYes"
            onClick={props.handleBtnClick}
            data-value="guardYes"
            name="Yes"
          />
          <ExpoBtn
            className={props.hideState}
            id = "guardNo"
            onClick={props.handleBtnClick}
            data-value="guardNo"
            name="No"
          />
        </div>
      );
}

export default Exposition;