/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
  const MOD = 10 ** 9 + 7;
  let ans = 0;
  let lastChar = s[0], dc = 1;

  for (let i = 1 ; i <= s.length ; i++) {
    if (s[i] !== lastChar) {
      ans = (ans + (dc * (dc + 1)) / 2) % MOD;
      dc = 1;
      lastChar = s[i];
    }
    else {
      dc++;
    }
  }

  return ans;
};

const s = "abbcccaa";
console.log(countHomogenous(s));