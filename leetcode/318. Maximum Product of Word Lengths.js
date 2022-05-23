/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  words.sort((a, b) => b.length - a.length);
  const wordsSet = words.map((word) => new Set(word));
  function hasCommonLetter(set1, set2) {
    return set1.size + set2.size !== new Set([...set1, ...set2]).size;
  }

  let result = 0;
  for (let i = 0 ; i < words.length ; i++) {
    for (let j = 0 ; j < words.length ; j++) {
      const totalSize = words[i].length * words[j].length;
      if (result >= totalSize || hasCommonLetter(wordsSet[i], wordsSet[j])) continue;

      result = totalSize;
    }
  }

  return result;
};

const words = ["fcf", "dabae"];
console.log(maxProduct(words));