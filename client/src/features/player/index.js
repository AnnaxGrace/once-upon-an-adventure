import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { useParams } from "react-router-dom";
// import walkSprite from '../../assets/sprites/gladiator-4row.png'
// import x from "../../assets/sprites/option2-4row.png"
import { handleKeyDown } from "./movement"

// console.log(x)

const handleMovement = player => {
    return player
}

function Player(props) {
    console.log(props.avatar)
    
    useEffect(() => {
        window.addEventListener("keydown", e => handleKeyDown(e))
    },[])
    
   if (!props.avatar) {
       return <h1>Loading...</h1>
   }
    
    return(
        <div    
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
    );
};

function mapStateToProps(state) {
    return {
        ...state.player,
    }
}

export default connect(mapStateToProps)(handleMovement(Player));