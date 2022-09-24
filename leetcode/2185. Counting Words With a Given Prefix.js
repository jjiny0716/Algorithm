/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
  return words.reduce((count, word) => count + (word.slice(0, pref.length) === pref ? 1 : 0), 0);
};

const words = ["pay","attention","practice","attend"], pref = "at";
console.log(prefixCount(words, pref));