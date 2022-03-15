/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  function makeCombinations(last, comb) {
    if (comb.length === k) {
      result.push([...comb]);
      return;
    }
    for (let i = last + 1 ; i <= n ; i++) {
      comb.push(i);
      makeCombinations(i, comb);
      comb.pop();
    }
  }

  makeCombinations(0, []);
  return result;
};

const n = 20, k = 10;
console.log(combine(n, k));