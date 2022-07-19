/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {
  const map = {};
  for (let i = 0 ; i < nums.length ; i++) {
    map[nums[i]] = i;
  }

  for (let [target, result] of operations) {
    nums[map[target]] = result;
    map[result] = target;
  }

  return nums;
};

const nums = [1,2,4,6], operations = [[1,3],[4,7],[6,1]];
console.log(arrayChange(nums, operations));