/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
  const count = {};
  for (const c of words.join("")) count[c] = (count[c] || 0) + 1;
  return Object.values(count).every((c) => c % words.length === 0);
};

const words = ["abc", "aabc", "bc"];
console.log(makeEqual(words));
