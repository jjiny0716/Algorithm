/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
  const map = new Map();
  const result = [];
  for (let i = 0 ; i < words.length ; i++) {
    const word = words[i];
    const sortedWord = word.split('').sort().join('');
    if (map.get(sortedWord) !== i - 1) {
      result.push(word);
    }

    map.set(sortedWord, i);
  }

  return result;
};

const words = ["abba","baba","bbaa","cd","cd"];
console.log(removeAnagrams(words));