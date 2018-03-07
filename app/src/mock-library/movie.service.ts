
import { Injectable } from '@angular/core';
import { ICreateList } from '@movies/interfaces';
import { Movie } from '@movies/models';
import { Results } from 'app/shared/models/results.model';
import { MovieFactory } from 'mock-library/movie-factory.service';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MockMovieService {

    constructor() { }
    createMovieList(createListModel: ICreateList, movies: Array<Movie>) {
        return Observable.of(1);
    }

    getNowPlayingMovies(): Observable<Results<Movie>> {
        return Observable.of({ results: [MovieFactory.createFake()], total_pages: 2, total_results: 10, page: 1 });
    }
}
