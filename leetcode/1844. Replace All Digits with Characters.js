/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
  s = s.split('');
  for (let i = 1 ; i < s.length ; i += 2) {
    s[i] = shift(s[i - 1], s[i]);
  }

  function shift(c, x) {
    return String.fromCharCode(c.charCodeAt(0) + (Number(x) || 0));
  }

  return s.join('');
};

const s = "a1c1e1";
console.log(replaceDigits(s));