import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MOVIES } from '../mocks';

@Injectable()
export class MovieService {

  constructor() { }

  getMovies() {
    return Observable.of(MOVIES);
  }

}
