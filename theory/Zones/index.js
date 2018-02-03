System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function main() {
        foo();
        setTimeout(doSomething, 3000);
        bar();
        baz();
    }
    function foo() {
        for (var index = 0; index < 500; index++) {
            console.log('foo');
        }
    }
    function bar() {
        for (var index = 0; index < 500; index++) {
            console.log('bar');
        }
    }
    function baz() {
        for (var index = 0; index < 1200; index++) {
            console.log('baz');
        }
    }
    function doSomething() {
        for (var index = 0; index < 1000; index++) {
            console.log('doSomething');
        }
        setTimeout(function () { return throwPlease(); }, 2500);
    }
    function throwPlease() {
        throw new Error('Error');
    }
    var profilingZoneSpec, myZone;
    return {
        setters: [],
        execute: function () {
            profilingZoneSpec = (function () {
                var time = 0, 
                // use the high-res timer if available
                timer = performance ?
                    performance.now.bind(performance) :
                    Date.now.bind(Date);
                return {
                    name: 'Profile Zone',
                    onHandleError: function (parentZoneDelegate, currentZone, targetZone, error) {
                        console.log(error);
                        // console.log(error.longStack);
                        return true;
                    },
                    onInvoke: function (delegate, current, target, callback) {
                        var args = [];
                        for (var _i = 4; _i < arguments.length; _i++) {
                            args[_i - 4] = arguments[_i];
                        }
                        this.start = timer();
                        var delegation = delegate.invoke.apply(delegate, [target, callback].concat(args));
                        time += timer() - this.start;
                        return delegation;
                    },
                    onInvokeTask: function (delegate, current, target, task, applyThis, applyArgs) {
                        this.start = timer();
                        delegate.invokeTask(target, task, applyThis, applyArgs);
                        time += timer() - this.start;
                    },
                    time: function () {
                        return Math.floor(time * 100) / 100 + 'ms';
                    },
                    reset: function () {
                        time = 0;
                    }
                };
            }());
            myZone = Zone.current
                .fork(profilingZoneSpec)
                .fork(Zone.longStackTraceZoneSpec);
            myZone.run(main);
            document.body.addEventListener('click', function () {
                console.log(profilingZoneSpec.time());
            });
        }
    };
});
