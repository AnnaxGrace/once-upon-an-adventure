const initialState = {
    // CastleLevel
    position: [0, 448],
    // ForestLevel
    // position: [64, 384],
    // CliffLevel
    // position: [64, 384],
    spriteLocation: '0px 128px',
    direction: 'south',
    walkIndex: 0,

}

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