/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const count = {};
  for (let n of nums) count[n] ? count[n]++ : count[n] = 1;
  return Object.entries(count).sort((a, b) => b[1] - a[1]).slice(0, k).map(entry => entry[0]);
};

nums = [1,1,1,2,2,3], k = 2
console.log(topKFrequent(nums, k));
