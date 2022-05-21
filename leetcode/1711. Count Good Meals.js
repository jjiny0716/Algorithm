/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function (deliciousness) {
  const MOD = 10 ** 9 + 7;
  const powersOfTwo = [];
  for (let i = 0; i <= 21; i++) powersOfTwo.push(2 ** i);

  const countMap = {};
  let result = 0;
  for (let d of deliciousness) {
    for (let powerOfTwo of powersOfTwo) {
      result += countMap[powerOfTwo - d] || 0;
    }
    countMap[d] = (countMap[d] || 0) + 1;
  }

  return result % MOD;
};
