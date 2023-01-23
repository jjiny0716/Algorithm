/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minSpaceWastedKResizing = function(nums, k) {
  const dp = new Map();

  const helper = (size, i = 0, resizeCount = k) => {
    if (dp.has(`${i} ${resizeCount}`)) return dp.get(`${i} ${resizeCount}`);

    if (resizeCount < 0) return Infinity;
    if (i === nums.length) return 0;
    if (size < nums[i]) return Infinity;

    let wastedSpace = size - nums[i] + helper(size, i + 1, resizeCount);
    let nextSize = 0;
    for (let j = i + 1 ; j < nums.length ; j++) {
      if (nums[j] > nextSize) {
        nextSize = nums[j];
        wastedSpace = Math.min(wastedSpace, size - nums[i] + helper(nextSize, i + 1, resizeCount - 1));
      }
    }

    dp.set(`${i} ${resizeCount}`, wastedSpace);
    return wastedSpace;
  }

  return nums.reduce((minSpaceWasted, n) => Math.min(minSpaceWasted, helper(n)), Infinity);
};
