/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
  function numToDigit(n) {
    let result = 0;
    while (n) {
      result += n % 10;
      n = Math.floor(n / 10);
    }

    return result;
  }

  const map = {};
  for (const num of nums) {
    if (!map[numToDigit(num)]) map[numToDigit(num)] = [];
    map[numToDigit(num)].push(num);
  }

  return Math.max(Object.values(map).reduce((result, nums) => {
    if (nums.length <= 1) return result;
    nums.sort((a, b) => b - a);
    return Math.max(result, nums[0] + nums[1]);
  }, -1));
};

const nums = [18,43,36,13,7];
console.log(maximumSum(nums));