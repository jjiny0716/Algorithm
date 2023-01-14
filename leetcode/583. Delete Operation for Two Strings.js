/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const dp = Array.from({ length: word1.length + 1 }, () => new Array(word2.length + 1).fill(0));
  for (let i = 0 ; i < word1.length ; i++) {
    for (let j = 0 ; j < word2.length ; j++) {
      dp[i + 1][j + 1] = word1[i] === word2[j] ? dp[i][j] + 1 : Math.max(dp[i][j + 1], dp[i + 1][j]);
    }
  }

  return word1.length + word2.length - 2 * dp[word1.length][word2.length];
};

const word1 = "leetcode", word2 = "etco";
console.log(minDistance(word1, word2));