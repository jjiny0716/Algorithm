/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumPartition = function(s, k) {
  let ans = 0;
  const kLength = k.toString().length;

  for (let i = 0 ; i < s.length ; i++) {
    const originalIndex = i;
    if (Number(s.slice(i, i + kLength)) <= k) i += kLength - 1;
    else i += kLength - 2;
    if (i < originalIndex) return -1;
    ans++;
  }

  return ans;
};

const s = "238182", k = 5;
console.log(minimumPartition(s, k));