/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  pattern = pattern.split('');
  s = s.split(' ');
  const pToS = {};
  const sToP = {};

  if (pattern.length !== s.length) return false;

  for (let i = 0 ; i < s.length ; i++) {
    console.log(sToP);
    if (pToS[pattern[i]] === undefined && sToP[s[i]] === undefined) {
      pToS[pattern[i]] = s[i];
      sToP[s[i]] = pattern[i];
    }
    else if (pToS[pattern[i]] === s[i] || sToP[s[i]] === pattern[i]) continue;
    else return false;
  }

  return true;
};

pattern = "abc", s = "dog cat dog";
console.log(wordPattern(pattern, s));