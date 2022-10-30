/**
 * @param {number[]} nums
 * @param {number} space
 * @return {number}
 */
var destroyTargets = function(nums, space) {
  const map = new Map();
  for (const n of nums) {
    const remainder = n % space;
    map.set(remainder, (map.get(remainder) || 0) + 1);
  }

  let maxCount = 0, minValue = Infinity; 
  for (const n of nums) {
    const count = map.get(n % space);
    if (count > maxCount) {
      maxCount = count;
      minValue = n;
    }
    else if (count === maxCount && n < minValue) minValue = n;
  }

  return minValue;
};

const nums = [1, 5, 3, 2, 2], space = 2;
console.log(destroyTargets(nums, space));