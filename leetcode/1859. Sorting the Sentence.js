/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
  const result = [];
  for (let word of s.split(' ')) {
    result[Number(word.at(-1)) - 1] = word.slice(0, word.length - 1);
  }

  return result.join(' ');
};

const s = "is2 sentence4 This1 a3";
console.log(sortSentence(s));