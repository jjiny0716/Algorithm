/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (nums[left] > nums[right]) {
    const mid = Math.floor((left + right) / 2);
    if (mid === left || mid === right) break;
    if (nums[left] > nums[mid]) right = mid;
    else if (nums[mid] > nums[right]) left = mid;
  }

  // rotated
  if (nums[left] > nums[right]) {
    if (target >= nums[0]) [left, right] = [0, left];
    else [left, right] = [right, nums.length - 1];
  }
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) left = mid + 1;
    else if (nums[mid] > target) right = mid - 1;
    else return mid;
  }

  return -1;
};

console.log(search([3, 1], 1));

// 회전된 곳의 index를 찾는 더 간단한 방법. (최소값 찾기)
while (lo < hi) {
  const mid = Math.floor((lo + hi) / 2);
  if (A[mid] > A[hi]) lo = mid + 1;
  else hi = mid;
}
