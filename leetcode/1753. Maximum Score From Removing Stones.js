/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function(a, b, c) {
  let result = 0;
  const arr = [a, b, c].sort((a, b) => a - b);
  while (true) {
    if (arr[0] === 0) break;
    arr[0]--;
    arr[2]--;
    result++;
    arr.sort((a, b) => a - b);
  }

  return result + Math.min(arr[1], arr[2]);
};

// https://leetcode.com/problems/maximum-score-from-removing-stones/discuss/?currentPage=1&orderBy=most_votes&query=