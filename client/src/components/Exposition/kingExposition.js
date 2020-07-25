import React from "react";
import ExpoBtn from "../ExpoBtn";

//our exposition buttons for our king
function KingExposition(props) {
    return (
        <div>
          
          <ExpoBtn
            className={props.hideState}
            id = "kingNo"
            onClick={props.handleBtnClick}
            data-value="kingNo"
            name="No"
          />
          <ExpoBtn
            className={props.hideState}
            id = "kingYes"
            onClick={props.handleBtnClick}
            data-value="kingYes"
            name="Yes"
          />
        </div>
      );
}

export default KingExposition;