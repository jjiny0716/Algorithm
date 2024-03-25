/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function(word, k) {
  const map = new Map();
  for (const c of word) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  
  const counts = [...map.values()].sort((a, b) => a - b);
  let result = Infinity;
  for (let i = 0 ; i < counts.length ; i++) {
    let delCount = 0;
    for (j = 0 ; j < i ; j++) {
      delCount += counts[j];
    }
    for (j = i + 1 ; j < counts.length ; j++) {
      if (counts[j] > counts[i] + k) delCount += counts[j] - (counts[i] + k);
    }

    result = Math.min(result, delCount);
  }
  
  return result;
};

const word = "aaaabbc", k = 0;
console.log(minimumDeletions(word, k));
