/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function(n) {
  if (n === 1) return 12;
  const MOD = 10 ** 9 + 7;
  let twoColorCount = 3, threeColorCount = 2;
  let result = 0;

  for (let i = 2 ; i < n ; i++) {
    [twoColorCount, threeColorCount] = [(twoColorCount * 3 + threeColorCount * 2) % MOD, (twoColorCount * 2 + threeColorCount * 2) % MOD];
  }
  result += (twoColorCount + threeColorCount) * 6 % MOD;

  twoColorCount = 2, threeColorCount = 2;
  for (let i = 2 ; i < n ; i++) {
    [twoColorCount, threeColorCount] = [(twoColorCount * 3 + threeColorCount * 2) % MOD, (twoColorCount * 2 + threeColorCount * 2) % MOD];
  }
  result += (twoColorCount + threeColorCount) * 6 % MOD;

  return result % MOD;
};

const n = 5000;
console.log(numOfWays(n));

// 색 2개 경우의 수 = 5 -> (3, 2)
// 색 3개 경우의 수 = 4 -> (2, 2)
