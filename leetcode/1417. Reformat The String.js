/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  const digits = [],
    letters = [];
  for (const c of s) {
    if (c >= "0" && c <= "9") {
      digits.push(c);
    } else {
      letters.push(c);
    }
  }

  if (Math.abs(digits.length - letters.length) > 1) return "";

  let result = '', i;
  for (i = 0 ; i < Math.min(digits.length, letters.length) ; i++) {
    result += digits[i] + letters[i];
  } 
  if (digits.length > letters.length) result += digits[i];
  else if (letters[i]) result = letters[i] + result; 

  return result;
};

const s = "a0b1c2";
console.log(reformat(s));
