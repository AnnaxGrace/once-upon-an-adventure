import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import walkSprite from './erik - fourLine.png'
// import API from "../../utils/API"
import { handleKeyDown } from "./movement"

const handleMovement = player => {
    return player
}

// const walkSprite = () => {
//     let postObj = {
//         sprite: "",
//         name: "",
//     }
//     API.findSprite(postObj)
// }

function Player(props) {
    useEffect(() => {
        window.addEventListener("keydown", e => handleKeyDown(e))
    },[])
    return(
        <div
        style={{
            position: 'absolute',
            top: props.position[1],
            left: props.position[0],
            backgroundImage: `url('${walkSprite}')`,
            backgroundPosition: props.spriteLocation,
            width: '64px',
            height: '64px'
        }}
        />
    );
};

function mapStateToProps(state) {
    return {
        ...state.player,
    }
}

export default connect(mapStateToProps)(handleMovement(Player));