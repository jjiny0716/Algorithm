/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
  const leftStringMap = new Map();
  const rightStringMap = new Map();
  for (const c of s) rightStringMap.set(c, (rightStringMap.get(c) || 0) + 1);

  let result = 0;
  for (const c of s) {
    leftStringMap.set(c,(leftStringMap.get(c) || 0) + 1);
    rightStringMap.set(c,(rightStringMap.get(c) || 0) - 1);
    if (!rightStringMap.get(c)) rightStringMap.delete(c);

    result += leftStringMap.size === rightStringMap.size;
  }

  return result;
};

const s = "aacaba";
console.log(numSplits(s));