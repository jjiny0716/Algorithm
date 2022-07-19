/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
  return s.split(' ').slice(0, k).join(' ');
};

const s = "Hello how are you Contestant", k = 4;
console.log(truncateSentence(s, k));