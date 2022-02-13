function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return left;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const start = binarySearch(nums, target - 1);
  const end = binarySearch(nums, target + 1);
  console.log(start, end);

  const indexes = [];
  for (let i = start ; i <= end ; i++) {
    if (nums[i] === target) indexes.push(i);
  }
  console.log(indexes);
  return indexes.length !== 0 ? [indexes[0], indexes.pop()] : [-1, -1];
};

// console.log(searchRange([1], 4));
console.log(binarySearch([1,2,2,2,2,2,2,2,2,2,3], 2));