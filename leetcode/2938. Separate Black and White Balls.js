/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
  let lastZeroIndex = -1, ans = 0;
  for (let i = 0 ; i < s.length ; i++) {
    if (s[i] === '1') continue;
    ans += i - lastZeroIndex - 1;
    lastZeroIndex++;
  }
  
  return ans;
};

const s = "100";
console.log(minimumSteps(s));