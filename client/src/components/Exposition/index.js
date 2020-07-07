import React from "react";
import ExpoBtn from "../ExpoBtn";

function Exposition(props) {
    return (
        <div>
          <ExpoBtn
            className={props.hideState}
            id= "guardYes"
            
            // style={{ opacity: props.image ? 1 : 0 }}
            onClick={props.handleBtnClick}
            data-value="guardYes"
            name="Yes"
          />
          <ExpoBtn
            className={props.hideState}
            id = "guardNo"
            // style={{ opacity: props.image ? 1 : 0 }}
            onClick={props.handleBtnClick}
            data-value="guardNo"
            name="No"
          />
        </div>
      );
}

export default Exposition;