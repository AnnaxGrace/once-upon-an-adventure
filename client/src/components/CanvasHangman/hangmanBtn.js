import React from "react";
// import "./style.css";

function HangmanBtn(props) {
  return (
    <button onClick={props.onClick} className={`letter-btns ${props["data-value"]}`} {...props} >
      {props.name}
    </button>
  );
}

export default HangmanBtn;
