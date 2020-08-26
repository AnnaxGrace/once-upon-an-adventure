import React from 'react';
import { connect } from 'react-redux'
import { SPRITE_SIZE } from '../../config/constants'

import './styles.css'
//returns a string that is used as a class name to apply css background images to tiles
//based on the numerical value of the tile
function getTileSprite(type) {
    switch (type) {
        // Passable Tiles
        case 0:
            return 'cliffEdge sky'
        case 1:
            return 'cliffBody'
        case 2:
            return 'cliffEdgeEdit sky'
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
        // case 8: Not In Use
        //     return 'carpet'
        // case 9: Not In Use
        //     return 'shop37'

        //event tiles
      
        case 123:
            return 'orc'
        case 30: //sky map
            return 'returnToBookCliff'
        case 31: //castle map
            return 'returnToBookCastle'
        case 43:
            return 'wizard sky'
        case 247:
            return 'erikShop17'

        // Castle
        case 310:
            return 'castle0'
        case 311:
            return 'castle1'
        case 312:
            return 'castle2'
        case 313:
            return 'castle3'
        case 314:
            return 'castle4'
        case 315:
            return 'castle5'
        case 316:
            return 'castle6'
        case 317:
            return 'castle7'
        case 318:
            return 'castle8'
        case 319:
            return 'castle9'
        case 320:
            return 'castle10'
        case 321:
            return 'castle11'
        case 322:
            return 'castle12'
        case 323:
            return 'castle13'
        case 324:
            return 'castle14'
        case 325:
            return 'castle15'
        case 326:
            return 'castle16'
        case 327:
            return 'castle17'
        case 328:
            return 'castle18'
        case 329:
            return 'castle19'
        case 330:
            return 'castle20'
        case 331:
            return 'castle21'
        case 332:
            return 'castle22'
        case 120:
            return 'castleWalls0'
        case 121:
            return 'castleWalls1'
        case 122:
            return 'castleGuard'
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
            case 230:
                return 'erikShop0'
            case 231:
                return 'erikShop1'
            case 232:
                return 'erikShop2'
            case 233:
                return 'erikShop3'
            case 234:
                return 'erikShop4'
            case 235:
                return 'erikShop5'
            case 236:
                return 'erikShop6'
            case 237:
                return 'erikShop7'
            case 238:
                return 'erikShop8'
            case 239:
                return 'erikShop9'
            case 240:
                return 'erikShop10'
            case 241:
                return 'erikShop11'
            case 242:
                return 'erikShop12'
            case 243:
                return 'erikShop13'
            case 244:
                return 'erikShop14'
            case 245:
                return 'erikShop15'
            case 246:
                return 'erikShop16'
            case 248:
                return 'erikShop18'
            case 249:
                return 'erikShop19'
            case 250:
                return 'thief'
            case 251:
                return 'fireSlice'
            case 252:
                return 'fireSlice1'
            case 253:
                return 'fireSlice2'
            case 254:
                return 'fireSlice3'

        // Forest
        case 33:
            return 'shop33'
        case 34:
            return 'shop34'
        case 35:
            return 'shop35'
        case 36:
            return 'shop36'
        // case 37:
        //     return 'shop37'
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
            return 'wizard sky'
        case 44:
            return 'bigCloud0 sky'
        case 45:
            return 'bigCloud1 sky'
        case 46:
            return 'bigCloud2 sky'
        case 47:
            return 'bigCloud3 sky'
        case 48:
            return 'bigCloud4 sky'
        case 49:
            return 'bigCloud5 sky'
        case 50:
            return 'bigCloud6 sky'
        case 51:
            return 'bigCloud7 sky'

        case 52:
            return 'background0 sky'
        case 53:
            return 'background1 sky'
        case 54:
            return 'background2 sky'
        case 55:
            return 'background3 sky'
        case 56:
            return 'background4 sky'
        case 57:
            return 'background5 sky'
        case 58:
            return 'background6 sky'
        case 59:
            return 'background7 sky'
        case 60:
            return 'background8 sky'
        case 61:
            return 'background9 sky'
        case 62:
            return 'background10 sky'
        case 63:
            return 'background11 sky'
        case 64:
            return 'background12 sky'
        case 65:
            return 'background13 sky'
        case 66:
            return 'background14 sky'
        case 67:
            return 'background15 sky'
        case 68:
            return 'background16 sky'
        case 69:
            return 'background17 sky'
        case 70:
            return 'background18 sky'
        case 71:
            return 'background19 sky'
        case 72:
            return 'background20 sky'
        case 73:
            return 'background21 sky'
        case 74:
            return 'background22 sky'
        case 75:
            return 'background23 sky'
        case 76:
            return 'background24 sky'
        case 77:
            return 'background25 sky'
        case 78:
            return 'background26 sky'
        case 79:
            return 'background27 sky'
        case 80:
            return 'background28 sky'
        case 81:
            return 'background29 sky'
        case 82:
            return 'background30 sky'
        case 83:
            return 'background31 sky'
        case 84:
            return 'background32 sky'
        case 85:
            return 'background33 sky'
        case 86:
            return 'background34 sky'
        case 87:
            return 'background35 sky'
        case 88:
            return 'background36 sky'
        case 89:
            return 'background37 sky'
        case 90:
            return 'background38 sky'
        case 91:
            return 'background39 sky'
        case 92:
            return 'background40 sky'
        case 93:
            return 'background41 sky'
        case 94:
            return 'background42 sky'
        case 95:
            return 'background43 sky'
        case 96:
            return 'background44 sky'
        case 97:
            return 'background45 sky'
        case 98:
            return 'background46 sky'
        case 99:
            return 'background47 sky'
        case 100:
            return 'background48 sky'
        case 101:
            return 'background49 sky'
        case 102:
            return 'background50 sky'
        case 103:
            return 'background51 sky'
        case 104:
            return 'background52 sky'
        case 105:
            return 'background53 sky'
        case 106:
            return 'background54 sky'
        case 107:
            return 'background55 sky'
        case 108:
            return 'background56 sky'
        case 109:
            return 'background57 sky'
        case 110:
            return 'background58 sky'
        case 111:
            return 'background59 sky'
        case 112:
            return 'background60 sky'
        case 113:
            return 'background61 sky'
        case 114:
            return 'background62 sky'
        case 115:
            return 'background63 sky'
        case 116:
            return 'background64 sky'
        case 117:
            return 'background65 sky'
        case 118:
            return 'background66 sky'
        case 119:
            return 'background67 sky'
        case 140:
            return 'cliffEdge'

    }
}


//returns a div that represents one tile (64 x 64px) on the map, uses getTileSprite to return class name
function MapTile(props) {
    return <div
        className={`tile ${getTileSprite(props.tile)}`}
        style={{
            height: SPRITE_SIZE,
            width: SPRITE_SIZE
        }}
    />
}

//maps through tiles and creates rows 
function MapRow(props) {
    return <div className="row"
        style={{
            height: SPRITE_SIZE
        }}>
        {
            props.tiles.map((tile, i) => <MapTile tile={tile} key={i}/>)
        }
    </div>
}
//returns the div containing the map
function Map(props) {
    return (
        <div
            className="map-container"
            style={{
                position: 'relative',
                top: '0px',
                left: '15px',
                width: '960px',
                height: '960px',
            }}
        >
            {
                props.tiles.map((row, i) => <MapRow tiles={row} key={i} />)
            }
        </div>
    )
}

//uses state to set the value of tiles
function mapStateToProps(state) {
    return {
        tiles: state.map.tiles
    }
}

export default connect(mapStateToProps)(Map);