/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  const n = Math.max(word1.length, word2.length);
  let result = "";
  for (let i = 0 ; i < n ; i++) {
    result += word1[i] ?? "";
    result += word2[i] ?? "";
  }

  return result;
};

const word1 = "ab", word2 = "pqrs";
console.log(mergeAlternately(word1, word2));