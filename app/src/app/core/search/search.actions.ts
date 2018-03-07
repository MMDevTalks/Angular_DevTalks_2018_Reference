import { ICreateList } from '@movies/interfaces';
import { Movie, Results } from '@movies/models';
import { Action } from '@ngrx/store';

export const GET_SEARCH_RESULTS = '[Search] Get Results';
export const GET_SEARCH_RESULTS_SUCCESS = '[Search] Get Results Success';
export const SHOW_RESULTS = '[Search] Show Results';
export const HIDE_RESULTS = '[Search] Hide Results';
export const NAVIGATE_TO_ITEM = '[Search] Navigate To Item';
export const SELECT_ITEM = '[Search] Select Item';
export const SEND_KEYS = '[Search] Send Keys';

export class GetSearchResults implements Action {
    readonly type = GET_SEARCH_RESULTS;
    constructor(public searchString: string) { }
}

export class GetSearchResultsSuccess implements Action {
    readonly type = GET_SEARCH_RESULTS_SUCCESS;
    constructor(public results: Array<Movie>) { }
}

export class ShowResults implements Action {
    readonly type = SHOW_RESULTS;
}

export class HideResults implements Action {
    readonly type = HIDE_RESULTS;
}

export class NavigateToItem implements Action {
    readonly type = NAVIGATE_TO_ITEM;
    constructor(public navigationIndex: number) {

    }
}

export class SelectItem implements Action {
    readonly type = SELECT_ITEM;
    constructor(public itemIndex: number) { }
}

export class SendKeys implements Action {
    readonly type = SEND_KEYS;
    constructor(public searchString: string) { }
}


export type All
    = GetSearchResults
    | GetSearchResultsSuccess
    | ShowResults
    | HideResults
    | NavigateToItem
    | SelectItem
    | SendKeys;
