/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const prefix = [1],
    suffix = [1];
  let acc = 1;
  for (let i = 0; i < nums.length; i++) {
    acc *= nums[i];
    prefix.push(acc);
  }
  acc = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    acc *= nums[i];
    suffix.push(acc);
  }
  prefix.push(1);
  suffix.push(1);
  suffix.reverse();

  const result = [];
  for (let i = 1; i < 1 + nums.length; i++) {
    result.push(prefix[i - 1] * suffix[i + 1]);
  }

  return result;
};

const nums = [-1,1,0,-3,3];
console.log(productExceptSelf(nums));
