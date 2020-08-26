//sets the initial state of the player
const initialState = {
    position: [0, 448],
    spriteLocation: '0px 128px',
    direction: 'south',
    walkIndex: 0,

}

//handles any state change related to player movement
const playerReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'MOVE_PLAYER':
            return {
                ...action.payload
        }
        default:
            return state;
    }
}

export default playerReducer;