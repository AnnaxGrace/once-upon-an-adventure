const initialState = {
    position: [64, 64],
    spriteLocation: '0px 64px',
    direction: 'south'
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