/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  return convert(s).localeCompare(convert(s).split('').reverse().join('')) === 0;
};

function convert(s) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, '');
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
