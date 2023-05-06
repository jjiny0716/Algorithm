/**
 * @param {number[]} nums
 * @return {number}
 */
var minImpossibleOR = function(nums) {
  const set = new Set(nums);
  for (let i = 1 ; ; i = i * 2) {
    if (!set.has(i)) return i;
  }
};