/**
 * @param {number[]} nums
 * @return {number}
 */
// sort O(nlog(n))
// var findDuplicate = function (nums) {
//   nums.sort((a, b) => a - b);
//   for (let i = 0 ; i < nums.length - 1 ; i++) {
//     if (nums[i] === nums[i + 1]) return nums[i];
//   }

//   return -1;
// };

// 배열 마킹 O(n)
var findDuplicate = function (nums) {
  for (let num of nums) {
    const i = Math.abs(num) - 1;
    if (nums[i] < 0) return i + 1;
    nums[i] = -nums[i];
  }

  return -1;
};

const  nums = [1,3,4,2,2];
console.log(findDuplicate(nums));
