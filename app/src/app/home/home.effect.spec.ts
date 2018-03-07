import * as RouterActions from '@movies/core/store/router.actions';
import 'rxjs/add/observable/timer';


import { StoreModule } from '@ngrx/store';
import { home } from 'app/home/home.reducer';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { MockMovieService } from './../../mock-library/movie.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MovieService } from '@movies/core/movie.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { MovieFactory } from 'mock-library/movie-factory.service';
import 'rxjs/add/operator/buffer';
import 'rxjs/add/operator/combineAll';
import 'rxjs/add/operator/skip';
import * as HomeActions from './home.actions';
import { HomeEffects } from './home.effect';

describe('My Effects', () => {
    let effects: HomeEffects;
    const actions = new ReplaySubject(1);

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                // any modules needed
                StoreModule.forRoot({ home }),
                HttpClientTestingModule
            ],
            providers: [
                HomeEffects,
                { provide: MovieService, useClass: MockMovieService },
                provideMockActions(() => actions),
            ],
        });

        effects = TestBed.get(HomeEffects);
    });

    it('CreateListEffect should work', () => {
        const action = new HomeActions.CreateList({ name: 'test', description: 'description', language: 'test' });
        actions.next(action);
        effects.createList$
            .combineAll()
            .subscribe(result => {
                expect(result).toEqual([
                    new HomeActions.StopCollectingMovies(),
                    new HomeActions.ToggleMovieListForm(),
                    new RouterActions.Go({ path: ['/home/lists', 1] })]);
            });
    });

    it('NowPlayingEffect should work', () => {
        const action = new HomeActions.GetMovies();
        actions.next(action);
        effects.geNowPlayingMovies$
            .subscribe(result => {
                expect(result).toEqual(
                    new HomeActions.GetMoviesSuccess({ results: [MovieFactory.createFake()], total_pages: 2, total_results: 10, page: 1 })
                );
            });
    });
});
