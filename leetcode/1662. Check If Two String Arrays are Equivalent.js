/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
  return word1.join('') === word2.join('');
};

const word1  = ["abc", "d", "defg"], word2 = ["abcddefg"];
console.log(arrayStringsAreEqual(word1, word2));