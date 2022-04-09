/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  const map = {};
  for (let i = 0 ; i < words.length ; i++) {
    const word = words[i];
    for (let char of word) {
      if (!map[char]) map[char] = [];
      map[char][i] = (map[char][i] || 0) + 1;
    }
  }
  
  const result = [];
  const chars = Object.keys(map);
  for (let char of chars) {
    if (map[char].length !== words.length) continue;
    const count = Math.min(...map[char]);
    if (isNaN(count)) continue;
    result.push(...char.repeat(count).split('')); 
  }

  return result;
};

const words = ["bella","label","roller"];
console.log(commonChars(words));
