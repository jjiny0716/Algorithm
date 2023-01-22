/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  let oddCount = 0;
  let count = 0;
  let left = 0;
  let result = 0;

  for (let right = 0 ; right < nums.length ; right++) {
    if (nums[right] % 2 === 1) {
      oddCount++;
      if (oddCount >= k) {
        count = 1;
        while (nums[left++] % 2 === 0) count++;
        result += count;
      }
    }
    else if (oddCount >= k) result += count; 
  }

  return result;
};

const nums = [2,2,2,1,2,2,1,2,2,2], k = 2;
console.log(numberOfSubarrays(nums, k));