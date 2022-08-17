/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimalKSum = function(nums, k) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0 ; i < nums.length ; i++) {
    if (nums[i - 1] === nums[i]) continue;
    const num = nums[i];
    if (num <= k) {
      sum += num;
      k++;
    }
    else break;
  }

  return k * (k + 1) / 2 - sum;
};

const nums = [96,44,99,25,61,84,88,18,19,33,60,86,52,19,32,47,35,50,94,17,29,98,22,21,72,100,40,84], k = 35;
console.log(minimalKSum(nums, k));