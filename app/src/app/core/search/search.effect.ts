import { Injectable } from '@angular/core';
import { MovieService } from '@movies/core/movie.service';
import * as RouterActions from '@movies/core/store/router.actions';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from 'app/core/store/app.state';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import * as SearchActions from './search.actions';
import { SearchService } from 'app/core/search/search.service';

@Injectable()
export class SearchEffects {

    constructor(
        private actions$: Actions,
        private movieService: MovieService,
        private store: Store<AppState>,
        private searchService: SearchService
    ) { }



    @Effect()
    searchResults$ = this.actions$
        .ofType<SearchActions.GetSearchResults>(SearchActions.GET_SEARCH_RESULTS)
        .switchMap(action =>
            this.searchService.search(action.searchString)
        )
        .flatMap(movies => [new SearchActions.GetSearchResultsSuccess(movies), new SearchActions.ShowResults()])

    @Effect()
    selectItem$ = this.actions$
        .ofType<SearchActions.SelectItem>(SearchActions.SELECT_ITEM)
        .withLatestFrom(this.store.map(as => as.search ? as.search.searchResults : []))
        .switchMap(([action, searchResults]) =>
            [new RouterActions.Go({ path: [{ outlets: { sidebar: `details/${searchResults[action.itemIndex].id}` } }] }),
            new SearchActions.ShowResults()
            ]
        )




}
