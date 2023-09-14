/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function(nums, modulo, k) {
  const bools = nums.map((num) => num % modulo === k);
  let pSum = [0];
  for (const bool of bools) {
    pSum.push(pSum.at(-1) + Number(bool));
  }

  let ans = 0;
  const modCounts = new Array(modulo).fill(0);
  for (let i = 1 ; i < pSum.length ; i++) {
    ans += modCounts[(pSum[i] + modulo - k) % modulo];
    modCounts[pSum[i] % modulo]++;
  }
  ans += modCounts[(pSum.at(-1) + modulo - k) % modulo];

  return ans;
};

const nums = [3,2,4], modulo = 2, k = 1;
console.log(countInterestingSubarrays(nums, modulo, k));
