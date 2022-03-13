/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  const upperCaseCount = 0, lowerCaseCount = 0;
  for (let char of word) {
    if (char.toUpperCase() === char) upperCaseCount++;
    else lowerCaseCount++;
  }
  if (upperCaseCount === 0 || lowerCaseCount === 0 || (upperCaseCount === 1 && word[0].toLocaleUpperCase() === word[0])) return true;
  return false;
};

// 개선
var detectCapitalUse = function (word) {
  return word.toLowerCase() === word ||  word.toUpperCase() === word || (word[0].toUpperCase() === word[0] && word[0] + word.slice(1).toLowerCase() === word);
};
