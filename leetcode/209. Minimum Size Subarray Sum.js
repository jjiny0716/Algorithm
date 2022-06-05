/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let s = 0, e;
  let sum = 0, result = Infinity;
  for (e = 0 ; e < nums.length ; e++) {
    sum += nums[e];
    while (sum >= target && s <= e) {
      result = Math.min(result, e - s + 1);
      sum -= nums[s];
      s++;
    }
  }

  return result === Infinity ? 0 : result;
};

const target = 11, nums = [1, 2, 3, 4, 5];
console.log(minSubArrayLen(target, nums));