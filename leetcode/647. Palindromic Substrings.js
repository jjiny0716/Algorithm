/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let count = 0;

  const expandOddPalindrome = (i) => {
    for (let left = i, right = i ; left >= 0 && right < s.length ; left--, right++) {
      if (s[left] === s[right]) count++;
      else return;
    }
  }

  const expandEvenPalindrome = (i) => {
    for (let left = i, right = i + 1 ; left >= 0 && right < s.length ; left--, right++) {
      if (s[left] === s[right]) count++;
      else return;
    }
  }

  for (let i = 0 ; i < s.length ; i++) {
    expandOddPalindrome(i);
    expandEvenPalindrome(i);
  }

  return count;
};

const s = "aaa";
console.log(countSubstrings(s));