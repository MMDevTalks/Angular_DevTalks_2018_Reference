import { ICreateList } from '@movies/interfaces';
import { Movie, Results } from '@movies/models';
import { Action } from '@ngrx/store';

export const SELECT_MOVIE = '[Home] Select Movie';
export const GET_MOVIES = '[Home] Get Movies';
export const GET_FAVORITE_MOVIES = '[Home] Get Favorite Movies';
export const GET_MOVIES_SUCCESS = '[Home] Movies Received';
export const COLLECT_MOVIE = '[Home] Movie Collected';
export const TOGGLE_COLLECTING_MOVIES = '[Home] Toggle Collecting Movies';
export const STOP_COLLECTING_MOVIES = '[Home] Stop Collecting Movies';
export const TOGGLE_LIST_FORM = '[Home] Toggle List Form';
export const CREATE_LIST = '[Home] Create List';
export const CREATE_LIST_SUCCESS = '[Home] Create List Success';

export class SelectMovie implements Action {
    readonly type = SELECT_MOVIE;
    constructor(public payload: Movie) { }
}

export class GetMovies implements Action {
    readonly type = GET_MOVIES;
}

export class GetFavoriteMovies implements Action {
    readonly type = GET_FAVORITE_MOVIES;
}

export class GetMoviesSuccess implements Action {
    readonly type = GET_MOVIES_SUCCESS;
    constructor(public payload: Results<Movie>) {

    }
}
export class CollectMovie implements Action {
    readonly type = COLLECT_MOVIE;
    constructor(public payload: Movie) {
    }
}

export class ToggleCollectingMovies implements Action {
    readonly type = TOGGLE_COLLECTING_MOVIES;
}

export class StopCollectingMovies implements Action {
    readonly type = STOP_COLLECTING_MOVIES;
}

export class ToggleMovieListForm implements Action {
    readonly type = TOGGLE_LIST_FORM;
}

export class CreateList implements Action {
    readonly type = CREATE_LIST;
    constructor(public createListModel: ICreateList) {
    }
}

export type All
    = SelectMovie
    | GetMovies
    | GetFavoriteMovies
    | GetMoviesSuccess
    | CollectMovie
    | ToggleCollectingMovies
    | StopCollectingMovies
    | ToggleMovieListForm
    | CreateList;
