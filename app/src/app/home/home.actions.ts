import { Action } from '@ngrx/store';

export const SELECT_MOVIE = '[HOME] Select Movie';
export const GET_MOVIES = '[HOME] Get Movies';
export const GET_MOVIES_SUCCESS = '[HOME] Get Movies Success';

export class SelectMovie implements Action {
  readonly type = SELECT_MOVIE;
  constructor(public payload: any) {}
}

export class GetMovies implements Action {
  readonly type = GET_MOVIES;
}

export class GetMoviesSuccess implements Action {
  readonly type = GET_MOVIES_SUCCESS;
  constructor(public payload: Array<any>) {}
}

export type All = SelectMovie | GetMovies | GetMoviesSuccess;
