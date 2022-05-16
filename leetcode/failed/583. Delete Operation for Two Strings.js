/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const word2Map = {};
  for (let char of word2) {
    word2Map[char] = (word2Map[char] || 0) + 1;
  }

  let word2Index = 0;
  for (let char of word1) {
    if (!word2Map[char]) continue;

    while (word2Index < word2.length && word2[word2Index] !== char) {
      word2Map[word2[word2Index]]--;
      word2Index++;
    }

    
  }
};

const word1 = "leetcode", word2 = "etco";
console.log(minDistance(word1, word2));