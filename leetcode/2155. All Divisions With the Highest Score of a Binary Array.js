/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxScoreIndices = function(nums) {
  let leftScore = 0, rightScore = nums.reduce((prev, cur) => prev + cur, 0);
  let maxDivisionScore = 0, indexes = [];

  for (let i = 0 ; i <= nums.length ; i++) {
    const divisionScore = rightScore + leftScore; 
    if (divisionScore > maxDivisionScore) {
      maxDivisionScore = divisionScore;
      indexes = [i];
    }
    else if (divisionScore === maxDivisionScore) {
      indexes.push(i);
    }

    leftScore += nums[i] === 0 ? 1 : 0;
    rightScore -= nums[i];
  }

  return indexes;
};

const nums = [0,0,1,0];
console.log(maxScoreIndices(nums));