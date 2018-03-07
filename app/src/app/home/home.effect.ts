import { Injectable } from '@angular/core';
import { MovieService } from '@movies/core/movie.service';
import * as RouterActions from '@movies/core/store/router.actions';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from 'app/core/store/app.state';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import * as HomeActions from './home.actions';

@Injectable()
export class HomeEffects {

    constructor(
        private actions$: Actions,
        private movieService: MovieService,
        private store: Store<AppState>
    ) { }



    @Effect()
    createList$ = this.actions$
        .ofType<HomeActions.CreateList>(HomeActions.CREATE_LIST)
        .withLatestFrom(this.store.map(as => as.home ? as.home.collectedMovies : []))
        .switchMap(([action, collectedMovies]) =>
            this.movieService.createMovieList(action.createListModel, collectedMovies)
        )
        .flatMap(list_id =>
            [
                new HomeActions.StopCollectingMovies(),
                new HomeActions.ToggleMovieListForm(),
                new RouterActions.Go({ path: ['/home/lists', list_id] })
            ]);


    @Effect()
    geNowPlayingMovies$ = this.actions$
        .ofType<HomeActions.GetMovies>(HomeActions.GET_MOVIES)
        .switchMap(action =>
            this.movieService.getNowPlayingMovies()
        )
        .map(movies => new HomeActions.GetMoviesSuccess(movies));

    @Effect()
    getFavoriteMovies$ = this.actions$
        .ofType<HomeActions.GetFavoriteMovies>(HomeActions.GET_FAVORITE_MOVIES)
        .switchMap(action =>
            this.movieService.getFavoritedMovies()
        )
        .map(movies => new HomeActions.GetMoviesSuccess(movies));
}
