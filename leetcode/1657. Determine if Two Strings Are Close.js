/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  if (word1.length !== word2.length) return false;
  const map1 = {};
  const map2 = {};
  const set1 = new Set();
  const set2 = new Set();
  for (let i = 0 ; i < word1.length ; i++) {
    map1[word1[i]] = (map1[word1[i]] || 0) + 1;
    map2[word2[i]] = (map2[word2[i]] || 0) + 1;
    set1.add(word1[i]);
    set2.add(word2[i]);
  }

  for (let char of set1.keys()) {
    if (!set2.has(char)) return false;
  }

  const count1 = Object.values(map1).sort((a, b) => a - b);
  const count2 = Object.values(map2).sort((a, b) => a - b);

  return count1.every((value, index) => value === count2[index]);
};

const word1 = "ass", word2 = "fvf";
console.log(closeStrings(word1, word2));