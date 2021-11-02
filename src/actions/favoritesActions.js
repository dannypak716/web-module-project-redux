export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';

export const toggleFavorites = (id) => {
    return({type: TOGGLE_FAVORITES, payload:id});
}

export const addFavorites = (id) => {
    return({type: ADD_FAVORITES, payload:id})
}

export const removeFavorites = (id) => {
    return ({type: REMOVE_FAVORITES, payload:id})
}