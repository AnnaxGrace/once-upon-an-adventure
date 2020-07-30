import { createStore, combineReducers } from 'redux';
import playerReducer from '../features/player/reducer'
import mapReducer from '../features/map/reducer';
//combines the player reducer and the map reducer to saved to the store
const rootReducer = combineReducers({
    player: playerReducer, 
    map: mapReducer,
})

const store = createStore (
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store;