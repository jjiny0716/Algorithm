/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  return nums.reduce((sum, num) => sum += num, 0) - ((nums.length * (nums.length - 1)) / 2); 
};

console.log(findDuplicate([1,3,4,2,4]));
