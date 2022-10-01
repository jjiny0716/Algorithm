/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
  let min = Infinity,
    minCount,
    max = -Infinity,
    maxCount;
  for (const num of nums) {
    if (num < min) {
      min = num;
      minCount = 1;
    } else if (num === min) minCount++;

    if (num > max) {
      max = num;
      maxCount = 1;
    } else if (num === max) maxCount++;
  }

  return min === max ? 0 : nums.length - minCount - maxCount;
};

const nums = [-71, -71, 93, -71, 40];
console.log(countElements(nums));
