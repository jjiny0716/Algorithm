/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
  const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
  const targets = words.map((word) => vowelSet.has(word[0]) && vowelSet.has(word.at(-1)));
  return queries.map(([l, r]) => {
    let count = 0;
    for (let i = l ; i <= r ; i++) {
      if (targets[i]) count++;
    }
    return count;
  })
};

const words = ["aba","bcb","ece","aa","e"], queries = [[0,2],[1,4],[1,1]];
console.log(vowelStrings(words, queries));