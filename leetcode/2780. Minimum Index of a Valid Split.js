/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function(nums) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const [dominantElement, dominantElementCount] = [...map.entries()].sort((a, b) => b[1] - a[1])[0];
  const subarrMap = new Map();
  for (let i = 0 ; i < nums.length - 1 ; i++) {
    subarrMap.set(nums[i], (subarrMap.get(nums[i]) || 0) + 1);
    if ((subarrMap.get(dominantElement) > (i + 1) / 2) 
    && (dominantElementCount - subarrMap.get(dominantElement) > (nums.length - i - 1) / 2)) return i;
  }

  return -1;
};

const nums = [1, 2, 2, 2];
console.log(minimumIndex(nums));