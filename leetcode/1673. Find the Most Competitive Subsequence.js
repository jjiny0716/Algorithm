/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) {
  const stack = [];

  for (let i = 0 ; i < nums.length ; i++) {
    const num = nums[i];
    while (stack.length && stack.at(-1) > num && stack.length + nums.length - i - 1 >= k) stack.pop();
    if (stack.length < k) stack.push(num);
  }

  return stack.length >= k ? stack.slice(0, k) : nums.slice(-k);
};

const nums = [3,5,2,6], k = 2;
console.log(mostCompetitive(nums, k));