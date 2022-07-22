/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
  const total = rolls.reduce((prev, cur) => prev + cur, 0);
  let totalMissing = mean * (rolls.length + n) - total;

  const result = [];
  while (totalMissing) {
    if (n < 0) return [];

    let num;
    if (totalMissing >= n + 6) num = 6;
    else if (totalMissing > n) num = totalMissing - n + 1;
    else num = 1;
    result.push(num);
    totalMissing -= num;
    n--;
  }

  return n === 0 ? result : [];
};

const rolls = [1, 5, 6], mean = 3, n = 4;
console.log(missingRolls(rolls, mean, n));