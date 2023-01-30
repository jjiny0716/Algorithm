/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function(nums) {
  let leftMax = nums[0];
  const rightMinArray = new Array(nums.length);
  rightMinArray[rightMinArray.length - 1] = nums.at(-1);
  for (let i = rightMinArray.length - 2 ; i > 1 ; i--) {
    rightMinArray[i] = Math.min(rightMinArray[i + 1], nums[i]);
  }

  let beauty = 0;
  for (let i = 1 ; i < nums.length - 1 ; i++) {
    if (leftMax < nums[i] && nums[i] < rightMinArray[i + 1]) beauty += 2;
    else if (nums[i - 1] < nums[i] && nums[i] < nums[i + 1]) beauty++;

    leftMax = Math.max(leftMax, nums[i]);
  }


  return beauty;
};

const nums = [1, 2, 3, 4, 5,6];
console.log(sumOfBeauties(nums));
