/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
var wordCount = function (startWords, targetWords) {
  const charToBinary = (char) => {
    return 2 ** (char.charCodeAt(0) - "a".charCodeAt(0));
  };

  const wordToBinary = (word) => {
    return word.split("").reduce((binary, char) => binary + charToBinary(char), 0);
  };

  const startWordSet = startWords.reduce((set, word) => {
    set.add(wordToBinary(word));
    return set;
  }, new Set());

  return targetWords.reduce((count, word) => {
    for (let i = 0 ; i < word.length ; i++) {
      const reducedWord = word.slice(0, i) + word.slice(i + 1, word.length);
      if (startWordSet.has(wordToBinary(reducedWord))) return count + 1;
    }

    return count;
  }, 0);
};

const startWords = ["ant", "act", "tack"],
  targetWords = ["tack", "act", "acti"];
console.log(wordCount(startWords, targetWords));