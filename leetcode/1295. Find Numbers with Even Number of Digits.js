/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  return nums.filter(num => num.toString().length % 2 === 0).length;
};

const nums = [12,345,2,6,7896];
console.log(findNumbers(nums));