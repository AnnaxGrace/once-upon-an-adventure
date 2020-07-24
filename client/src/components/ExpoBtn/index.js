import React from "react";

//The skeleton for each exposition button we use
function ExpoBtn(props) {
  return (
    <button onClick={props.onClick} className={`expo-btn ${props["data-value"]}`} {...props} >
      {props.name}
    </button>
  );
}

export default ExpoBtn;
