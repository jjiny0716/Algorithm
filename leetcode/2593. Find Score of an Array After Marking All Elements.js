/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function (nums) {
  const set = new Set();
  return nums
    .map((value, index) => [value, index])
    .sort((a, b) => a[0] - b[0])
    .reduce((score, [value, index]) => {
      if (set.has(index)) return score;

      for (let i = index - 1; i <= index + 1; i++) set.add(i);
      return score + value;
    }, 0);
};

const nums = [2, 3, 5, 1, 3, 2];
console.log(findScore(nums));
