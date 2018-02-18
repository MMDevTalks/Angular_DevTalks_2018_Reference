import { InjectionToken } from '@angular/core';

export function createStore(reducer: Function, initialState?: any) {
    let _currentState = initialState;
    const _subscribers: Array<Function> = [];
    function dispatch(action: Action) {
        _currentState = reducer(_currentState, action);
        _subscribers.forEach(s => s());
    }

    function subscribe(subscriber: Function) {
        _subscribers.push(subscriber);
    }
    function getState() {
        return _currentState;
    }

    dispatch({ type: '@@INIT' });

    return {
        dispatch,
        subscribe,
        getState

    };
}

export interface Store {
    dispatch: (action: Action) => void;
    subscribe: (subscribe: Function) => void;
    getState: () => any;
}

export interface Action {
    type: string;
    payload?: any;
}
