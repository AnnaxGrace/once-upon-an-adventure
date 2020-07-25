import React from "react";
import ExpoBtn from "../ExpoBtn";


//our exposition buttons for our thief the second time we talk to her
function ThiefExposition2(props) {
    return (
        <div>
          
          <ExpoBtn
            className={props.hideState}
            id = "thiefNo2"
            onClick={props.handleBtnClick}
            data-value="thiefNo2"
            name="Nothing"
          />
          <ExpoBtn
            className={props.hideState}
            id = "thiefYes2"
            onClick={props.handleBtnClick}
            data-value="thiefYes2"
            name="Gimme Your Money!"
          />

          
        </div>
      );
}

export default ThiefExposition2;