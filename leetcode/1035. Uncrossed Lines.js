/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
  const dp = Array.from({ length: nums1.length }, () => new Array(nums2.length).fill(-1));

  maxUncrossedLinesHelper = (topIndex, bottomIndex) => {
    if (topIndex >= nums1.length || bottomIndex >= nums2.length) return 0;
    if (dp[topIndex][bottomIndex] !== -1) return dp[topIndex][bottomIndex];

    let result = 0;
    for (let i = topIndex ; i < nums1.length ; i++) {
      for (let j = bottomIndex ; j < nums2.length ; j++) {
        if (nums1[i] !== nums2[j]) continue;

        result = Math.max(result, 1 + maxUncrossedLinesHelper(i + 1, j + 1));
      }
    }

    return dp[topIndex][bottomIndex] = result;
  }

  return maxUncrossedLinesHelper(0, 0);
};

const nums1 = [1,4,2], nums2 = [1,2,4];
console.log(maxUncrossedLines(nums1, nums2));