/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
  const dp = Array.from({ length: values.length });
  let result = 0;
  
  for (let i = 1 ; i < values.length ; i++) {
    dp[i] = Math.max(values[i - 1] + values[i] - 1, (dp[i - 1] - values[i - 1] + values[i] - 1) || 0);
    result = Math.max(result, dp[i]);
  }

  return result;
};

const values = [8,1,5,2,6];
console.log(maxScoreSightseeingPair(values));