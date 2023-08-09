/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
  const pSum = [0];
  for (const n of nums) {
    pSum.push(n + pSum.at(-1));
  }

  const pSumMap = new Map();
  for (let i = 0 ; i < pSum.length ; i++) {
    pSumMap.set(pSum[i], i);
  }
  
  const total = pSum.at(-1);
  const target = total - x;
  let ans = Infinity;
  for (let i = 1; i < pSum.length ; i++) {
    if (pSumMap.has(pSum[i] - target)) {
      const middleSliceLength = i - pSumMap.get(pSum[i] - target);
      if (middleSliceLength < 0) continue;
      ans = Math.min(ans, nums.length - middleSliceLength);
    }
  }

  return ans === Infinity ? -1 : ans;
};

const nums = [1, 1], x = 3;
console.log(minOperations(nums, x));
