/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let result = "";
  for (let i = 0 ; i < s.length ; i += 2 * k) {
    result += s.slice(i, i + k).split('').reverse().join('') + s.slice(i + k, i + 2 * k);
  } 
  return result;
};

const s = "abcd", k = 2;
console.log(reverseStr(s, k));