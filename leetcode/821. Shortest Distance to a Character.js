/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const charIndexes = [];
  for (let i = 0 ; i < s.length ; i++) 
    if (s[i] === c) charIndexes.push(i);

  const result = [];
  let charIndex = 0;
  for (let i = 0 ; i < s.length ; i++) {
    if (charIndexes[charIndex] === i) {
      result.push(0);
      charIndex++
    }
    else if (charIndex - 1 === -1) result.push(Math.abs(i - charIndexes[charIndex]));
    else if (charIndex === charIndexes.length) result.push(Math.abs(i - charIndexes[charIndex - 1]));
    else result.push(Math.min(Math.abs(i - charIndexes[charIndex]), Math.abs(Math.abs(i - charIndexes[charIndex - 1]))));
  }

  return result;
};

const s = "aaab", c = "b";
console.log(shortestToChar(s, c));