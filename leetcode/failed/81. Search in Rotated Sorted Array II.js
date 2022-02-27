/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  if (nums.length === 1) return nums[0] === target;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    while (left < right && nums[left] === nums[left + 1]) left++;
    while (left < right && nums[right] === nums[right - 1]) right--;
    const mid = Math.floor((left + right) / 2);
    if (nums[left] >= nums[mid]) right = mid;
    else if (nums[left] < nums[mid]) left = mid;
    console.log(left, right);
  }

  const pivot = left;
  nums[0] <= target ? ([left, right] = [0, pivot]) : ([left, right] = [pivot + 1, nums.length - 1]);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) left = mid + 1;
    else if (nums[mid] > target) right = mid - 1;
    else return true;
  }

  return false;
};

(nums = [1,0,1,1,1]), (target = 0);
console.log(search(nums, target));

//  5 6 7 1	2 3 4 5 6
