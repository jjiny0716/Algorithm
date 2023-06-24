/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  const initialCount = init;
  let count = init;

  const increment = () => ++count;
  const decrement = () => --count;
  const reset = () => (count = initialCount);

  return { increment, decrement, reset };
};
