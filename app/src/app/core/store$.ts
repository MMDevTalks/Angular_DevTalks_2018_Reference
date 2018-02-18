import { Store, Action } from 'app/core/redux';
import { Observer, Observable } from 'app/core/rx';
import { InjectionToken } from '@angular/core';
export const StoreToken = new InjectionToken<Store$>('Store$');

export class Store$ {
    public state$: Observable<any>;
    constructor(private store: Store) {
        this.state$ = Observable.create((obs: Observer<any>) => {
            this.store.subscribe(_ => {
                obs.next(this.store.getState());
            });
        });
    }
    dispatch(action: Action) {
        this.store.dispatch(action);
    }
}
