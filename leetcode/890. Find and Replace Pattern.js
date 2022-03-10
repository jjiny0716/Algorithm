/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  function getPattern(word) {
    const map = {};
    const patternArr = [];
    let count = 0;
    for (let char of word) {
      if (map[char] === undefined) {
        patternArr.push(count);
        map[char] = count++;
      }
      else patternArr.push(map[char]);
    }
    return patternArr.join(' ');
  }
  pattern = getPattern(pattern);
  return words.filter(word => getPattern(word) === pattern);
};

const words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb";
console.log(findAndReplacePattern(words, pattern));
