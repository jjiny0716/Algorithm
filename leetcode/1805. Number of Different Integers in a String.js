/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
  return new Set(word.replace(/[a-z]+/g, ' ').split(' ').filter((n) => n).map((n) => n.replace(/^0+/, ""))).size;
};

const word = "a01023bc34d8ef34";
console.log(numDifferentIntegers(word));
