const initialState = {
    position: [0, 0],
    spriteLocation: '0px 70px',
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