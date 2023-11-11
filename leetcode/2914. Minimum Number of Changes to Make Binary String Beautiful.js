/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
  let ans = 0;
  for (let i = 0 ; i < s.length ; i += 2) {
    if (s[i] !== s[i + 1]) ans++;
  }

  return ans;
};

const s = "1001";
console.log(minChanges(s));