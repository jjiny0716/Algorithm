/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function(nums, k, p) {
  let e = -1, divisibleCount = 0, subarraysSet = new Set();

  const makeAllSubarrays = (arr, start, end) => {
    for (let s = start ; s <= end ; s++) {
      const array = [];
      for (let i = s ; i <= end ; i++) {
        array.push(arr[i]);
        subarraysSet.add(array.join('|'));
      }
    }
  } 

  for (let s = 0 ; s < nums.length ; s++) {
    while (divisibleCount <= k && e < nums.length - 1) {
      if (divisibleCount === k && nums[e + 1] % p === 0) break;
      e++;
      divisibleCount += nums[e] % p === 0 ? 1 : 0;
    }
    makeAllSubarrays(nums, s, e);

    if (e === nums.length - 1) break;
    divisibleCount -= nums[s] % p === 0 ? 1 : 0;
  }

  return subarraysSet.size;
};

const nums = [1, 2, 3, 4], k = 1, p = 102;
console.log(countDistinct(nums, k, p));
