/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
  let tIndex = 0;
  for (let i = 0 ; i < s.length ; i++) {
    if (s[i] === t[tIndex]) {
      tIndex++;
    }
  }

  return t.length - tIndex;
};

const s = "coaching", t = "coding";
console.log(appendCharacters(s, t));