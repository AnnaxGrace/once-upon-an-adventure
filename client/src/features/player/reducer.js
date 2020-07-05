const initialState = {
    // CastleLevel
    // position: [0, 512],
    // ForestLevel
    // position: [0, 384],
    // CliffLevel
    position: [64, 448],
    spriteLocation: '0px 128px',
    direction: 'east',
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