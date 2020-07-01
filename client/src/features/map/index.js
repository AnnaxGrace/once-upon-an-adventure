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
        case 2:
            return 'sky'
        case 5:
            return 'wizard'
        case 6:
            return 'impassSky'
        case 7:
            return 'impassDirt'
        case 8:
            return 'rock'
        case 9:
            return 'tree'

            case 10:
                return 'castle0'
            case 11:
                return 'castle1'
            case 12:
                return 'castle2'
            case 13:
                return 'castle3'
            case 14:
                return 'castle4'
            case 15:
                return 'castle5'
            case 16:
                return 'castle6'
            case 17:
                return 'castle7'
            case 18:
                return 'castle8'
            case 19:
                return 'castle9'
            case 20:
                return 'castle10'
            case 21:
                return 'castle11'
            case 22:
                return 'castle12'
            case 23:
                return 'castle13'
            case 24:
                return 'castle14'
            case 25:
                return 'castle15'
            case 26:
                return 'castle16'
            case 27:
                return 'castle17'
            case 28:
                return 'castle18'
            case 29:
                return 'castle19'
            case 30:
                return 'castle20'
            case 31:
                return 'castle21'
            case 32:
                return 'castle22'

            case 33:
                return 'shop33'
            case 34:
                return 'shop34'
            case 35:
                return 'shop35'
            case 36:
                return 'shop36'
            case 37:
                return 'shop37'
            case 38:
                return 'shop38'
                
        
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
        className="map-thingy"
        style= {{
            position: 'relative',
            top: '0px',
            left: '0px',
            width:'1280px',
            height: '1280px',
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