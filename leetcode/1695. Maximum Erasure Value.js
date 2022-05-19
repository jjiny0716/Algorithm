/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  let i = 0, j;
  const numberInSubArrayMap = {};
  let maxScore = 0,
    currentScore = 0;

  for (j = 0; j < nums.length; j++) {
    const num = nums[j];

    while (numberInSubArrayMap[num]) {
      numberInSubArrayMap[nums[i]] = false;
      currentScore -= nums[i++];
    }

    numberInSubArrayMap[num] = true;
    currentScore += num;
    maxScore = Math.max(maxScore, currentScore);
  }

  return maxScore;
};

const nums = [4, 2, 4, 5, 6];
console.log(maximumUniqueSubarray(nums));
