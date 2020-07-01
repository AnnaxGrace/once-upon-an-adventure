import store from '../../config/store'
import { SPRITE_SIZE, SPRITE_SHEET_HEIGHT, SPRITE_SHEET_WIDTH, MAP_WIDTH, MAP_HEIGHT, HALF_GRID } from '../../config/constants'
import walking from '../sound/index'



export default function handleMovement(player) {


    function getNewPosition(oldPos, direction) {
        switch (direction) {
            case 'WEST':
                walking.play();
                return [oldPos[0] - SPRITE_SIZE, oldPos[1]]
            case 'EAST':
                walking.play();
                return [oldPos[0] + SPRITE_SIZE, oldPos[1]]
            case 'NORTH':
                walking.play();
                return [oldPos[0], oldPos[1] - SPRITE_SIZE]
            case 'SOUTH':
                walking.play();
                return [oldPos[0], oldPos[1] + SPRITE_SIZE]
        }
    }


    function getSpriteLocation(direction, walkIndex) {

        switch (direction) {
            case 'WEST':
                //rows are selected from bottom up...
                return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 3}px` //768px
            case 'EAST':
                return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 1}px`//640px
            case 'NORTH': ;
                return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 0}px`//576px
            case 'SOUTH':
                return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 2}px`//704px
        }
    }

    function getWalkIndex() {
        const walkIndex = store.getState().player.walkIndex

        return walkIndex >= 8 ? 0 : walkIndex + 1
    }

    function observeBoundaries(oldPos, newPos) {
        return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
            (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
    }

    function observeImpassable(oldPos, newPos) {
        const tiles = store.getState().map.tiles
        const y = newPos[1] / SPRITE_SIZE
        const x = newPos[0] / SPRITE_SIZE
        const nextTile = tiles[y][x]
        return nextTile < 5
    }

    function dispatchMove(direction, newPos) {
        const walkIndex = getWalkIndex()

        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: newPos,
                direction,
                walkIndex,
                spriteLocation: getSpriteLocation(direction, walkIndex),
            }

        })
    }

    function attemptMove(direction) {
        const oldPos = store.getState().player.position
        const newPos = getNewPosition(oldPos, direction)

        if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos))
            dispatchMove(direction, newPos)
    }


    function handleKeyDown(e) {
        e.preventDefault()
        switch (e.keyCode) {
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