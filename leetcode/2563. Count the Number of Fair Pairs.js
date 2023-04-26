/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
// TLE
// var countFairPairs = function(nums, lower, upper) {
//   nums.sort((a, b) => a - b);
//   console.log(nums);
//   let result = 0, s = 1, e = nums.length - 1;
//   for (let i = 0 ; i < nums.length ; i++) {
//     while (i >= s || nums[i] + nums[s] < lower) s++;
//     while (nums[i] + nums[e] > upper) e--;
//     console.log(i, s, e);
//     if (s > e) {
//       s = i + 2;
//       continue;
//     }
//     result += e - s + 1;
//     s = i + 2;
//   }

//   return result;
// };

// https://leetcode.com/problems/count-the-number-of-fair-pairs/solutions/3174181/two-pointers-2/?orderBy=most_votes
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
  nums.sort((a, b) => a - b);
  const countLessPair = (n) => {
    let result = 0, e = nums.length - 1;
    for (let s = 0 ; s < nums.length ; s++) {
      while (s < e && nums[s] + nums[e] > n) e--;
      if (s === e) break;
      result += e - s;
    }

    return result;
  }

  return countLessPair(upper) - countLessPair(lower - 1);
};

const nums = [2, 3, 4, 5, 6, 7, 9, 10], lower = 13, upper = 13;
console.log(countFairPairs(nums, lower, upper));