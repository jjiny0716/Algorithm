/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
  let result = [];

  while (n) {
    let code = k - n + 1;
    code = Math.min(code, 26);
    k -= code;
    n--;
    result.push(String.fromCharCode('a'.charCodeAt(0) + code - 1));
  }

  return result.reverse().join('');
};

const n = 5, k = 73;
console.log(getSmallestString(n, k));