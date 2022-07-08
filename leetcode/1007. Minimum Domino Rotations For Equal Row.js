/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
  const n = tops.length;
  const count = Array.from({ length: 7 }, () => 0);
  const seperateCount = Array.from({ length: 7 }, () => [0, 0]);
  for (let i = 0 ; i < n ; i++) {
    const [t, b] = [tops[i], bottoms[i]];
    seperateCount[t][0]++;
    seperateCount[b][1]++;
    count[t]++;
    if (count[t] === n) return n - Math.max(...seperateCount[t]); 
    if (b !== t) count[b]++; 
    if (count[b] === n) return n - Math.max(...seperateCount[b]);
  }

  return -1;
};

const tops = [3,5,1,2,3], bottoms = [3,6,3,3,4];
console.log(minDominoRotations(tops, bottoms));