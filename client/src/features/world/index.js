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
            const { sprite, name } = user.data[0].sprite[0]
            //userName = name
            setUserName(name);
            return setUserAvatar(sprite)
        })
    });


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