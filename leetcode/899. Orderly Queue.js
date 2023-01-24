/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
  if (k === 1) {
    let best = s;
    for (let i = 0 ; i < s.length ; i++) {
      const rotatedString = s.slice(i, s.length) + s.slice(0, i);
      if (best > rotatedString) best = rotatedString;
    }

    return best;
  }

  return s.split('').sort().join('');
};

const s = "cba", k = 1;
console.log(orderlyQueue(s, k));