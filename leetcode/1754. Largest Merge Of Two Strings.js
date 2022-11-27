/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function (word1, word2) {
  const resultArr = [];
  let i = 0,
    j = 0;
  while (i < word1.length && j < word2.length) {
    if (word1.slice(i, word1.length) > word2.slice(j, word2.length)) {
      resultArr.push(word1[i++]);
    } else {
      resultArr.push(word2[j++]);
    }
  }

  const remainder =
    i !== word1.length
      ? word1.slice(i, word1.length)
      : word2.slice(j, word2.length);
  resultArr.push(...remainder);

  return resultArr.join("");
};

const word1 = "cabaa",
  word2 = "bcaaa";
console.log(largestMerge(word1, word2));
