/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
  const counts = new Array(26).fill(0);
  for (const char of word) {
    counts[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  
  counts.sort((a, b) => b - a);
  let result = 0;
  for (let i = 0 ; i < 26 ; i++) {
    result += counts[i] * (Math.floor(i / 8) + 1);
  }
  
  return result;
};

const word = "aabbccddeeffgghhiiiiii";
console.log(minimumPushes(word));