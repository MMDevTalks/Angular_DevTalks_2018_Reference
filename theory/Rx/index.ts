function mapFn<T>(this: Observable<T>, transformFn: Function): Observable<T> {
    const inputObservable = this;
    const outputObservable = Observable.create<T>((observer) => {
        return inputObservable.subscribe(new Observer<T>((data => {
            observer.next(transformFn(data));
        })))
    })
    return outputObservable;
}

function filterFn<T>(this: Observable<T>, condition: Function): Observable<T> {
    const inputObservable = this;
    const outputObservable = Observable.create<T>((observer) => {
        return inputObservable.subscribe(new Observer<T>((data => {
            if (condition(data)) {
                observer.next(data);
            }
        })))
    })
    return outputObservable;
}

function delayFn<T>(this: Observable<T>, duration: number): Observable<T> {
    const inputObservable = this;
    const outputObservable = Observable.create<T>((observer) => {
        return inputObservable.subscribe(new Observer<T>((data => {
            setTimeout(() => {
                observer.next(data);
            }, duration)
        })))
    })
    return outputObservable;
}
class Observable<T>{
    public map: (transformFn: Function) => Observable<T> = mapFn;
    public filter: (condition: Function) => Observable<T> = filterFn;
    public delay: (duration: number) => Observable<T> = delayFn;
    constructor(public subscribe: ((obsever: Observer<T>) => any)) { }
    static create<T>(subscribe: ((obsever: Observer<T>) => any)) {
        return new Observable(subscribe);
    }
}
class Observer<T>{
    constructor(
        public next: (value: T) => void,
        public error?: (err: any) => void,
        public complete?: () => void
    ) {

    }
}
Observable.create<number>((observer) => {
    document.addEventListener('mousemove', (e) => {
        observer.next(e.clientX);
    });
})
    .filter(x => x > 200)
    .subscribe(new Observer<number>((data) => {
        console.log(data);
    }));