/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
  let result = 0;
  function getAll(lastIndex = -1, total = 0) {
    result += total;
    if (lastIndex === nums.length - 1) return;
    for (let i = lastIndex + 1 ; i < nums.length ; i++) {
      getAll(i, total ^ nums[i]);
    }
  }
  getAll();
  return result;
};

const nums = [5,1,6];
console.log(subsetXORSum(nums));