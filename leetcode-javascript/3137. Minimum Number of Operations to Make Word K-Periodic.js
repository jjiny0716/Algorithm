/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumOperationsToMakeKPeriodic = function(word, k) {
  const n = word.length;
  const map = {};
  for (let i = 0 ; i < n ; i += k){
    const substr = word.slice(i, i + k);
    map[substr] = (map[substr] || 0) + 1;
  }
  
  return (n / k) - Object.values(map).sort((a, b) => b - a)[0];
};

const word = "leetcodeleet", k = 4;
console.log(minimumOperationsToMakeKPeriodic(word, k));