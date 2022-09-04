/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  const map = {};
  for (const c of s) map[c] = (map[c] || 0) + 1;
  const counts = Object.values(map).sort((a, b) => b - a);

  let result = 0;
  for (let i = 1; i < counts.length; i++) {
    if (counts[i] >= counts[i - 1]) {
      const isZero = counts[i - 1] === 0;
      result += counts[i] - counts[i - 1] + (isZero ? 0 : 1);
      counts[i] = counts[i - 1] - (isZero ? 0 : 1);
    }
  }

  return result;
};

const s = "aabbdd";
console.log(minDeletions(s));
