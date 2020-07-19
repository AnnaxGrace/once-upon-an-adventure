import React from "react";
import ExpoBtn from "../ExpoBtn";

function ThiefExposition2(props) {
    return (
        <div>
          
          <ExpoBtn
            className={props.hideState}
            id = "thiefNo"
            // style={{ opacity: props.image ? 1 : 0 }}
            onClick={props.handleBtnClick}
            data-value="thiefNo2"
            name="Nothing"
          />
          <ExpoBtn
            className={props.hideState}
            id = "thiefYes"
            // style={{ opacity: props.image ? 1 : 0 }}
            onClick={props.handleBtnClick}
            data-value="thiefYes2"
            name="Gimme Your Money!"
          />

          
        </div>
      );
}

export default ThiefExposition2;