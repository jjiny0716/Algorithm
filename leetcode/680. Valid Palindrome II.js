/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s, deleted = false) {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    console.log(left, right);
    if (s[left] === s[right]) {
      left++;
      right--;
    } 
    else {
      if (!deleted && s[left + 1] === s[right] && s[left] === s[right - 1]) {
        return validPalindrome(s.slice(left + 1, right + 1), true) || validPalindrome(s.slice(left, right), true);
      } 
      else if (!deleted && s[left] === s[right - 1]) right--;
      else if (!deleted && s[left + 1] === s[right]) left++;
      else return false;
      deleted = true;
    }
  }

  return true;
};

const s = "ebcbb e cecabbace c bbcbe";
console.log(validPalindrome(s));
