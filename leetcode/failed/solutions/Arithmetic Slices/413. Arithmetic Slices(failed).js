/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  const diffArr = [];
  for (let i = 0; i < nums.length - 1; i++) {
    diffArr.push(nums[i + 1] - nums[i]);
  }

  function getAllSliceCount(arr, i, j) {
    for (let size = j - i + 1; size >= 2 ; size--) {
      for (let idx = i ; idx <= j - size + 1; idx++) {
        if (arr.slice(idx, idx + size).every((value, index) => value === (arr[index - 1] ?? arr[index + 1]))) {
          return getSubSlicesCount(size) + getAllSliceCount(arr, i, idx - 1) + getAllSliceCount(arr, idx + size, j);
        }
      }
    }
    return 0;
  }

  function getSubSlicesCount(n) {
    let result = 0;
    for (let i = 2 ; i <= n ; i++) {
      result += n - i + 1;
    }
    return result;
  }

  return getAllSliceCount(diffArr, 0, diffArr.length - 1);
};

const nums = [1,2,3,8,9,10];
console.log(numberOfArithmeticSlices(nums));
