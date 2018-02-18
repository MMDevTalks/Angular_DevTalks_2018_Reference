function mapFn(transformFn) {
    var inputObservable = this;
    var outputObservable = Observable.create(function (observer) {
        return inputObservable.subscribe(new Observer((function (data) {
            observer.next(transformFn(data));
        })));
    });
    return outputObservable;
}
function filterFn(condition) {
    var inputObservable = this;
    var outputObservable = Observable.create(function (observer) {
        return inputObservable.subscribe(new Observer((function (data) {
            if (condition(data)) {
                observer.next(data);
            }
        })));
    });
    return outputObservable;
}
function delayFn(duration) {
    var inputObservable = this;
    var outputObservable = Observable.create(function (observer) {
        return inputObservable.subscribe(new Observer((function (data) {
            setTimeout(function () {
                observer.next(data);
            }, duration);
        })));
    });
    return outputObservable;
}
var Observable = /** @class */ (function () {
    function Observable(subscribe) {
        this.subscribe = subscribe;
        this.map = mapFn;
        this.filter = filterFn;
        this.delay = delayFn;
    }
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
var Observer = /** @class */ (function () {
    function Observer(next, error, complete) {
        this.next = next;
        this.error = error;
        this.complete = complete;
    }
    return Observer;
}());
Observable.create(function (observer) {
    document.addEventListener('mousemove', function (e) {
        observer.next(e.clientX);
    });
})
    .filter(function (x) { return x > 200; })
    .subscribe(new Observer(function (data) {
    console.log(data);
}));
