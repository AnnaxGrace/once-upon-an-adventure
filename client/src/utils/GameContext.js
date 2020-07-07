import React from "react";

const GameContext = React.createContext({
  firstGuardTalk: true,
  firstCastle: false,
  permit: false,
  guardButtons: "hide",
  storyString: ""

});

export default GameContext;


