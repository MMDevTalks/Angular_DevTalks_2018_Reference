
import * as Search from './search.actions';
import { SearchState } from './search.state';
export function search(state: SearchState =
    { searchResults: [], searching: false, resultsShown: false, selectedItemIndex: -1, searchString: null }, action: Search.All): SearchState {
    switch (action.type) {
        case Search.GET_SEARCH_RESULTS:
            return { ...state, searching: true, searchResults: [] };
        case Search.GET_SEARCH_RESULTS_SUCCESS:
            return { ...state, searching: false, searchResults: action.results, resultsShown: true };
        case Search.SHOW_RESULTS:
            return { ...state, resultsShown: true };
        case Search.HIDE_RESULTS:
            return { ...state, resultsShown: false };
        case Search.NAVIGATE_TO_ITEM:
            return { ...state, selectedItemIndex: action.navigationIndex };
        case Search.SEND_KEYS:
            return { ...state, searchString: action.searchString };
        default:
            return state;
    }

}
