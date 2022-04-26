/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  const charMap = {};
  for (let char of chars) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  let result = 0;
  for (let word of words) {
    const wordMap = {};
    let i;
    for (i = 0 ; i < word.length ; i++) {
      char = word[i];
      wordMap[char] = (wordMap[char] || 0) + 1;
      if (wordMap[char] > (charMap[char] || 0)) break;
    }
    result += i === word.length ? word.length : 0;
  }

  return result;
};

const words = ["hello","world","leetcode"], chars = "welldonehoneyr";
console.log(countCharacters(words, chars));