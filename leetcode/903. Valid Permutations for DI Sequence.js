/**
 * @param {string} s
 * @return {number}
 */
var numPermsDISequence = function(s) {
  const MOD = 10 ** 9 + 7;
  const n = s.length;
  const set = new Set();
  const dp = Array.from({ length: n + 1 }, () => new Array(n).fill(undefined));

  const dfs = (index, lastNum) => {
    if (index === n + 1) {
      return 1;
    }

    if (dp[index]?.[lastNum] !== undefined) {
      return dp[index][lastNum];
    }

    let [startIndex, endIndex] = [0, n];
    if (index !== 0 && s[index - 1] === 'D') [startIndex, endIndex] = [0, lastNum - 1];
    if (index !== 0 && s[index - 1] === 'I') [startIndex, endIndex] = [lastNum + 1, n];

    let result = 0;
    for (let i = startIndex ; i <= endIndex ; i++) {
      if (set.has(i)) continue;

      set.add(i);
      result = (result + dfs(index + 1, i)) % MOD;
      set.delete(i);
    }

    return dp[index][lastNum] = result;
  }

  return dfs(0);
};

const s = "IDDDIIDIIIIIIIIDIDID";
console.log(numPermsDISequence(s));