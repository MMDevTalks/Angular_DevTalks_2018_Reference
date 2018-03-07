import { Injectable } from '@angular/core';
import { IMovieInput, Movie } from '@movies/models';

const fakeInput: IMovieInput = {
    poster_path: 'test.jpg',
    adult: true,
    overview: 'overview',
    release_date: '11-02-1990',
    id: 1,
    title: 'title',
    popularity: 1232,
    vote_count: 2121,
    vote_average: 123,
};
@Injectable()
export class MovieFactory {
    static create() {
        return new Movie();
    }
    static createFake() {
        return new Movie(fakeInput);
    }
};
