/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function(nums, target) {
  const map = new Map();
  for (const num of nums) map.set(num, (map.get(num) || 0) + 1);

  let result = 0;
  for (let i = 1 ; i < target.length ; i++) {
    const frontStr = target.slice(0, i);
    const backStr = target.slice(i, target.length);
    if (!map.has(frontStr) || !map.has(backStr)) continue;

    if (frontStr !== backStr) result += map.get(frontStr) * map.get(backStr);
    else result += map.get(frontStr) * (map.get(backStr) - 1);
  }

  return result;
};

const nums = ["1", "1", "1", "1"], target = "11";
console.log(numOfPairs(nums, target));