import store from '../../config/store'
import { SPRITE_SIZE, SPRITE_SHEET_HEIGHT, SPRITE_SHEET_WIDTH, MAP_WIDTH, MAP_HEIGHT, HALF_GRID } from '../../config/constants'

export default function handleMovement(player) {

    function getNewPosition(oldPos, direction) {

        switch(direction) {
            case 'WEST':
                return [ oldPos[0]-SPRITE_SIZE, oldPos[1] ]
            case 'EAST':
                return [ oldPos[0]+SPRITE_SIZE, oldPos[1] ]
            case 'NORTH':
                return [ oldPos[0], oldPos[1]-SPRITE_SIZE ]
            case 'SOUTH':
                return [ oldPos[0], oldPos[1]+SPRITE_SIZE ]
        }
    }

    // //Position on the image to be animated
let srcX;
let srcY;
//Defines the row to use to animate coresponding movement.
let trackLeft = 9;
let trackRight = 11;
let trackUp = 8;
let trackDown = 10;
let movingLeft = false;
let movingRight = false;
let movingUp = false;
let movingDown = true;
// Frame that will be rendered frist (measured by the position on x-axis)
let curretFrame = 0;

    function getSpriteLocation(direction) {
        switch(direction) {
            case 'WEST':
                return `0px 768px`
            case 'EAST':
                return `0px 640px`
            case 'NORTH':
                return `0px 576px`
            case 'SOUTH':
                return `0px 704px`
        }
    }

    function observeBoundaries(oldPos, newPos) {
        return (newPos[0] >= 0  && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
                (newPos[1] >= 0  && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
    }

    function observeImpassable(oldPos, newPos) {
        const tiles = store.getState().map.tiles
        const y = newPos[1]/SPRITE_SIZE
        const x = newPos[0]/SPRITE_SIZE
        const nextTile = tiles[y][x]
        return nextTile < 5
    }

    function dispatchMove(direction, newPos) {
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: newPos,
                direction,
                spriteLocation: getSpriteLocation(direction),
            }
        })
    }

    function attemptMove(direction) {
        const oldPos = store.getState().player.position
        const newPos = getNewPosition(oldPos, direction)

        if(observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos))
        dispatchMove(direction, newPos)
    }


    function handleKeyDown(e) {
        e.preventDefault()
        switch(e.keyCode) {
            case 37:
                return attemptMove('WEST');

            case 38:
                return attemptMove('NORTH');

            case 39:
                return attemptMove('EAST');

            case 40:
                return attemptMove('SOUTH');

            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    return player
}