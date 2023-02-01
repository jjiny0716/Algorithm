/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function(nums, limit, goal) {
  const total = nums.reduce((prev, cur) => prev + cur);
  const diff = Math.abs(goal - total);

  return Math.ceil(diff / limit);
};

const nums = [1,-1,1], limit = 3, goal = -4;
console.log(minElements(nums, limit, goal));