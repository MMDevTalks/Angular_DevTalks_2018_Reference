import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppState } from '@movies/core/store/app.state';
import * as RouterActions from '@movies/core/store/router.actions';
import { Movie } from '@movies/models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as HomeActions from '../home.actions';
import { HomeState } from './../home.state';

@Component({
  selector: 'mm-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements OnInit {
  public homeState$: Observable<HomeState>;
  public loading: boolean;
  constructor(private _store: Store<AppState>) {
    this.homeState$ = this._store.select('home').share();
  }

  toggleMovieList(isCollectingMovies: boolean) {
    this._store.dispatch(new HomeActions.ToggleCollectingMovies());
  }

  collectMovie(movie) {
    this._store.select('home')
      .take(1)
      .map(hs => hs.collectedMovies)
      .filter(collectedMovies => collectedMovies.indexOf(movie) === -1)
      .subscribe(_ =>
        this._store.dispatch(new HomeActions.CollectMovie(movie)));
  }

  selectMovie(movie) {
    this._store.dispatch(new HomeActions.SelectMovie(movie));
  }

  showMovieDetails(movie: Movie) {
    this._store.dispatch(new RouterActions.Go({ path: [{ outlets: { sidebar: `details/${movie.id}` } }] }));
  }

  ngOnInit() {
    this._store.dispatch(new HomeActions.GetFavoriteMovies());
  }
}
