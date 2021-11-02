import { combineReducers } from 'redux';

import movieReducer from './movieReducer';

const rootReducer = combineReducers({
    movieState: movieReducer,
    // favoritesState: favoritesReducer
})

export default movieReducer;