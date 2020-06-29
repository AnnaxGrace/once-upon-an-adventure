import React from 'react';
import { connect } from 'react-redux'
import walkSprite from './tony.png'
import handleMovement from './movement'

function Player(props) {
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