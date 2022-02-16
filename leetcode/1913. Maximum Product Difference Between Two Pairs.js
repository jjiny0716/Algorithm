/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  let max1 = 0, max2 = 0, min1 = 10001, min2 = 10001;
  for (let i = 0 ; i < nums.length ; i++) {
    if (nums[i] > max1) {
      max2 = max1;
      max1 = nums[i];
    }
    if (nums[i] > max2 && nums[i] !== max1) max2 = nums[i];
    if (nums[i] < min1) {
      min2 = min1;
      min1 = nums[i];
    }
    if (nums[i] < min2 && nums[i] !== min1) min2 = nums[i];
  }
  console.log(max1, max2, min1, min2);
  return (max1 * max2) - (min1 * min2);
};

console.log(maxProductDifference([1,6,7,5,2,4,10,6,4]));
