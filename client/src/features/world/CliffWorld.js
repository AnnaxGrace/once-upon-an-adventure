import React, { useState, useEffect } from 'react'
import Player from '../player';
import Map from '../map'
import API from "../../utils/API";
import { useParams } from "react-router-dom";
import handleKeydown, { handleKeyDown } from "../player/movement"

import { Cliffside } from '../../data/maps/1'
import store from '../../config/store'
import MusicBtn from '../../components/SoundBtns/MusicBtn';

//creates the cliff map
function CliffWorld(props) {
    let tiles = Cliffside
    
    const { id } = useParams();
    store.dispatch({
        type: 'ADD_TILES', payload: {
            tiles,
        }
    });
    const [userAvatar, setUserAvatar] = useState(null)
    useEffect(() => {
        API.UpdateSpritePlace("cliff", id).then(()=> {
        })
        API.getUserSprite(id).then(user => {
            const { sprite } = user.data[0].sprite[0]
            return setUserAvatar(sprite)
        })
    }, []);

    

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
            <MusicBtn />
            <Map />
            <Player avatar={props.avatar} avatarName={props.avatarName} />
        {/* onKeyDown={handleKeyboard} */}
        </div>
    )
}

export default CliffWorld;