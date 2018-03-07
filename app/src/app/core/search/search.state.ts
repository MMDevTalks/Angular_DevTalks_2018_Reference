import { Movie, Results } from '@movies/models';
export interface SearchState {
    searchResults: Array<Movie>;
    searching: boolean;
    resultsShown: boolean;
    selectedItemIndex: number;
    searchString: string;
}
