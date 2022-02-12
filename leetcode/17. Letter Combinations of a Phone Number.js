function makeCombinations(digits, index, mapper, comb, result) {
  if (index === digits.length) {
    result.push(comb.join(''));
    return;
  }
  
  for (let char of mapper[digits.charAt(index)]) {
    comb.push(char);
    makeCombinations(digits, index + 1, mapper, comb, result);
    comb.pop();
  }
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const digitToLetter = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  }

  const result = [];
  makeCombinations(digits, 0, digitToLetter, [], result);
  return result;
};

console.log(letterCombinations(""));
