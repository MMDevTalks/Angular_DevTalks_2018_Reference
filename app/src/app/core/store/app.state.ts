import { HomeState } from 'app/home/home.state';
import { SearchState } from 'app/core/search/search.state';

export interface AppState {
    home: HomeState;
    search: SearchState;
}
