import React from "react";
// import "./battle.css"
// import SnakeGame from "../SnakeGame/index"


function Circle(props) {
    
        let ctx = props.c.getContext("2d");
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
        console.log("hi")
    
  }
  
  export default Circle;