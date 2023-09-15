/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
  let i = 0, j = s.length - 1;
  while (i <= j) {
    if (s[i] !== s[j]) break;
    const char = s[i];
    while (s[i] === char) i++;
    while (s[j] === char) j--;
  }

  if (i - j === 2) return 1;
  return Math.max(j - i + 1, 0);
};

const s = "aaaaaabaaa";
console.log(minimumLength(s));