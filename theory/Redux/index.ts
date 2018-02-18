export function createStore(reducer: Function, initialState?: any) {
    let _currentState = initialState;
    let _subscribers: Array<Function> = [];
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

    }
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
const counterReducer = (state = 0, action: Action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state = state + 1;
        case 'DECREMENT':
            return state = state - 1;
        default:
            return state;
    }
}
const store = createStore(counterReducer, 0)
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
setTimeout(() => {
    store.dispatch({ type: 'INCREMENT' })
    store.dispatch({ type: 'INCREMENT' })
}, 2500)