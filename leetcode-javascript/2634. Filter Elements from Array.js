/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  return arr.reduce((prev, cur, i) => {
    if (fn(cur, i)) prev.push(cur);
    return prev;
  }, []);
};