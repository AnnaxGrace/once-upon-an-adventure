import store from '../../config/store'
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants'
import { walkingStone, walkingGrass, walkingGravel, impact1, impact2, rustlingFoliage, orcBabble, guardTalk, magicalJace, annaAttacks, shopDoor, castleGate, waterSplash } from '../sound/index'
// import GameTextBox from "../../components/TextBox/GameTextBox"


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

let orcInteractions = 0;
let guardInteractions = 0;
let thiefInteractions = 0;
let wizardInteractions = 0;
function observeImpassable(oldPos, newPos, guardTalking, orcTalking, jaceTalking, thiefTalking, returnToWorldMap, enterShop, enterCastle) {
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
            walkingGrass.play();
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
        case 9:  //open
            break;
        case 43:  //talk to Jace
            magicalJace.stop()
            magicalJace.play()
            wizardInteractions++
            jaceTalking()
            break;
        case 30:  //return to map page
            returnToWorldMap();
            break;
        case 31:  //return to map page
            returnToWorldMap();
            break;
        case 40:  //tree
            break;
        case 122:  //talk to Guard Tony
            guardTalk.stop();
            guardTalk.play();
            guardInteractions++
            guardTalking();
            //Story on side of page says "anna talked to guard"
            break;
        case 123:  //talk to Orc Vinnie
            orcBabble.stop();
            orcBabble.play();
            orcInteractions++
            orcTalking();
            //orc gives heart
            break;
        case 132:
            waterSplash.stop();
            waterSplash.play()
            break;
        case 133:
            waterSplash.stop();
            waterSplash.play()
            break;
        case 134:
            waterSplash.stop();
            waterSplash.play()
            break;
        case 135:
            waterSplash.stop();
            waterSplash.play()
            break;
        case 136:
            waterSplash.stop();
            waterSplash.play()
            break;
        case 137:
            waterSplash.stop();
            waterSplash.play()
            break;
        case 138:
            waterSplash.stop();
            waterSplash.play()
            break;
        case 139:
            waterSplash.stop();
            waterSplash.play()
            break;

        case 247:
            shopDoor.play();
            setTimeout(() => { enterShop() }, 800)

            break;
        case 250:
            if (thiefInteractions >= 1) {
                window.location.reload()
            } else {
                annaAttacks.stop();
                annaAttacks.play();
                thiefInteractions++
                thiefTalking();
            }
            break;
        case 312:  //enter castle
            castleGate.play()
            setTimeout(() => { enterCastle() }, 1200)
            break;

    }

    if (nextTile > 32 && nextTile !== 43 && nextTile !== 122 && nextTile !== 123 && nextTile !== 132 && nextTile !== 133 && nextTile !== 134 && nextTile !== 135 && nextTile !== 136 && nextTile !== 137 && nextTile !== 138 && nextTile !== 139 && nextTile !== 247 && nextTile !== 250 && nextTile !== 312) {
        console.log("impact1")
        impact1.stop()
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


function attemptMove(direction, guardTalking, orcTalking, jaceTalking, thiefTalking, returnToWorldMap, enterShop, enterCastle) {
    const oldPos = store.getState().player.position
    const newPos = getNewPosition(oldPos, direction)
    console.log(observeBoundaries(oldPos, newPos))
    console.log(oldPos, newPos)
    if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos, guardTalking, orcTalking, jaceTalking, thiefTalking, returnToWorldMap, enterShop, enterCastle))
        dispatchMove(direction, newPos)
}


function handleKeyDown(e, guardTalking, orcTalking, jaceTalking, thiefTalking, returnToWorldMap, enterShop, enterCastle) {
    e.preventDefault()
    switch (e.keyCode) {
        case 37:
            return attemptMove('WEST', guardTalking, orcTalking, jaceTalking, thiefTalking, returnToWorldMap, enterShop, enterCastle);

        case 38:
            return attemptMove('NORTH', guardTalking, orcTalking, jaceTalking, thiefTalking, returnToWorldMap, enterShop, enterCastle);

        case 39:
            return attemptMove('EAST', guardTalking, orcTalking, jaceTalking, thiefTalking, returnToWorldMap, enterShop, enterCastle);

        case 40:
            return attemptMove('SOUTH', guardTalking, orcTalking, jaceTalking, thiefTalking, returnToWorldMap, enterShop, enterCastle);

        default:
            console.log(e.keyCode)
    }
}


export { getNewPosition, getWalkIndex, getSpriteLocation, observeBoundaries, observeImpassable, dispatchMove, attemptMove, handleKeyDown }