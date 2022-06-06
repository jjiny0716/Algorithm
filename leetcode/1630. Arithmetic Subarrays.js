/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  const result = [];
  for (let i = 0; i < l.length; i++) {
    result.push(isArithmeticArray(nums.slice(l[i], r[i] + 1).sort((a, b) => a - b)));
  }

  function isArithmeticArray(arr) {
    if (arr.length <= 2) return true;
    const diff = arr[0] - arr[1];
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i] - arr[i + 1] !== diff) return false;
    }
    return true;
  }

  return result;
};

const nums = [4, 6, 5, 9, 3, 7],
  l = [0, 0, 2],
  r = [2, 3, 5];
console.log(checkArithmeticSubarrays(nums, l, r));
