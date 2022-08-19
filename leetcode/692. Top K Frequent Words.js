/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  return [...words.reduce((map, word) => {
    map.set(word, (map.get(word) || 0) + 1);
    return map;
  }, new Map()).entries()].sort(([w1, c1], [w2, c2]) => c1 === c2 ? w1.localeCompare(w2) : c2 - c1).slice(0, k).map(([word, count]) => word);
};

const words = ["i","love","leetcode","i","love","coding"], k = 2;
console.log(topKFrequent(words, k));