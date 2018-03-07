import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '@movies/core/store/app.state';
import { ICreateList } from '@movies/interfaces';
import { Movie } from '@movies/models';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';
import * as HomeActions from './home.actions';

@Component({
  selector: 'mm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public isCollectingMovies$: Observable<boolean>;
  public isMovieListFormShown$: Observable<boolean>;
  public collectedMovies$: Observable<Array<Movie>>;

  constructor(private _router: Router, private _store: Store<AppState>) {
    const _homeState$ = this._store.select('home');
    this.collectedMovies$ = _homeState$.map(homeState => homeState.collectedMovies);
    this.isCollectingMovies$ = _homeState$.map(homeState => homeState.isCollectingMovies);
    this.isMovieListFormShown$ = _homeState$.map(homeState => homeState.isMovieListFormShown);
  }
  toggleCreateListForm() {
    this._store.dispatch(new HomeActions.ToggleMovieListForm());
  }
  addMoviesToList(createListModel: ICreateList) {
    this._store.dispatch(new HomeActions.CreateList(createListModel));
  }
}
