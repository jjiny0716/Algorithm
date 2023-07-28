/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function(n) {
  const evenOperation = (i) => i / 2;
  const oddOperation = (i) => n / 2 + (i - 1) / 2;
  let i = oddOperation(1), result = 1;
  while (i != 1) {
    i = i % 2 === 0 ? evenOperation(i) : oddOperation(i);
    result++;
  }

  return result;
};

console.log(reinitializePermutation(6));