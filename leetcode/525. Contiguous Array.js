/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const prefixSum = [];
  for (let i = 0; i < nums.length; i++) {
    prefixSum.push((nums[i] || -1) + (prefixSum[i - 1] || 0));
  }

  const m = new Map();
  m.set(0, [-1, -1]);
  for (let i = 0; i < prefixSum.length; i++) {
    if (m.get(prefixSum[i]) === undefined) m.set(prefixSum[i], [i, i]);
    const minMax = m.get(prefixSum[i]);
    minMax[0] = Math.min(minMax[0], i);
    minMax[1] = Math.max(minMax[1], i);
  }

  let maxLength = 0;
  for (let [min, max] of [...m.values()]) {
    maxLength = Math.max(maxLength, max - min);
  }

  return maxLength;
};

console.log(findMaxLength([1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1]));

// other
// 각 count에 대한 min, max를 관리할 필요가 없었음.
// 처음 위치만 저장해두고, 이후 다시 count가 발생하면, 그 차이만큼 max와 경합하면 됨.
var findMaxLength = function (nums) {
  let hash = { 0: -1 };
  let count = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) count--;
    else count++;

    if (hash[count] != null) max = Math.max(max, i - hash[count]);
    else hash[count] = i;
  }
  return max;
};
