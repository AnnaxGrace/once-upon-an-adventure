//sets the initial state of the tiles
const initialState = {
    tiles: [],
}
//handles the addition/change of tiles to be displayed
const mapReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_TILES':
            return {
                ...action.payload
        }
        default:
            return state;
    }
}

export default mapReducer;