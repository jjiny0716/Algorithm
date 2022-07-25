/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
  function stringToNumber(str) {
    let num = 0;
    for (let c of str) {
      num *= 10;
      num += c.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    return num;
  }
  
  return stringToNumber(firstWord) + stringToNumber(secondWord) === stringToNumber(targetWord);
};

const firstWord = "acb", secondWord = "cba", targetWord = "cdb";
console.log(isSumEqual(firstWord, secondWord, targetWord));