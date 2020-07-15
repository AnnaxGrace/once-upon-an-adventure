import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { useParams } from "react-router-dom";
// import walkSprite from '../../assets/sprites/gladiator-4row.png'
// import x from "../../assets/sprites/option2-4row.png"
import { handleKeyDown, observeImpassable } from "./movement"

import "../../components/TextBox/TextBox.css";
import API from "../../utils/API";
import Exposition from "../../components/Exposition";
import WizardExposition from "../../components/Exposition/wizardExposition";
import "./gamePlay.css"
import CanvasSnake from '../../components/CanvasSnake';
import ThiefExposition from '../../components/Exposition/thiefExposition';


// console.log(x)
console.log("this is gamestate")
// console.log(gameState)


const handleMovement = player => {
    return player
}

let userName = "You";
let firstGuardTalk = "true";
let firstOrcTalk = "true";
let hasPermit = "false";
let firstJaceTalk = "true";
let firstThiefTalk = "true";
let varStoryString = "";


function Player(props) {
    // console.log(props.avatar)
    const { id } = useParams();

    const [gameState, setGameState] = useState({
        guardButtons: "hide",
        jaceButtons: "hide",
        snakeMinigame: "hide",
        thiefButtons: "hide",
        thiefButtons2: "hide",
        hangmanMiniGame: "hide",
        storyString: "",
    });
    
    useEffect(() => {
        window.addEventListener("keydown", e =>{handleKeyDown(e, guardTalking, orcTalking, jaceTalking, thiefTalking, returnToWorldMap, enterShop) } )
    },[])

    useEffect(() => {
        API.getUserSprite(id).then(user => {
            console.log(user.data[0].sprite[0].sprite)
            const { name, place, apiFirstGuardTalk, apiFirstOrcTalk, permit, apiFirstJaceTalk, apiFirstThiefTalk } = user.data[0].sprite[0]
            userName = name
            firstGuardTalk = apiFirstGuardTalk
            firstOrcTalk = apiFirstOrcTalk
            firstJaceTalk = apiFirstJaceTalk
            firstThiefTalk = apiFirstThiefTalk
            hasPermit = permit

            if ( place === "castle") {
                varStoryString = userName + " follows the path to the castle. Up close it is even more marvelous. " + userName + " notices a guard in front of the castle, glittering in the sunlight in their armor. " + userName + " also thinks they hear a voice very faintly saying '...find me...I'll give you hearts...' "
                setGameState({...gameState, storyString: varStoryString})
            }

            if ( place === "forest") {
                console.log("forest")
            }

            if ( place === "cliff") {
                varStoryString =  userName + " emerges from the path and looks around. There is a cliff that looks out over mountains. At the edge of the cliff is a magical looking person. " + userName + " wonders if they should go up and talk to them... " 
                setGameState({...gameState, storyString: varStoryString})
            }
        })
    }, []);

   
 

    function guardTalking() {
        switch(firstGuardTalk) {
            case false:
                if (hasPermit === true) {
                    varStoryString += " " + userName + " decides to speak to Guard Tony. Guard Tony smiles and says 'It looks like you have a permit!', and goes inside the castle so that" + userName + " can choose to enter the castle. "
                    setGameState({...gameState, storyString: varStoryString})
                    
                }
                if (hasPermit === false) {
                    varStoryString += " " + userName + " decides to speak to Guard Tony. Guard Tony frowns and shakes his head. 'Still no permit?', he says. 'I would try the shopkeeper. He usually has some. His store is in the forest.' "
                    setGameState({...gameState, storyString: varStoryString})
                }
                return;
            case true:
                varStoryString += " " + userName + " decides to talk to the guard. 'Hello.' says Guard Tony. 'Do you have a permit to enter Castle Richfield?' "
                setGameState({...gameState, guardButtons: "show", storyString: varStoryString})
                return;
            default:
                break;

        }
        
    }

    function orcTalking () {
        console.log(gameState.firstTalkOrc)
        if (firstOrcTalk === false) {
            varStoryString += " " + userName + " decides to speak to Orc Vinne. 'ALREADY GAVE HEARTS' he says. "
            setGameState({...gameState, storyString: varStoryString})
            return;
        }
        if (firstOrcTalk === true) {
            varStoryString += " " + userName + " decides to speak to Orc Vinnie. 'HI' says Orc Vinnie. 'IMMA GIVE YOU A HEART' "
            setGameState({...gameState, storyString: varStoryString})
            API.UpdateSpriteFirstOrcTalk(false, id).then(()=> {
                console.log("updated OrcTalk") 
                firstOrcTalk = false;           
            })
        }
        
    }

    function jaceTalking ()  {
    
        if (firstJaceTalk === false) {
            varStoryString += " 'Hi " + userName + " did you want to play my math game?' "
            setGameState({...gameState, storyString: varStoryString, jaceButtons: "show"})
            return;
        }
        if (firstJaceTalk === true) {
            varStoryString += " Wizard Jace says 'Hello " + userName + " a little birdy told me you were trying to help our kingdom! I can give you money if you play my magical math game!' "
            setGameState({...gameState, storyString: varStoryString, jaceButtons: "show"})
            API.UpdateSpriteFirstJaceTalk(false, id).then(()=> {
                console.log("updated JaceTalk")
                firstJaceTalk = false;            
            })
            
        }
       
    }

    function thiefTalking ()  {
        if (firstThiefTalk === true) {
            varStoryString += " Thief Anna grins and says 'GIMMIE YOUR MONEY!' "
            setGameState({...gameState, storyString: varStoryString, thiefButtons: "show"})
            API.UpdateSpriteFirstThiefTalk(false, id).then(()=> {
                console.log("updated thiefTalk")
                firstThiefTalk = false;            
            })
        }
        if (firstThiefTalk === false) {
            varStoryString += " Thief Anna says 'What do you want?' "
            setGameState({...gameState, storyString: varStoryString, thiefButtons2: "show"})
        }
    }


    function handleBtnClick  (event) {
                // Get the data-value of the clicked button
                const btnType = event.target.attributes.getNamedItem("data-value").value;
                
            
                if (btnType === "guardYes") {
                    console.log("button clicks")
                    if (hasPermit === true) {
                        console.log("reads if true")
                        varStoryString += " " + userName + " decides to speak to Guard Tony. Guard Tony smiles and says 'It looks like you have a permit!' and goes inside the castle so that " + userName + " can choose to enter the castle. "
                        setGameState({...gameState, guardButtons: "hide", storyString: varStoryString})
                        API.UpdateSpriteFirstGuardTalk(false, id).then(()=> {
                            console.log("updated GuardTalk")
                            firstGuardTalk = false;            
                        })
                    }
                    if (hasPermit === false) {
                        console.log("reads if false")
                        varStoryString += " " + userName + " says 'Sure! Sure I have a permit!' and tries to smile as innocently as possible. 'LIES? LYING to ME?' Guard Tony says. He is clearly very upset. 'You clearly don't have a permit. Come back when you do!' "
                        setGameState({ ...gameState, guardButtons: "hide", storyString: varStoryString})
                        API.UpdateSpriteFirstGuardTalk(false, id).then(()=> {
                            console.log("updated GuardTalk")
                            firstGuardTalk = false;            
                        })
                    }
                } 
                if (btnType === "guardNo") {
                    API.UpdateSpriteFirstGuardTalk(false, id).then(()=> {
                        console.log("updated GuardTalk")  
                        firstGuardTalk = false;          
                    })
                    varStoryString += " " + userName + " frowns and says 'no'. Guard Tony smiled helpfully 'I would try the shopkeeper. He usually has some. His store is in the forest' "
                    setGameState({...gameState, guardButtons: "hide", storyString: varStoryString})
                }
                if (btnType === "jaceYes") {
                    varStoryString += " " + userName + " says 'Math? Money? You bet!' "
                    setGameState({...gameState, snakeMinigame: "show", guardButtons: "hide", jaceButtons: "hide", storyString: varStoryString})
                }
                if (btnType === "jaceNo") {
                    varStoryString += " " + userName + " says, 'Not now, thanks. Maybe later! "
                    setGameState({...gameState, jaceButtons: "hide", storyString: varStoryString})
                }
                if (btnType === "thiefYes") {
                    varStoryString += " " + userName + " says 'okay!' and hands over all their money."
                    setGameState({...gameState, thiefButtons: "hide", storyString: varStoryString })
                    //player loses all money
                    //api money to 0
                }
                if (btnType === "thiefNo") {
                    varStoryString += " " + userName + " says 'no way!' The thief snickers and says 'Then you must beat me in a game of Hangman!' "
                    setGameState({...gameState, thiefButtons: "hide", storyString: varStoryString, hangmanMiniGame: "show"})
                }
                
    };

    function returnToWorldMap(){
        window.location.replace("/continue/" + id)
    }

    function enterShop(){
        window.location.replace("/store/" + id) 
    }

    function handleDoneButtonClick() {
        setGameState({...gameState, snakeMinigame: "hide", guardButtons: "hide", jaceButtons: "hide"})
        //Need to do all done here if/ for how much money for points, need to have points show up here
    }

    
   if (!props.avatar) {
       return <h1>Loading...</h1>
   }
    
    return(
        <>
        <div className="row"    
        style={{
            position: 'absolute',
            top: props.position[1],
            left: props.position[0],
            backgroundImage: `url('${require("../../assets/sprites/" + props.avatar)}')`,
            backgroundPosition: props.spriteLocation,
            width: '64px',
            height: '64px'
        }}
        />
        <div className="textBG">
                <div>
                    {gameState.storyString}
                </div>
        </div>
        <div className="guardBtns">
        <Exposition 
        handleBtnClick={handleBtnClick}
        hideState={gameState.guardButtons} />
        </div>

        <div className="jaceBtns">
            <WizardExposition
            handleBtnClick={handleBtnClick}
            hideState={gameState.jaceButtons} 
            />
        </div>

        <div className="thiefBtns">
            <ThiefExposition
            handleBtnClick={handleBtnClick}
            hideState={gameState.thiefButtons}
            />
        </div>
        
        <div className={gameState.snakeMinigame} id="snake" >
            <CanvasSnake 
            handleDoneButtonClick={handleDoneButtonClick}
            />
        </div>
                         
        </>
    );
};

function mapStateToProps(state) {
    return {
        ...state.player,
    }
}

export default connect(mapStateToProps)(handleMovement(Player));
