import React from 'react';
import { connect } from 'react-redux'
import { SPRITE_SIZE } from '../../config/constants'

import './styles.css'

function getTileSprite(type) {
    switch (type) {
        // Passable Tiles
        case 0:
            return 'carpet'
        case 1:
            return 'cliffBody'
        case 2:
            return 'cliffEdgeEdit'
        case 3:
            return 'sky'
        case 4:
            return 'grassPath'
        case 5:
            return 'dirtPath'
        case 6:
            return 'stonePath'
        case 7:
            return 'fakeTree'
        case 8:
            return 'returnToBook'
        case 9:
            return 'talkToJace'

        // Castle
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
            case 120:
                return 'castleWalls0'
            case 121:
                return 'castleWalls1'
            case 122:
                return 'castleGuard'
            case 123:
                return 'orc'
            case 124:
                return 'talkToOrc'
            case 125:
                return 'cabin0'
            case 126:
                return 'cabin1'
            case 127:
                return 'cabin2'
            case 128:
                return 'cabin3'
            case 129:
                return 'house0'
            case 130:
                return 'house1'

            // Forest
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
            case 131:
                return 'lakeBody'
            case 132:
                return 'lakeCorner0'
            case 133:
                return 'lakeCorner1'
            case 134:
                return 'lakeCorner2'
            case 135:
                return 'lakeCorner3'
            case 136:
                return 'lakeLeft'
            case 137:
                return 'lakeTop'
            case 138:
                return 'lakeRight'
            case 139:
                return 'lakeBottom'

            // Cliff
            case 39:
                return 'rock'
            case 40:
                return 'tree'
            case 41:
                return 'impassSky'
            case 42:
                return 'impassCliff'
            case 43:
                return 'wizard'
            case 44:
                return 'bigCloud0'
            case 45:
                return 'bigCloud1'
            case 46:
                return 'bigCloud2'
            case 47:
                return 'bigCloud3'
            case 48:
                return 'bigCloud4'
            case 49:
                return 'bigCloud5'
            case 50:
                return 'bigCloud6'
            case 51:
                return 'bigCloud7'
            
            case 52:
                return 'background0'
            case 53:
                return 'background1'
            case 54:
                return 'background2'
            case 55:
                return 'background3'
            case 56:
                return 'background4'
            case 57:
                return 'background5'
            case 58:
                return 'background6'
            case 59:
                return 'background7'
            case 60:
                return 'background8'
            case 61:
                return 'background9'
            case 62:
                return 'background10'
            case 63:
                return 'background11'
            case 64:
                return 'background12'
            case 65:
                return 'background13'
            case 66:
                return 'background14'
            case 67:
                return 'background15'
            case 68:
                return 'background16'
            case 69:
                return 'background17'
            case 70:
                return 'background18'
            case 71:
                return 'background19'
            case 72:
                return 'background20'
            case 73:
                return 'background21'
            case 74:
                return 'background22'
            case 75:
                return 'background23'
            case 76:
                return 'background24'
            case 77:
                return 'background25'
            case 78:
                return 'background26'
            case 79:
                return 'background27'
            case 80:
                return 'background28'
            case 81:
                return 'background29'
            case 82:
                return 'background30'
            case 83:
                return 'background31'
            case 84:
                return 'background32'
            case 85:
                return 'background33'
            case 86:
                return 'background34'
            case 87:
                return 'background35'
            case 88:
                return 'background36'
            case 89:
                return 'background37'
            case 90:
                return 'background38'
            case 91:
                return 'background39'
            case 92:
                return 'background40'
            case 93:
                return 'background41'
            case 94:
                return 'background42'
            case 95:
                return 'background43'
            case 96:
                return 'background44'
            case 97:
                return 'background45'
            case 98:
                return 'background46'
            case 99:
                return 'background47'
            case 100:
                return 'background48'
            case 101:
                return 'background49'
            case 102:
                return 'background50'
            case 103:
                return 'background51'
            case 104:
                return 'background52'
            case 105:
                return 'background53'
            case 106:
                return 'background54'
            case 107:
                return 'background55'
            case 108:
                return 'background56'
            case 109:
                return 'background57'
            case 110:
                return 'background58'
            case 111:
                return 'background59'
            case 112:
                return 'background60'
            case 113:
                return 'background61'
            case 114:
                return 'background62'
            case 115:
                return 'background63'
            case 116:
                return 'background64'
            case 117:
                return 'background65'
            case 118:
                return 'background66'
            case 119:
                return 'background67'
            case 140:
                return 'cliffEdge'
        
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
            width:'960px',
            height: '960px',
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