/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
  const numCountMap = new Map();
  let pairCount = 0, s = 0, e = -1;
  let goodSubArrayCount = 0;

  for (s = 0 ; s < nums.length ; s++) {
    while (pairCount < k && e < nums.length - 1) {
      e++;
      numCountMap.set(nums[e], (numCountMap.get(nums[e]) || 0) + 1);
      pairCount += numCountMap.get(nums[e]) - 1;
    }

    if (pairCount < k) break;

    goodSubArrayCount += nums.length - e;

    numCountMap.set(nums[s], numCountMap.get(nums[s]) - 1);
    pairCount -= numCountMap.get(nums[s]);
  }

  return goodSubArrayCount;
};

const nums = [3,1,4,3,2,2,4], k = 2;
console.log(countGood(nums, k));
