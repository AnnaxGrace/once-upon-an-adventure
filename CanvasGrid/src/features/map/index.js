import React from 'react';
import { connect } from 'react-redux'
import { SPRITE_SIZE } from '../../config/constants'

import './styles.css'

function getTileSprite(type) {
    switch (type) {
        case 0:
            return 'grass'
        case 1:
            return 'dirt'
        case 5:
            return 'rock'
        case 6:
            return 'castle'
        case 7:
            return 'tree'
        case 8:
            return 'shop'
    }
}

function MapTile(props) {
    return <div
    className={`tile ${getTileSprite(props.tile)}`}
    style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE
    }}
    />

}

function MapRow(props) {
    return <div className="row"
    style={{
        height: SPRITE_SIZE
    }}>
    {
        props.tiles.map( tile => <MapTile tile={tile} />)
    }
    </div>
}

function Map(props) {
    return (
        <div 
        style= {{
            position: 'relative',
            top: '0px',
            left: '0px',
            width:'640px',
            height: '640px',
            border: '4px solid black',
        }}
        >
            {
                props.tiles.map( row => <MapRow tiles={row} />)
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        tiles: state.map.tiles
    }
}

export default connect(mapStateToProps)(Map);