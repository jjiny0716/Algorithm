/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  const map1 = new Map(), map2 = new Map();
  for (const c of s) {
    map1.set(c, ((map1.get(c) || 0) + 1));
  } 
  for (const c of t) {
    map2.set(c, ((map2.get(c) || 0) + 1));
  } 

  let result = 0;
  for (let i = 0 ; i < 26 ; i++) {
    const c = String.fromCharCode('a'.charCodeAt(0) + i);
    result += Math.abs((map1.get(c) || 0) - (map2.get(c) || 0));
  }

  return result;
};

const s = "leetcode", t = "coats";
console.log(minSteps(s, t));