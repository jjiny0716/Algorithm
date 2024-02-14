/**
 * @param {number[]} nums
 * @param {number[]} pattern
 * @return {number}
 */
var countMatchingSubarrays = function(nums, pattern) {
  const patterns = [];
  for (i = 1 ; i < nums.length ; i++) {
    const n = nums[i] - nums[i - 1];
    if (n > 0) patterns.push(1);
    else if (n < 0) patterns.push(-1);
    else patterns.push(0);
  }
  
  let count = 0;
  for (let i = 0 ; i < patterns.length - pattern.length + 1 ; i++) {
    let flag = true;
    for (let j = i ; j < i + pattern.length ; j++) {
      if (patterns[j] !== pattern[j - i]) {
        flag = false;
        break;
      }
    }
    if (flag) count++;
  }
  
  return count;
};