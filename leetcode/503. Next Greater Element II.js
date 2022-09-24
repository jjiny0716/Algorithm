/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = [];
  for (let i = 0 ; i < nums.length * 2 ; i++) {
    const index = i % nums.length;
    while (stack.length && stack.at(-1)[0] < nums[index]) {
      const [sValue, sIndex] = stack.pop();
      if (sIndex < result.length) result[sIndex] = nums[index];
    }
    stack.push([nums[index], i]);
  }

  return result;
};

const nums = [1,2,3,4,3];
console.log(nextGreaterElements(nums));