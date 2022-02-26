/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];
  const combination = [];
  // sum을 두는 대신에, 재귀함수에서 target을 빼나가면서 검사도 가능. sum === target => target === 0
  let sum = 0;

  function makeCombination(index) {
    if (sum === target) {
      result.push([...combination]);
      return;
    }
    else if (sum > target) return;

    for (let i = index ; i < candidates.length ; i++) {
      if (sum + candidates[i] > target) return;
      combination.push(candidates[i]);
      sum += candidates[i];
      makeCombination(i);
      sum -= combination.pop();
    }
  }

  makeCombination(0);

  return result;
};

candidates = [2,3,5], target = 8
console.log(combinationSum(candidates, target));