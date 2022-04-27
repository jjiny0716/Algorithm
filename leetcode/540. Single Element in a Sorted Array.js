/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let i = mid;
    if (nums[mid] === nums[mid - 1]) i -= 1;
    else if (nums[mid] !== nums[mid + 1]) return nums[i];

    if (i % 2 === 0) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
};

const nums = [3,3,7,7,10,11,11];
console.log(singleNonDuplicate(nums));