import { AppState } from '../app.state';
import * as HomeActions from './home.actions';
export interface HomeState {
  movies: Array<any>;
  loading: boolean;
  selectedMovie: any;
}

export interface State extends AppState {
  home: HomeState;
}
export function home(
  state: HomeState = { movies: [], selectedMovie: null, loading: false },
  action: HomeActions.All
): HomeState {
  switch (action.type) {
    case HomeActions.SELECT_MOVIE:
      return { ...state, selectedMovie: action.payload };
    case HomeActions.GET_MOVIES:
      return { ...state, loading: true };
    case HomeActions.GET_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.payload };
    default:
      return state;
  }
}
