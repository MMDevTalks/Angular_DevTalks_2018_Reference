
function filterFn<T>(conditionFn: Function): Observable<T> {
    const inputObservable = this;
    const outputObservable = Observable.create((observer) => {
        return inputObservable.subscribe(new Observer((data) => {
            if (conditionFn(data)) {
                observer.next(data);
            }
        }));
    });
    return outputObservable;
}
function mapFn<T>(transformFn: Function): Observable<T> {
    const inputObservable = this;
    const outputObservable = Observable.create((observer) => {
        return inputObservable.subscribe(new Observer((data) => {
            observer.next(transformFn(data));
        }));
    });
    return outputObservable;
}
function delayFn<T>(duration: number): Observable<T> {
    const inputObservable = this;
    const outputObservable = Observable.create((observer) => {
        return inputObservable.subscribe(new Observer((data) => {
            setTimeout(() => {
                observer.next(data)
            }, duration);
        }));
    });
    return outputObservable;
}
export class Observable<T>{
    public map: (transformFn: Function) => Observable<T> = mapFn;
    public filter: (conditionFn: Function) => Observable<T> = filterFn;
    public delay: (duration: number) => Observable<T> = delayFn;
    constructor(public subscribe: ((observer: Observer<T>) => any)) {
    }
    static create<T>(subscribe: ((observer: Observer<T>) => any)) {
        return new Observable(subscribe);
    }
}

export class Observer<T> {
    constructor(
        public next: (value: T) => void,
        public error?: (err: any) => void,
        public complete?: () => void) {
    }
}
