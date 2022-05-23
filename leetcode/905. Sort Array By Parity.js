/**
 * @param {number[]} nums
 * @return {number[]}
 */
// unshift, push
var sortArrayByParity = function(nums) {
  const result = [];
  for (let num of nums) {
    if (num % 2 === 0) result.unshift(num);
    else result.push(num);
  }

  return result;
};

// 2 array
var sortArrayByParity = function(nums) {
  const even = [];
  const odd = [];
  for (let num of nums) {
    if (num % 2 === 0) even.push(num);
    else odd.push(num);
  }

  return [...even, ...odd];
};

// sort
var sortArrayByParity = function(nums) {
  return nums.sort((a, b) => (a % 2 === 0 && b % 2 === 1) ? -1 : 1);
};

const nums = [3,1,2,4];
console.log(sortArrayByParity(nums));