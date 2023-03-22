/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
  nums.sort((a, b) => b - a)
  let pSum = 0, score = 0;
  for (const n of nums) {
    pSum += n;
    score += pSum > 0 ? 1 : 0;
  }

  return score;
};

const nums = [2,-1,0,1,-3,3,-3];
console.log(maxScore(nums));