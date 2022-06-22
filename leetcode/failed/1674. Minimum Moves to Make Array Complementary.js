/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var minMoves = function(nums, limit) {
  const map = {};
  for (let i = 0 ; i < nums.length / 2 ; i++) {
    map[nums[i] + nums[nums.length - 1 - i]] = (map[nums[i] + nums[nums.length - 1 - i]] || 0) + 1;
  }

  let target, maxCount = 0;
  for (let [num, count] of Object.entries(map)) {
    if (num < 2 || num > limit * 2) continue;
    if (count > maxCount) {
      maxCount = count;
      target = Number(num);
    }
  }

  let result = 0;
  for (let i = 0 ; i < nums.length / 2 ; i++) {
    if (nums[i] + nums[nums.length - 1 - i] !== target) {
      console.log(nums[i] + nums[nums.length - 1 - i] - Math.min(nums[i], nums[nums.length - 1 - i]) + limit);
      if (nums[i] + nums[nums.length - 1 - i] - Math.min(nums[i], nums[nums.length - 1 - i]) + limit < target) result += 2; 
      else result += 1;
    }
  }

  return result;
};

const nums = [1,2,2,1], limit = 2;
console.log(minMoves(nums, limit));