/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  const isNotAnswer = Array.from({length: s1.length + 1}, () => Array.from({length: s2.length + 1}));

  function makeAllInterleave(i, j) {
    if (isNotAnswer[i][j]) return false;
    if (i + j === s3.length) return true;
    
    let result = false;
    result = result || (i < s1.length && s1[i] === s3[i + j] && makeAllInterleave(i + 1, j));
    result = result || (j < s2.length && s2[j] === s3[i + j]) && makeAllInterleave(i, j + 1);
    if (!result) isNotAnswer[i][j] = true;
    return result;
  }

  return makeAllInterleave(0, 0)
};

const s1 = "cbcccbabbccbbcccbbbcabbbabcababbbbbbaccaccbabbaacbaabbbc"
const s2 = "abcbbcaababccacbaaaccbabaabbaaabcbababbcccbbabbbcbbb"
const s3 = "abcbcccbacbbbbccbcbcacacbbbbacabbbabbcacbcaabcbaaacbcbbbabbbaacacbbaaaabccbcbaabbbaaabbcccbcbabababbbcbbbcbb"
// s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
console.log(isInterleave(s1, s2, s3));