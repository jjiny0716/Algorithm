/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  const words = text.split(' ');
  const result = [];
  for (let i = 0 ; i < words.length - 2 ; i++) {
    if (words[i] === first && words[i + 1] === second) result.push(words[i + 2]); 
  }

  return result;
};

const text = "we will we will rock you", first = "we", second = "will";
console.log(findOcurrences(text, first, second));
