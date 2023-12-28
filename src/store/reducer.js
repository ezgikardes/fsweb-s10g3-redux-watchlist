import { ADD_FAVORITE } from "./actions";
import { movies } from "../movies";


const initialState = {
    favorites: [],
    movies: movies,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default: 
            return state;
    }
}

export default reducer;