import store from '../../config/store'
import { SPRITE_SIZE, SPRITE_SHEET_HEIGHT, SPRITE_SHEET_WIDTH, MAP_WIDTH, MAP_HEIGHT, HALF_GRID } from '../../config/constants'
import { walkingStone, walkingGrass, walkingGravel, impact1, rustlingFoliage, orcBabble, guardTalk, magicalJace } from '../sound/index'
import GameTextBox from "../../components/TextBox/GameTextBox"


function getNewPosition(oldPos, direction) {
    switch (direction) {
        case 'WEST':
            return [oldPos[0] - SPRITE_SIZE, oldPos[1]]
        case 'EAST':
            return [oldPos[0] + SPRITE_SIZE, oldPos[1]]
        case 'NORTH':
            return [oldPos[0], oldPos[1] - SPRITE_SIZE]
        case 'SOUTH':
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

function observeImpassable(oldPos, newPos, guardTalking, orcTalking, jaceTalking) {
    // console.log(gamestate)
    const tiles = store.getState().map.tiles
    const y = newPos[1] / SPRITE_SIZE
    const x = newPos[0] / SPRITE_SIZE
    const nextTile = tiles[y][x]
    console.log(nextTile)
    console.log("characters position", newPos)
    switch (nextTile) {
        case 0:  //Cliff Edge

            break;
        case 1: //Cliff Body

            break;
        case 2:  //Cliff Edge Edit?

            break;
        case 3:  //Sky

            break;
        case 4:  //grass
            walkingGrass.play();
            break;
        case 5:  //dirt
            walkingGravel.play();
            break;
        case 6:  //stone
            walkingStone.play();
            break;
        case 7:  //fake Tree
            rustlingFoliage.play();
            break;
        case 8:  //return to book

            break;
        case 43:  //talk to Jace
        magicalJace.play();
            jaceTalking()
        case 9:  //Enter Shop
            break;
        case 30:  //return to map page
            console.log("return to map page")
            break;
        case 31:  //return to map page
            console.log("return to map page")
            break;
        case 40:  //tree

            break;
        case 122:  //talk to Guard Tony
            guardTalk.play();
            guardTalking();
            //Story on side of page says "anna talked to guard"
            break;
        case 123:  //talk to Orc Vinnie
            orcBabble.play();
            orcTalking();
            //orc gives heart
            break;
        case 312:  //enter castle

            break;

    }

    if (nextTile > 32 && nextTile !== 122 && nextTile !== 123 && nextTile !== 43) {
        console.log("impact1")
        impact1.play()
    }

    return nextTile < 32
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

function attemptMove(direction, guardTalking, orcTalking, jaceTalking) {
    const oldPos = store.getState().player.position
    const newPos = getNewPosition(oldPos, direction)
    console.log(observeBoundaries(oldPos, newPos))
    console.log(oldPos, newPos)
    if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos, guardTalking, orcTalking, jaceTalking))
        dispatchMove(direction, newPos)
}


function handleKeyDown(e, guardTalking, orcTalking, jaceTalking) {
    e.preventDefault()
    switch (e.keyCode) {
        case 37:
            return attemptMove('WEST', guardTalking, orcTalking, jaceTalking);

        case 38:
            return attemptMove('NORTH', guardTalking, orcTalking, jaceTalking);

        case 39:
            return attemptMove('EAST', guardTalking, orcTalking, jaceTalking);

        case 40:
            return attemptMove('SOUTH', guardTalking, orcTalking, jaceTalking);

        default:
            console.log(e.keyCode)
    }
}


export { getNewPosition, getWalkIndex, getSpriteLocation, observeBoundaries, observeImpassable, dispatchMove, attemptMove, handleKeyDown }