import React from "react";
// import "./style.css";

function ExpoBtn(props) {
  return (
    <button onClick={props.onClick} className={`expo-btn ${props["data-value"]}`} {...props} >
      {props.name}
    </button>
  );
}

export default ExpoBtn;
