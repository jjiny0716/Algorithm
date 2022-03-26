/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
  const refWordsSet = new Set();
  const refWords = [];
  
  words.sort((a, b) => b.length - a.length);
  for (let word of words) {
    if (refWordsSet.has(word)) continue;
    else {
      for (let i = 1 ; i <= word.length ; i++) refWordsSet.add(word.slice(-i));
      refWords.push(word);
    }
  }
  
  return refWords.reduce((sum, word) => sum += word.length, 0) + refWords.length;
};

const words = ["me","time"];
console.log(minimumLengthEncoding(words));
