/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  const wordMap = {};
  for (let word of s1.split(' ')) wordMap[word] = (wordMap[word] || 0) + 1;
  for (let word of s2.split(' ')) wordMap[word] = (wordMap[word] || 0) + 1;
  return Object.entries(wordMap).filter(([word, count]) => count === 1).map(([word]) => word);
};

const s1 = "this apple is sweet", s2 = "this apple is sour";
console.log(uncommonFromSentences(s1, s2));