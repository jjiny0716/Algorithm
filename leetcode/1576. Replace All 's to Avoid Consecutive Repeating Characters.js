/**
 * @param {string} s
 * @return {string}
 */
 var modifyString = function(s) {
  s = s.split('');
  for (let i = 0 ; i < s.length ; i++) {
    if (s[i] === '?') {
      const counter = { a: 0, b: 0 };
      counter[s[i - 1]]++;
      counter[s[i + 1]]++;
      if (counter['a'] === 0) s[i] = 'a';
      else if (counter['b'] === 0) s[i] = 'b';
      else s[i] = c;
    }
  }

  return s.join('');
};

const s = "?bv?w";
console.log(modifyString(s));