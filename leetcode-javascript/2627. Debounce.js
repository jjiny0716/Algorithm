/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let timerId = 0;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), t);
  };
};

const log = debounce(console.log, 100);
log("hello!");
log("hello!");
log("hello!");