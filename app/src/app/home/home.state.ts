import { Movie, Results } from '@movies/models';
export interface HomeState {
    movieResults: Results<Movie>;
    selectedMovie: Movie;
    loading: boolean;
    collectedMovies: Array<Movie>;
    isCollectingMovies: boolean;
    isMovieListFormShown: boolean;
}
