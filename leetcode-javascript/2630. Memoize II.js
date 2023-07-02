/**
 * TLE O(1)
 * @param {Function} fn
 */
function memoize(fn) {
  const cache = new Map();
  const zeroArgsKey = Symbol();

  return function(...args) {
    if (!args.length) {
      if (cache.has(zeroArgsKey)) return cache.get(zeroArgsKey);
      const result = fn(...args);
      cache.set(zeroArgsKey, result);
      return result;
    }

    for (const key of cache.keys()) {
      if (key === zeroArgsKey) continue;
      if (key.length === args.length && key.every((elem, index) => elem === args[index])) return cache.get(key);
    }

    const result = fn(...args);
    cache.set(args, result);
    return result;
  }
}


const RESULT_KEY = Symbol();
const SEARCH_FAILED = Symbol();
/**
 * @param {Function} fn
 */
function memoize(fn) {
  const cache = new Map();

  const setResultInCache = (args, result) => {
    let currentMap = cache;
    for (const arg of args) {
      if (currentMap.has(arg)) currentMap = currentMap.get(arg);
      else {
        currentMap.set(arg, new Map());
        currentMap = currentMap.get(arg);
      }
    }

    currentMap.set(RESULT_KEY, result);
  }

  const findResultInCache = (args) => {
    let currentMap = cache;
    for (const arg of args) {
      currentMap = currentMap.get(arg);
      if (currentMap === undefined) return SEARCH_FAILED;
    }

    return currentMap.has(RESULT_KEY) ? currentMap.get(RESULT_KEY) : SEARCH_FAILED;
  }

  return function(...args) {
    const cached = findResultInCache(args);
    if (cached !== SEARCH_FAILED) return cached;
    
    const result = fn(...args);
    setResultInCache(args, result);
    return result;
  }
}