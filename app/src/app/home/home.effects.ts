import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as HomeActions from './home.actions';
import { MovieService } from '@movies/services';
@Injectable()
export class HomeEffects {
  constructor(
    private _actions$: Actions,
    private _movieService: MovieService
  ) {}

  @Effect()
  getMovies$ = this._actions$
    .ofType(HomeActions.GET_MOVIES)
    .switchMap(action => this._movieService.getNowPlayingMovies())
    .map(movies => new HomeActions.GetMoviesSuccess(movies));
}
