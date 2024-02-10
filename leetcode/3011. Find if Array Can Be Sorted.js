/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function (nums) {
  const setbits = nums.map((num) =>
    num
      .toString(2)
      .split("")
      .reduce((prev, cur) => prev + (cur === "1" ? 1 : 0), 0)
  );

  let curSetBitMax = nums[0], lastSetBitMax = 0;
  for (let i = 1; i < nums.length; i++) {
    if (setbits[i - 1] != setbits[i]) lastSetBitMax = curSetBitMax;
    if (nums[i] < lastSetBitMax) return false;
    curSetBitMax = Math.max(curSetBitMax, nums[i]);
  }

  return true;
};

const nums = [3, 16, 8, 4, 2];
console.log(canSortArray(nums));
