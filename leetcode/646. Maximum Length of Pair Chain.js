/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  pairs.sort((a, b) => a[1] - b[1]);

  let index = pairs[0][0];
  let result = 0;
  for (let pair of pairs) {
    if (pair[0] >= index) {
      index = pair[1] + 1;
      result++;
    }
  }

  return result;
};

pairs = [
  [-10, -8],
  [8, 9],
  [-5, 0],
  [6, 10],
  [-6, -4],
  [1, 7],
  [9, 10],
  [-4, 7],
];
console.log(findLongestChain(pairs));
