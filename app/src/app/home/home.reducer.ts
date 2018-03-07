
import { HomeState } from 'app/home/home.state';
import * as Home from './home.actions';
export function home(state: HomeState =
    { movieResults: null, loading: false, selectedMovie: null, collectedMovies: [], isCollectingMovies: false, isMovieListFormShown: false }, action: Home.All): HomeState {
    switch (action.type) {
        case Home.SELECT_MOVIE:
            return { ...state, selectedMovie: action.payload };
        case Home.GET_MOVIES:
            return { ...state, loading: true, movieResults: null };
        case Home.GET_FAVORITE_MOVIES:
            return { ...state, loading: true, movieResults: null };
        case Home.GET_MOVIES_SUCCESS:
            return { ...state, loading: false, movieResults: action.payload };
        case Home.COLLECT_MOVIE:
            return { ...state, collectedMovies: [...state.collectedMovies, action.payload] };
        case Home.TOGGLE_COLLECTING_MOVIES:
            return { ...state, collectedMovies: [], isCollectingMovies: !state.isCollectingMovies };
        case Home.STOP_COLLECTING_MOVIES:
            return { ...state, collectedMovies: [], isCollectingMovies: false };
        case Home.TOGGLE_LIST_FORM:
            return { ...state, isMovieListFormShown: !state.isMovieListFormShown };
        default:
            return state;
    }

}
