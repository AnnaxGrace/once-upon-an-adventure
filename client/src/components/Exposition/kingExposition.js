import React from "react";
import ExpoBtn from "../ExpoBtn";

function KingExposition(props) {
    return (
        <div>
          
          <ExpoBtn
            className={props.hideState}
            id = "kingNo"
            // style={{ opacity: props.image ? 1 : 0 }}
            onClick={props.handleBtnClick}
            data-value="kingNo"
            name="No"
          />
          <ExpoBtn
            className={props.hideState}
            id = "kingYes"
            // style={{ opacity: props.image ? 1 : 0 }}
            onClick={props.handleBtnClick}
            data-value="kingYes"
            name="Yes"
          />
        </div>
      );
}

export default KingExposition;