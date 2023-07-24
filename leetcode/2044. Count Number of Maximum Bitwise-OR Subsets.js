/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  const maxOr = nums.reduce((prev, cur) => prev | cur);

  const helper = (curOr, index) => {
    if (curOr === maxOr) return 0;
    if (index >= nums.length) return 1;

    return helper(curOr | nums[index], index + 1) + helper(curOr, index + 1);
  };
  return 2 ** nums.length - helper(0, 0);
};

const nums = [3, 2, 1, 5];
console.log(countMaxOrSubsets(nums));
