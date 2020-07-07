import React, { useContext, createContext } from "react";
//import GameContext from "../utils/GameContext";
import { GUARD_TALKING, ORC_TALKING } from "../utils/gameActions"

const guardInitialState = {
        firstGuardTalk: true,
        firstCastle: false,
        permit: false,
        guardButtons: "hide",
        storyString: ""
    };

const orcInitialState = {
    firstOrcTalk: true,
}

const GameContext = createContext(guardInitialState);
const { Provider } = GameContext;

export const reducer = (state, action) => {
       console.log(state);
       switch(action.type) {
        case GUARD_TALKING: 
            return guardText(state)
       }
   }

   
   console.log("hi")
   const guardText = state => {
       if ( state.firstGuardTalk === true) {
           console.log("hi")
           state.storyString += userName + " decides to talk to the guard. 'Hello.' says Guard Tony. 'Do you have a permit to enter Castle Richfield?' "
           guardButtons = "show"
           firstGuardTalk = false;
       }
       
   
       if (firstGuardTalk === false) {
           if (permit === true) {
               updateStory(userName + " decides to speak to Guard Tony. Guard Tony smiles and says 'It looks like you have a permit!', and goes inside the castle so that" + userName + " can choose to enter the castle. ")
           }
           if (permit === false) {
               console.log("secondTalk")
                updateStory(userName + " decides to speak to Guard Tony. Guard Tony frowns and shakes his head. 'Still no permit?', he says. 'I would try the shopkeeper. He usually has some. His store is in the forest' ")
               }
           }
       }
       
   }
    




//export default GuardTalking;
