/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
  const counts = [0, 0];
  for (let bit of s) counts[bit]++;
  if (Math.abs(counts[0] - counts[1]) > 1) return -1;

  let result = s.length;
  if ((counts[0] + counts[1]) % 2 === 1) {
    let bit = counts[0] > counts[1] ? '0' : '1';
    
  }
  else {

  }

  return counts;
};

const s = "111000";
console.log(minSwaps(s));