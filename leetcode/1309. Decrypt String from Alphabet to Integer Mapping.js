/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let result = "";
  for (let i = s.length - 1 ; i >= 0 ; i--) {
    if (s[i] >= '0' && s[i] <= '9') {
      result = String.fromCharCode(Number(s[i]) + 'a'.charCodeAt(0) - 1) + result;
    }
    else if (s[i] === '#') {
      result = String.fromCharCode(Number(s[i - 2] + s[i - 1]) + 'a'.charCodeAt(0) - 1) + result;
      i -= 2;
    }
  }

  return result;
};

const s = "10#11#12";
console.log(freqAlphabets(s));