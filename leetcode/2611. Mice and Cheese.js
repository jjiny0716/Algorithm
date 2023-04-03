/**
 * @param {number[]} reward1
 * @param {number[]} reward2
 * @param {number} k
 * @return {number}
 */
var miceAndCheese = function (reward1, reward2, k) {
  return reward1
    .map((value, i) => [value, reward2[i]])
    .sort((a, b) => b[0] - b[1] - (a[0] - a[1]))
    .reduce((prev, cur, i) => prev + (i < k ? cur[0] : cur[1]), 0);
};

const reward1 = [1, 1, 3, 4],
  reward2 = [4, 4, 1, 1],
  k = 2;
console.log(miceAndCheese(reward1, reward2, k));
