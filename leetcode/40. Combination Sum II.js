/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];

  function allCombination(lastIndex = -1, comb = [], sum = 0) {
    if (sum > target) return;
    if (sum === target) {
      result.push([...comb]);
      return;
    }

    for (let i = lastIndex + 1; i < candidates.length; i++) {
      if (i > lastIndex + 1 && candidates[i - 1] === candidates[i]) continue;
      comb.push(candidates[i]);
      allCombination(i, comb, sum + candidates[i]);
      comb.pop();
    }
  }
  allCombination();

  return result;
};

const candidates = [14,6,25,9,30,20,33,34,28,30,16,12,31,9,9,12,34,16,25,32,8,7,30,12,33,20,21,29,24,17,27,34,11,17,30,6,32,21,27,17,16,8,24,12,12,28,11,33,10,32,22,13,34,18,12],
  target = 27;
console.log(combinationSum2(candidates, target));
