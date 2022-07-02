/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
  const sum = nums.reduce((prev, cur) => prev += cur, 0) % p;
  let result = Infinity;
  const map = { 0: -1 };
  let cur = 0;

  for (let i = 0 ; i < nums.length ; i++) {
    cur = (cur + nums[i]) % p;
    map[cur] = i;
    if (map[(cur - sum + p) % p] !== undefined) {
      result = Math.min(result, i - map[(cur - sum + p) % p]);
    }
  }

  return result === Infinity || result === nums.length ? -1 : result;
};

const nums = [1,2,3], p = 7;
console.log(minSubarray(nums, p));

// (sum - subArraySum) % p === 0
// 4 === subArraySum % 6
// https://leetcode.com/problems/make-sum-divisible-by-p/discuss/854197/JavaC%2B%2BPython-Prefix-Sum