/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s.split(' ').filter(word => word !== '').pop().length;
};

const s = "Hello World";
console.log(lengthOfLastWord(s));