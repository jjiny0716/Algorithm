/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  s = s.split("");
  let c1 = 0, c2 = 0;
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      if (s[i] === '0') c1++;
      else c2++;
    }
    else {
      if (s[i] === '0') c2++;
      else c1++;
    }
  }

  return Math.min(c1, c2);
};

const s = "1111";
console.log(minOperations(s));
