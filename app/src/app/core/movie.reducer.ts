import { Action } from 'app/core/redux';
export interface MoviesState {
    movies: Array<any>;
    loading: boolean;
    selectedMovie: any;
}
export function movies(state: MoviesState = { movies: [], selectedMovie: null, loading: false }, action: Action) {
    switch (action.type) {
        case 'SELECT_MOVIE':
            return { ...state, selectedMovie: action.payload };
        case 'GET_MOVIES':
            return { ...state, loading: true };
        case 'GET_MOVIES_SUCCESS':
            return { ...state, loading: false, movies: action.payload };
        default:
            break;
    }
}
