/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
  const n = Math.ceil(b.length / a.length);
  if (a.repeat(n).includes(b)) return n;
  else if (a.repeat(n + 1).includes(b)) return n + 1;
  
  return -1;
};

const a = "a", b = "aa";
console.log(repeatedStringMatch(a, b));