import React from "react";
import ExpoBtn from "../ExpoBtn";

function Exposition(props) {
    return (
        <div>
          <ExpoBtn
            // style={{ opacity: props.image ? 1 : 0 }}
            onClick={props.handleBtnClick}
            data-value="yes"
          />
          <ExpoBtn
            // style={{ opacity: props.image ? 1 : 0 }}
            onClick={props.handleBtnClick}
            data-value="no"
          />
        </div>
      );
}

export default Exposition;