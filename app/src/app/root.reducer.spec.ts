import { routerReducer } from '@ngrx/router-store';
import { home } from 'app/home/home.reducer';
import { combineReducers } from '@ngrx/store';

const reducers = combineReducers<any, any>({ routerReducer, home });
fdescribe('RootReducer', () => {
  it('should handle actions', () => {
    let state;
    state = reducers(
      {
        routerReducer: {
          state: { url: '/home', params: {}, queryParams: {} },
          navigationId: 1
        },
        home: { movies: [], selectedMovie: null, loading: false, error: null }
      },
      { type: '[HOME] Get Movies' }
    );
    expect(state).toEqual({
      routerReducer: {
        state: { url: '/home', params: {}, queryParams: {} },
        navigationId: 1
      },
      home: { movies: [], selectedMovie: null, loading: true, error: null }
    });
  });
});
