import React, { useState, useEffect } from 'react'
import Player from '../player';
import Map from '../map'
import API from "../../utils/API";
import { useParams } from "react-router-dom";
import { Forest } from '../../data/maps/1'
import store from '../../config/store'

//THIS MAP IS NOT IN USE 
function World(props) {
  let tiles = Forest
  

    const { id } = useParams();
    store.dispatch({
        type: 'ADD_TILES', payload: {
            tiles,
        }
    });
    const [userAvatar, setUserAvatar] = useState(null)
    const [userName, setUserName] = useState();
    useEffect(() => {
        API.getUserSprite(id).then(user => {
            console.log(user.data[0].sprite[0].sprite)
            const { sprite, name } = user.data[0].sprite[0]
            //userName = name
            setUserName(name);
            console.log(sprite)
            return setUserAvatar(sprite)
        })
    }, []);

    console.log(userAvatar);

    // function guardTalking() {
    //     if ( gameState.firstGuardTalk === true) {
    //         updateStory(userName + " decides to talk to the guard. 'Hello.' says Guard Tony. 'Do you have a permit to enter Castle Richfield?' ")
    //         setGameState({...gameState, guardButtons: "show"})
    //         setGameState({...gameState, firstGuardTalk: false})
    //     }
    //     if (gameState.firstGuardTalk === false) {
    //         if (gameState.permit === true) {
    //             updateStory(userName + " decides to speak to Guard Tony. Guard Tony smiles and says 'It looks like you have a permit!', and goes inside the castle so that" + userName + " can choose to enter the castle. ")
    //         }
    //         if (gameState.permit === false) {
    //              updateStory(userName + " decides to speak to Guard Tony. Guard Tony frowns and shakes his head. 'Still no permit?', he says. 'I would try the shopkeeper. He usually has some. His store is in the forest' ")
    //             }
    //         }
    // }

    // function updateStory (storyObjectPath) {
    //     setGameState({...gameState, storyString: gameState.storyString + " " + storyObjectPath)
               
    // }

    return (
        <div
            id="world-container"
            style={{
                position: 'relative',
                width: '968px',
                top: '35%',
                // marginTop: '50px',
                marginLeft: '3px',
                border: '4px solid black',
                borderRadius: '5px'
            }}
        >
        <Map />
            <Player avatar={props.avatar} avatarName={props.avatarName} name={userName}/>
        </div>
    )
}

export default World;