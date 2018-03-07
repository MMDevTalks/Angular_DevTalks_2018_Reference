import { ChangeDetectionStrategy } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import * as RouterActions from '@movies/core/store/router.actions';
import { MovieFactory } from '@movies/mock-library/movie-factory.service';
import { Store, StoreModule } from '@ngrx/store';
import { home } from 'app/home/home.reducer';
import { HomeState } from 'app/home/home.state';
import * as HomeActions from '../home.actions';
import { MoviePosterComponent } from './../../shared/components/movie-poster/movie-poster.component';
import { SharedModule } from './../../shared/index';
import { NowPlayingComponent } from './now-playing.component';

describe('NowPlayingComponent', () => {
    let component: NowPlayingComponent;
    let fixture: ComponentFixture<NowPlayingComponent>;
    let store: Store<HomeState>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                SharedModule,
                StoreModule.forRoot({ home })
            ],
            declarations: [NowPlayingComponent],
            providers: [
            ]
        })
            .overrideComponent(NowPlayingComponent, {
                set: { changeDetection: ChangeDetectionStrategy.Default }
            })
            .compileComponents();
    }));

    beforeEach(() => {
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        fixture = TestBed.createComponent(NowPlayingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create and get movies', () => {
        const action = new HomeActions.GetMovies();
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('should create and get movies', () => {
        const action = new HomeActions.GetMoviesSuccess({
            page: 1, total_results: 10, total_pages: 1,
            results: [MovieFactory.createFake(), MovieFactory.createFake(), MovieFactory.createFake()]
        });
        store.dispatch(action);
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.directive(MoviePosterComponent)).length).toBe(3);
    });

    it('should respond to click on a movie poster', () => {
        const _movies = [MovieFactory.createFake(), MovieFactory.createFake(), MovieFactory.createFake()];
        const action = new HomeActions.GetMoviesSuccess({
            page: 1, total_results: 10, total_pages: 1,
            results: _movies
        });
        store.dispatch(action);
        fixture.detectChanges();
        const clickOnMovieAction = new HomeActions.SelectMovie(_movies[0]);
        fixture.debugElement.query(By.directive(MoviePosterComponent)).query(By.css('.movie-poster')).triggerEventHandler('click', new Event('MouseEvent'));
        expect(store.dispatch).toHaveBeenCalledWith(clickOnMovieAction);
        fixture.detectChanges();
        const clickOnMovieDetailsAction = new RouterActions.Go({ path: [{ outlets: { sidebar: `details/${_movies[0].id}` } }] });
        fixture.debugElement.query(By.directive(MoviePosterComponent)).query(By.css('.movie-poster__details-button')).triggerEventHandler('click', new Event('MouseEvent'));
        expect(store.dispatch).toHaveBeenCalledWith(clickOnMovieDetailsAction);
    });
});
