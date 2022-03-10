/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const letters = s.replace(/[^a-z]/gi, "");
  let result = "";

  function isLetter(char) {
    return char.length === 1 && char.match(/[a-z]/i);
  }

  let i2 = letters.length - 1;
  for (let i = 0 ; i < s.length ; i++) {
    result += isLetter(s[i]) ? letters[i2--] : s[i] ;
  }

  return result;
};

const s = "Test1ng-Leet=code-Q!";
console.log(reverseOnlyLetters(s));