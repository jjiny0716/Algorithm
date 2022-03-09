/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let m = {};
  let p1 = [], p2 = [];
  let count = 0;
  for (let char of s) {
    if (m[char] === undefined) m[char] = count++;
    p1.push(m[char]);
  }
  m = {};
  count = 0;
  for (let char of t) {
    if (m[char] === undefined) m[char] = count++;
    p2.push(m[char]);
  }
  
  return JSON.stringify(p1) === JSON.stringify(p2);
};

const s = "egg", t = "add";
console.log(isIsomorphic(s, t));
