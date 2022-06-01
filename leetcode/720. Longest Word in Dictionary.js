/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  words.sort((a, b) => a.length - b.length);
  const wordSet = new Set();
  wordSet.add('');

  let maxLength = 0;
  for (let word of words) {
    if (wordSet.has(word.slice(0, word.length - 1))) {
      wordSet.add(word);
      maxLength = Math.max(maxLength, word.length);
    }
  }

  return [...wordSet].filter((word) => word.length === maxLength).sort()[0];
};

const words = ["a", "banana", "app", "appl", "ap", "apply", "apple"];
console.log(longestWord(words));

["a", "ap", "app", "appl", "apple", "apply", "banana"];

