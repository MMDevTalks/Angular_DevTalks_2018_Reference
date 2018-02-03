/// <reference path="./node_modules/zone.js/dist/zone.js.d.ts" />
import { } from 'zone.js'
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
  setTimeout(() => throwPlease(), 2500)

}
function throwPlease() {
  throw new Error('Error');
}
var profilingZoneSpec = (function () {
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
    onInvoke(delegate, current, target, callback, ...args) {
      this.start = timer();
      const delegation = delegate.invoke(target, callback, ...args);
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
let myZone = Zone.current
  .fork(profilingZoneSpec)
  .fork((Zone as any).longStackTraceZoneSpec);
myZone.run(main);

document.body.addEventListener('click', () => {
  console.log(profilingZoneSpec.time())
})