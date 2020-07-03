import React, { useState ,useEffect } from 'react'
import Player from '../player';
import Map from '../map'
import API from "../../utils/API";
import { useParams } from "react-router-dom";

import { tiles } from '../../data/maps/1'
import store from '../../config/store'

function World(props) {

    const { id } = useParams();
    store.dispatch({ type: 'ADD_TILES', payload: {
        tiles,
    }});
    const [userAvatar, setUserAvatar] = useState(null)
    useEffect(() => {
        API.getUserSprite(id).then(user => {
            // console.log(user.data[0].sprite[0].sprite)
            const { sprite } = user.data[0].sprite[0]
            console.log(sprite)
                return setUserAvatar(sprite)
        })
    }, []);

    console.log(userAvatar);

    return (
        <div
            id="world-thingy"
            style={{
                position: 'relative',
                width:'800px',
                height: '400px',
                margin: '20px auto',
        }}
        >
        <Map />
        <Player avatar={userAvatar}/>
        </div>
    )
}

export default World;