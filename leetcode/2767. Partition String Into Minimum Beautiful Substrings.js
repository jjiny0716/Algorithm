/**
 * @param {string} s
 * @return {number}
 */
var minimumBeautifulSubstrings = function(s) {
  const beautifulStrings = new Set();
  for (let i = 0 ; (5 ** i).toString(2).length <= 15 ; i++) {
    beautifulStrings.add((5 ** i).toString(2));
  }
  
  const minSubstrings = (i) => {
    if (i === s.length) return 0;

    let minSubstrCount = Infinity;
    for (let j = i + 1 ; j <= s.length ; j++) {
      if (beautifulStrings.has(s.slice(i, j))) {
        minSubstrCount = Math.min(minSubstrCount, 1 + minSubstrings(j));
      }
    }

    return minSubstrCount;
  }

  const result = minSubstrings(0);
  return result === Infinity ? -1 : result;
};

console.log(minimumBeautifulSubstrings("1011"));
