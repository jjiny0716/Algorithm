/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function (s) {
  const words = s.split(' ');
  const result = [];
  for (let i = 0 ; ; i++) {
    let str = "";
    for (let word of words) {
      str += word[i] || ' ';
    }
    str = str.trimEnd();
    if (!str) return result;
    result.push(str);
  }
};

const s = "TO BE OR NOT TO BE";
console.log(printVertically(s));