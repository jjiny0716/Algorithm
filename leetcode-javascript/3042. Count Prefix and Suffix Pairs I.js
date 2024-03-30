/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
  const map = new Map();
  let result = 0;
  for (const word of words) {
    for (let i = 1 ; i <= word.length ; i++) {
      const prefix = word.slice(0, i);
      const suffix = word.slice(-i);
      if (prefix === suffix && map.has(prefix)) {
        result += map.get(prefix);
      }
    }
    map.set(word, (map.get(word) || 0) + 1);
  }
  
  return result;
};

const words = ["a","aba","ababa","aa"];
console.log(countPrefixSuffixPairs(words));