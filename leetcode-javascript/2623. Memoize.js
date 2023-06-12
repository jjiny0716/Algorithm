/**
 * @param {Function} fn
 */
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const serializedArgs = JSON.stringify(args);
    if (cache.has(serializedArgs)) return cache.get(serializedArgs);
    
    const result = fn(...args);
    cache.set(serializedArgs, result);
    return result;
  };
}
