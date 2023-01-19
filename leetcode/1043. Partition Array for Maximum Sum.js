/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
  const dp = new Array(arr.length);
  const solve = (i) => {
    if (i === arr.length) return 0;
    if (dp[i]) return dp[i];

    let result = 0;
    let max = 0;
    for (let j = i ; j < Math.min(i + k, arr.length) ; j++) {
      max = Math.max(max, arr[j]);
      result = Math.max(result, max * (j - i + 1) + solve(j + 1));
    }

    return dp[i] = result;
  }

  return solve(0);
};

const arr = [1,15,7,9,2,5,10], k = 3;
console.log(maxSumAfterPartitioning(arr, k));