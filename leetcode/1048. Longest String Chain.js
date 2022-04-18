/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  words.sort((a, b) => a.length - b.length);
  const map = new Map();
  let result = 0;
  for (let word of words) {
    map[word] = 1;
    for (let i = 0 ; i < word.length ; i++) {
      const subWord = word.slice(0, i) + word.slice(i + 1, word.length);
      map[word] = Math.max(map[word], (map[subWord] || -1) + 1);
    }
    result = Math.max(result, map[word]);
  }

  return result;
};

const words = ["xbc","pcxbcf","xb","cxbc","pcxbc"];
console.log(longestStrChain(words));
