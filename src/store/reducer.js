import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actions";
import { movies } from "../movies";


const initialState = {
    favorites: [],
    movies: movies,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:

        // Eklenen filmin favori filmler dizisinde bulunup bulunmadığını kontrol etmeye yarayacak bir değişken tanımladım:
        const isAlreadyInFavorites = state.favorites.find((movie) => action.payload.id === movie.id)
        if (!isAlreadyInFavorites) {
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            } // Eğer , bulunmuyorsa, yani favori listedinde değilse, mevcut durumu güncelleştir.
        }    
        return state; //eğer bulunuyorsa, mevcut durumu geri döndür

        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter((movie) => (movie.id !== action.payload))  
            } //
        default: 
            return state;
    }
}

export default reducer;

