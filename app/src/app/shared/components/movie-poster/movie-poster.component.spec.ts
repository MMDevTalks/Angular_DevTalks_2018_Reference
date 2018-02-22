import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePosterComponent } from './movie-poster.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { home } from 'app/home/home.reducer';
import { ChangeDetectionStrategy } from '@angular/core';
import { By } from '@angular/platform-browser';
const MOVIE_POSTER_BASE_PATH = 'https://image.tmdb.org/t/p//w300/';
fdescribe('MoviePosterComponent', () => {
  let component: MoviePosterComponent;
  let fixture: ComponentFixture<MoviePosterComponent>;
  let movie: any;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [MoviePosterComponent],
        schemas: [NO_ERRORS_SCHEMA]
      })
        .overrideComponent(MoviePosterComponent, {
          set: {
            changeDetection: ChangeDetectionStrategy.Default
          }
        })
        .compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePosterComponent);
    component = fixture.componentInstance;
    movie = {
      poster_path: 'hey.jpg',
      overview: 'testtest'
    };
    component.movie = movie;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a poster_path', () => {
    expect(
      fixture.debugElement.query(By.css('.movie-poster__photo')).properties.src
    ).toBe(MOVIE_POSTER_BASE_PATH + 'hey.jpg');
  });

  it('should flip the movie poster', () => {
    expect(
      fixture.debugElement.query(By.css('.movie-poster--back'))
    ).toBeNull();
    component.isSelected = true;
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('.movie-poster--back'))
    ).not.toBeNull();
    expect(
      fixture.debugElement.query(By.css('.movie-poster--back')).nativeElement
        .textContent
    ).toContain('testtest');
  });

  it('should flip the movie poster after click', () => {
    let selectedMovie = null;
    component.selectMovie.subscribe(sm => (selectedMovie = sm));
    fixture.debugElement.query(By.css('.movie-poster')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(selectedMovie).toBe(movie);
    expect(
      fixture.debugElement.query(By.css('.movie-poster--back'))
    ).toBeNull();

  });
});
