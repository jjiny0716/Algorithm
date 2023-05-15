/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function(nums) {
  for (const row of nums) {
    row.sort((a, b) => a - b);
  }

  let score = 0;
  for (let x = 0 ; x < nums[0].length ; x++) {
    let maxNumberInColumn = 0;
    for (let y = 0 ; y < nums.length ; y++) {
      maxNumberInColumn = Math.max(maxNumberInColumn, nums[y][x]);
    }
    score += maxNumberInColumn;
  }

  return score;
};

const nums = [[7,2,1],[6,4,2],[6,5,3],[3,2,1]];
console.log(matrixSum(nums));