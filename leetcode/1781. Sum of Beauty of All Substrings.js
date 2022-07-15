/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const charCount = new Array(26).fill(0);
    for (let j = i; j < s.length; j++) {
      charCount[s[j].charCodeAt(0) - "a".charCodeAt(0)]++;
      result += Math.max(...charCount) - getMinCount(charCount);
    }
  }

  function getMinCount(charCount) {
    let min = Infinity;
    for (let count of charCount) {
      if (count) min = Math.min(min, count);
    }

    return min;
  }

  return result;
};

const s = "aabcb";
console.log(beautySum(s));
