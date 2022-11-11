/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  const set = new Set();
  for (const n of nums) {
    if (set.has(n)) set.delete(n);
    set.add(n);
  }

  return [...set];
};