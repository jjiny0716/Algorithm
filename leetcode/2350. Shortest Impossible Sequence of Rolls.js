/**
 * @param {number[]} rolls
 * @param {number} k
 * @return {number}
 */
var shortestSequence = function(rolls, k) {
  const set = new Set();
  let c = 1;
  for (const r of rolls) {
    set.add(r);
    if (set.size === k) {
      c++
      set.clear();
    }
  }
  return c;
};

const rolls = [4,2,1,2,3,3,2,4,1], k = 4;
console.log(shortestSequence(rolls, k));