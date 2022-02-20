/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if ((nums[mid - 1] < nums[mid] || nums[mid - 1] === undefined) && (nums[mid] > nums[mid + 1] || nums[mid + 1] === undefined)) return mid;
    else if ((nums[mid - 1] < nums[mid] || nums[mid - 1] === undefined) && (nums[mid] < nums[mid + 1] && nums[mid + 1] !== undefined)) left = mid + 1;
    else if ((nums[mid - 1] > nums[mid] && nums[mid - 1] !== undefined) && (nums[mid] > nums[mid + 1] || nums[mid + 1] === undefined)) right = mid - 1;
    else left = mid + 1;
  }
};

const nums = [3,1,2]
console.log(findPeakElement(nums));

// other
// 오름차순, 내림차순, peak,등의 범위3에서 4개의 조건을 정의하는것 = 범위 2개에서 2개의 조건을 정의하는것
var findPeakElement2 = function(nums) {
  let left = 0, right = nums.length-1, mid;
  while(left < right) {
      mid = Math.floor((right+left)/2);
      if(nums[mid] > nums[mid+1]) right = mid;
      else left = mid+1;
  }
  return left;
};