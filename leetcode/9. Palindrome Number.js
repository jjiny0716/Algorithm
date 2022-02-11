/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//   return x == x.toString().split('').reverse().join('');
// };

// faster
var isPalindrome = function (x) {
  const origin = x;
  x = Math.abs(x);
  let reversed = 0;
  while (x !== 0) {
    reversed *= 10;
    reversed += x % 10;
    x = Math.floor(x / 10);
  }

  return origin === reversed;
}

console.log(isPalindrome(121));
