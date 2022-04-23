/**
 * @param {number} n
 * @return {number}
 */
// bottom up
var countVowelStrings = function (n) {
  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: 5 }));
  function getResult(depth = 0, last = 0) {
    if (depth === n) return 1;
    let result = 0;
    for (let i = last ; i < 5 ; i++) {
      result += dp[depth + 1][i] ?? getResult(depth + 1, i);
    }
    return result;
  }

  return getResult();
};

const n = 33;
console.log(countVowelStrings(n));

// 규모가 작아서 for문으로도 가능?

// https://leetcode.com/problems/count-sorted-vowel-strings/discuss/918498/JavaC%2B%2BPython-DP-O(1)-Time-and-Space
// zzzzzzzzzzzzzzzzzzzz
// (n + 4) C 4
var countVowelStrings = function (n) {
  return (n + 1) * (n + 2) * (n + 3) * (n + 4) / 24;
};