import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICreateList } from '@movies/interfaces';
import { IMovieInput, IMovieListInput, Movie, MovieList, Results } from '@movies/models';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class MovieService {

  constructor(private _http: HttpClient, private _authService: AuthService) { }

  getRecommendedMovies(id: number): Observable<Array<Movie>> {
    return this._http
      .get<Results<IMovieInput>>(`movie/${id}/recommendations`)
      .map(res => res.results.map(m => new Movie(m)));
  }

  getSimilarMovies(id: number): Observable<Array<Movie>> {
    return this._http
      .get<Results<IMovieInput>>(`movie/${id}/similar`)
      .map(res => res.results.map(m => new Movie(m)));
  }

  getMovieById(id: number): Observable<Movie> {
    return this._http.get<IMovieInput>(`movie/${id}`)
      .map(m => new Movie(m));
  }

  getNowPlayingMovies(): Observable<Results<Movie>> {
    return this._http.get<Results<IMovieInput>>(`movie/now_playing`)
      .map(res => ({ ...res, results: res.results.map(m => new Movie(m)) }));
  }

  getFavoritedMovies(): Observable<Results<Movie>> {
    return this._http
      .get<Results<IMovieInput>>(`account/${this._authService.currentAccount$.getValue().id}/favorite/movies`)
      .map(res => ({ ...res, results: res.results.map(m => new Movie(m)) }));
  }

  createMovieList(createListModel: ICreateList, movies: Array<Movie>) {
    return this._http
      .post<{ list_id: number }>(`list`, createListModel)
      .switchMap(res =>
        Observable.forkJoin(movies.map(m => this.addMovieToList(m, res.list_id)))
          .mapTo(res.list_id)
      );
  }

  addMovieToList(movie: Movie, listId: number) {
    return this._http
      .post<{ list_id: number }>(`list/${listId}/add_item`, { media_id: movie.id });
  }

  getMovieLists() {
    return this._http
      .get<Results<IMovieListInput>>(`account/${this._authService.currentAccount$.getValue().id}/lists`)
      .map(res => ({ ...res, results: res.results.map(m => new MovieList(m)) }));
  }

  getList(listId: string) {
    return this._http.get<{ name: string, items: Array<IMovieInput> }>(`list/${listId}`)
      .map(res => ({ name: res.name, items: res.items.map(m => new Movie(m)) }));
  }
}
