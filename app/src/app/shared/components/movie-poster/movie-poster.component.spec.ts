import { ChangeDetectionStrategy } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MovieFactory } from '@movies/mock-library/movie-factory.service';
import { Movie } from '@movies/models';
import { ButtonComponent } from './../button/button.component';
import { IconComponent } from './../icon/icon.component';
import { MoviePosterComponent } from './movie-poster.component';

describe('MoviePosterComponent', () => {
    let component: MoviePosterComponent;
    let fixture: ComponentFixture<MoviePosterComponent>;
    let movie: Movie;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MoviePosterComponent, ButtonComponent, IconComponent],
            providers: [
            ]
        })
            .overrideComponent(MoviePosterComponent, {
                set: { changeDetection: ChangeDetectionStrategy.Default }
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MoviePosterComponent);
        component = fixture.componentInstance;
        movie = MovieFactory.createFake();
        component.movie = movie;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(fixture.debugElement.query(By.css('.movie-poster__photo')).properties.src).toBe(`${movie.posterPath}`);
        expect(component).toBeTruthy();
    });
    it('should create and flip', () => {
        component.isSelected = true;
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.movie-poster-overview')).nativeElement.textContent).toContain(movie.overview);
        expect(component).toBeTruthy();
    });
    it('should create and respond to click event', () => {
        let selectedMovie: Movie;
        component.selectMovie.subscribe(sm => selectedMovie = sm);
        fixture.debugElement.query(By.css('.movie-poster')).triggerEventHandler('click', null);
        expect(selectedMovie).toBe(movie);
    });
    it('should create, flip and load details', () => {
        component.isSelected = true;
        fixture.detectChanges();
        let movieDetails: Movie;
        component.showMovieDetails.subscribe(sm => movieDetails = sm);
        expect(movieDetails).toBe(undefined);
        fixture.debugElement.query(By.css('.movie-poster__details-button')).triggerEventHandler('click', new Event('MouseEvent'));
        expect(movieDetails).toBe(movie);
    });
});
