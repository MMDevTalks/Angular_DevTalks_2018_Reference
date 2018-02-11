import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/observable/forkJoin';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ICreateList } from 'app/shared/interfaces/icreate-list';

const API_KEY = 'ca49bfda426c4e87678009d2dfc4361e';
@Injectable()
export class MovieService {

  constructor(private _http: HttpClient) { }

  getNowPlayingMovies() {
    const params = new HttpParams();
    return this._http.get(`movie/now_playing`)
      .map((response: any) =>
        response.results
      );
  }

  getMovieById(id: string) {
    return this._http.get(`movie/${id}`);
  }

  addMovieToList(movie: any, listId: number) {
    return this._http
      .post<{ list_id: number }>(`list/${listId}/add_item`, { media_id: movie.id });
  }

  createList(createListDTO: { list: ICreateList, movies: Array<any> }) {
    return this._http.post(`list`, createListDTO.list)
      .switchMap((res: any) =>
        Observable.forkJoin(createListDTO.movies.map(m => this.addMovieToList(m, res.list_id)))
          .mapTo(res.list_id)
      );
  }
}

