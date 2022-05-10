/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const charNeed = {
    b: 1,
    a: 1,
    l: 2,
    o: 2,
    n: 1,
  }
  const charCount = {};

  for (let char of text) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return Object.entries(charNeed).reduce((balloonCount, [char, needAmount]) => balloonCount = charCount[char] ? Math.min(balloonCount, Math.floor(charCount[char] / needAmount)) : 0, Infinity);
};

const text = "leetcode";
console.log(maxNumberOfBalloons(text));