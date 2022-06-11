/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let result = Infinity;
  console.log(nums);

  for (let i = 0 ; i < nums.length - 2 ; i++) {
    let sum = nums[i] + nums[i + 1] + nums[nums.length - 1];
    let j = i + 1, k = nums.length - 1;
    while (j < k) {
      if (Math.abs(target - result) > Math.abs(target - sum)) result = sum;
      if (sum < target) {
        sum -= nums[j];
        j++;
        sum += nums[j];
      }
      else {
        sum -= nums[k];
        k--;
        sum += nums[k];
      }
    }
  }

  return result;
};

const nums = [-1,2,1,-4], target = 1;
console.log(threeSumClosest(nums, target));