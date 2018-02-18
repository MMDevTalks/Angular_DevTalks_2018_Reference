"use strict";
exports.__esModule = true;
function createStore(reducer, initialState) {
    var _currentState = initialState;
    var _subscribers = [];
    function dispatch(action) {
        _currentState = reducer(_currentState, action);
        _subscribers.forEach(function (s) { return s(); });
    }
    function subscribe(subscriber) {
        _subscribers.push(subscriber);
    }
    function getState() {
        return _currentState;
    }
    dispatch({ type: '@@INIT' });
    return {
        dispatch: dispatch,
        subscribe: subscribe,
        getState: getState
    };
}
exports.createStore = createStore;
var counterReducer = function (state, action) {
    if (state === void 0) { state = 0; }
    switch (action.type) {
        case 'INCREMENT':
            return state = state + 1;
        case 'DECREMENT':
            return state = state - 1;
        default:
            return state;
    }
};
var store = createStore(counterReducer, 0);
store.subscribe(function () {
    console.log(store.getState());
});
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
setTimeout(function () {
    store.dispatch({ type: 'INCREMENT' });
    store.dispatch({ type: 'INCREMENT' });
}, 2500);
