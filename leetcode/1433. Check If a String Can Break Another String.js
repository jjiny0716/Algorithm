/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function(s1, s2) {
  s1 = s1.split('').sort().join('');
  s2 = s2.split('').sort().join('');

  for (let i = 0 ; i < s1.length ; i++) {
    if (s1[i] > s2[i]) break;
    if (i === s1.length - 1) return true;
  }

  for (let i = 0 ; i < s1.length ; i++) {
    if (s2[i] > s1[i]) return false;
  }

  return true;
};

const s1 = "leetcodee", s2 = "interview";
console.log(checkIfCanBreak(s1, s2));
