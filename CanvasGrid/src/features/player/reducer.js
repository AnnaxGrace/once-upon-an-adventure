const initialState = {
    // 
    // position: [0, 192],
    // ForestLevel
    position: [0, 384],
    // 
    // position: [0, 512],
    spriteLocation: '0px 128px',
    direction: 'east'
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