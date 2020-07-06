import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux'
import { useParams } from "react-router-dom";
// import walkSprite from '../../assets/sprites/gladiator-4row.png'
// import x from "../../assets/sprites/option2-4row.png"
import { handleKeyDown, observeImpassable } from "./movement"
import GameContext from "../../utils/GameContext";

// console.log(x)
console.log("this is gamestate")
// console.log(gameState)

const globalState = useContext(GameContext)

const handleMovement = player => {
    return player
}

function Player(props) {
    console.log(props.avatar)
    
    useEffect(() => {
        window.addEventListener("keydown", e =>{handleKeyDown(e)} )
    },[])
    observeImpassable(undefined, undefined, globalState)
    
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
