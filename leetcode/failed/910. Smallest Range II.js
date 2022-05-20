/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function(nums, k) {
  const avg = (nums.reduce((prev, cur) => prev + cur, 0)) / nums.length;

  nums = nums.map((num) => {
    if (num === avg) {
      if (nums.reduce((prev, cur) => prev += cur < avg ? 1 : 0, 0) > nums.length / 2) return num + k;
      else return num - k;
    }
    else if (num < avg) {
      return num + k;
    }
    else {
      return num - k;
    }
  });
  console.log(nums);
  return Math.max(...nums) - Math.min(...nums);
};

const nums = [1,3,6], k = 3;
console.log(smallestRangeII(nums, k));