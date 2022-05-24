/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const result = [];
  function makeAllCombination(k, last = 0, combination = [], sum = 0) {
    if (k === 0) {
      if (sum === n) result.push([...combination]);
    }

    for (let i = last + 1 ; i <= 9 ; i++) {
      if (i + sum > n) return;
      combination.push(i);
      makeAllCombination(k - 1, i, combination, sum + i);
      combination.pop();
    }
  }
  makeAllCombination(k);

  return result;
};

const k = 3, n = 9;
console.log(combinationSum3(k, n));