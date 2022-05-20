/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function(nums, k) {
  const pSum = [0];
  for (let num of nums) {
    pSum.push(pSum.at(-1) + num);
  }

  const dp = Array.from({ length: nums.length + 1 }, () => Array.from({ length: k + 1 }));

  let result = 0;
  function makeAllCombination(i, r, avgSum) {
    if (r === 0) {
      if (i === pSum.length - 1) result = Math.max(result, avgSum);
      return;
    }

    if (dp[i][r] >= avgSum) return;
    dp[i][r] = avgSum;

    for (let j = i + 1 ; j < pSum.length - r + 1 ; j++) {
      const avg = (pSum[j] - pSum[i]) / (j - i);
      makeAllCombination(j, r - 1, avgSum + avg);
    }
  }
  makeAllCombination(0, k, 0);

  return result;
};

const nums = [9,1,2,3,9], k = 3;
console.log(largestSumOfAverages(nums, k));
