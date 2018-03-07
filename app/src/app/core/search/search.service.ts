import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovieInput, Movie } from '@movies/models';
import { Results } from '@movies/models';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) { }

  public search(searchTerm: string): Observable<Array<Movie>> {
    return this.http.get<Results<IMovieInput>>(`search/movie?query=${searchTerm}`)
      .map(res => res.results.slice(0, 10).map(m => new Movie(m)));
  }
}

