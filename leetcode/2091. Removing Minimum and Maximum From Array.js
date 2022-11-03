/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
  if (nums.length === 1) return 1;
  let min = nums[0], minIndex = 0, max = nums[0], maxIndex = 0;
  for (let i = 0 ; i < nums.length ; i++) {
    const n = nums[i];
    if (n < min) {
      min = n;
      minIndex = i;
    }
    if (n > max) {
      max = n;
      maxIndex = i;
    }
  }

  const leftIndex = Math.min(minIndex, maxIndex);
  const rightIndex = Math.max(minIndex, maxIndex);

  return Math.min(rightIndex + 1, nums.length - leftIndex, leftIndex + 1 + (nums.length - rightIndex));
};

const nums = [48,-49,-67,18,-59,-56,47,-26,-24,-73,-96,27,-2,-45];
console.log(minimumDeletions(nums));