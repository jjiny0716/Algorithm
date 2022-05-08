function solution(numbers, target) {
  let result = 0;
  function makeAllPossibleCombination(sum = 0, i = 0) {
    if (i === numbers.length) {
      if (sum === target) result++;
      return;
    }

    makeAllPossibleCombination(sum + numbers[i], i + 1);
    makeAllPossibleCombination(sum - numbers[i], i + 1);
  }
  makeAllPossibleCombination();

  return result;
}
