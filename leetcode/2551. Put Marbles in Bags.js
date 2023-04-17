/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function(weights, k) {
  const newWeights = [];
  for (let i = 0 ; i < weights.length - 1 ; i++) {
    newWeights.push(weights[i] + weights[i + 1]);
  }
  newWeights.sort((a, b) => a - b);

  let min = 0;
  for (let i = 0 ; i < k - 1; i++) {
    min += newWeights[i];
  }

  let max = 0;
  for (let i = newWeights.length - 1 ; i > newWeights.length - k; i--) {
    max += newWeights[i];
  }

  return max - min;
};

const weights = [1, 2,6,4,7,5,2], k = 1;
console.log(putMarbles(weights, k));