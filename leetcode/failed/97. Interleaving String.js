/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  let result = false;
  function makeInterleave(i1, i2, i3) {
    if (result) return;
    if (i3 > s3.length) return;
    if (i1 === s1.length && i2 === s2.length && i3 === s3.length) {
      result = true;
      return;
    }
    if (s1[i1] === s3[i3]) makeInterleave(i1 + 1, i2, i3 + 1);
    if (s2[i2] === s3[i3]) makeInterleave(i1, i2 + 1, i3 + 1);
  }

  makeInterleave(0, 0, 0);

  return result;
};

s1 = "bbbbbabbbbabaababaaaabbababbaaabbabbaaabaaaaababbbababbbbbabbbbababbabaabababbbaabababababbbaaababaa", s2 = "babaaaabbababbbabbbbaabaabbaabbbbaabaaabaababaaaabaaabbaaabaaaabaabaabbbbbbbbbbbabaaabbababbabbabaab", s3 = "babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab"
console.log(isInterleave(s1, s2, s3));


