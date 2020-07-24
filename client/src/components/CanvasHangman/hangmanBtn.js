import React from "react";

//component for class and value function for letter clickable buttons
function HangmanBtn(props) {
  return (
    <button onClick={props.onClick} className={`letter-btns ${props["data-value"]}`} {...props} >
      {props.name}
    </button>
  );
}

export default HangmanBtn;
