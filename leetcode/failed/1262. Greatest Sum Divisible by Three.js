/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function (nums) {
  let maxRemainders = [0, 0, 0];
  for (const num of nums) {
    maxRemainders = [
      Math.max(maxRemainders[0], maxRemainders[2 - (2 + num) % 3] + num),
      Math.max(maxRemainders[1], maxRemainders[2 - (1 + num) % 3] + num),
      Math.max(maxRemainders[2], maxRemainders[2 - num % 3] + num),
    ];

    console.log(maxRemainders);
  }

  return maxRemainders[0];
};

const nums = [3, 6, 5, 1, 8];
console.log(maxSumDivThree(nums));


// 0
// 0 1 2

// 1
// 2 0 1

// 2
// 1 2 0