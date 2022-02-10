/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const pair = {
    "(": ")",
    "{": "}",
    "[": "]"
  }
  for (let char of s) {
    if (pair[char] === undefined) {
      if (pair[stack.pop()] !== char) return false;
    }
    else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};

console.log(isValid("()"));
