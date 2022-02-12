/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  for (let x = 0 ; x < strs[0].length ; x++) {
    const char = strs[0][x];
    for (let y = 1 ;  y < strs.length ; y++) {
      if (strs[y][x] !== char) return strs[0].substring(0, x);
    }
  }

  return strs[0].substring(0, strs[0].length);
};

console.log(longestCommonPrefix([""]));
