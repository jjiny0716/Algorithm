/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const bitCounts = [[1]];
  while (2 ** bitCounts.length - 1 < n) {
    bitCounts.push([...bitCounts[bitCounts.length - 1], ...bitCounts[bitCounts.length - 1].map(value => value + 1)]);
  }

  return [0, ...bitCounts.reduce((arr, bitCount) => [...arr, ...bitCount]).slice(0, n)];
};

const n = 86234;
console.log(countBits(n));


// 1
// 1 2
// 1 2 2 3
// 1 2 2 3 2 3 3 4