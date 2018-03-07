import { environment } from '@movies/environment';
export class Movie {
    posterPath: string;
    adult: boolean;
    overview: string;
    releaseDate: string;
    id: number;
    title: string;
    popularity: number;
    voteCount: number;
    voteAverage: number;
    constructor(movieInput?: IMovieInput) {
        if (movieInput) {
            this.posterPath = environment.THEMOVIE_DB_IMAGE_BASE_PATH + movieInput.poster_path;
            this.adult = movieInput.adult;
            this.overview = movieInput.overview;
            this.releaseDate = movieInput.release_date;
            this.id = movieInput.id;
            this.title = movieInput.title;
            this.popularity = movieInput.popularity;
            this.voteCount = movieInput.vote_count;
            this.voteAverage = movieInput.vote_average;
        }
    }
}

export interface IMovieInput {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    id: number;
    title: string;
    popularity: number;
    vote_count: number;
    vote_average: number;
}
