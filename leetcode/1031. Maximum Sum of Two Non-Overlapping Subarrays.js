/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function (nums, firstLen, secondLen) {
  const maxSumTwoNoOverlapHelper = (i, remainFirstLen, remainSecondLen) => {
    if (i >= nums.length) return 0;
    if (remainFirstLen === 0 && remainSecondLen === 0) return 0;
    if (nums.length - i < remainFirstLen + remainSecondLen) return 0;

    if (remainFirstLen !== 0 && remainFirstLen !== firstLen)
      return (
        nums[i] +
        maxSumTwoNoOverlapHelper(i + 1, remainFirstLen - 1, remainSecondLen)
      );
    if (remainSecondLen !== 0 && remainSecondLen !== secondLen)
      return (
        nums[i] +
        maxSumTwoNoOverlapHelper(i + 1, remainFirstLen, remainSecondLen - 1)
      );

    return Math.max(
      remainFirstLen && (nums[i] +
        maxSumTwoNoOverlapHelper(i + 1, remainFirstLen - 1, remainSecondLen)),
      remainSecondLen && (nums[i] +
        maxSumTwoNoOverlapHelper(i + 1, remainFirstLen, remainSecondLen - 1)),
      maxSumTwoNoOverlapHelper(i + 1, remainFirstLen, remainSecondLen)
    );
  };

  const a = maxSumTwoNoOverlapHelper(0, firstLen, secondLen);
  return a;
};

const nums = [2,1,5,6,0,9,5,0,3,8],
  firstLen = 4,
  secondLen = 3;
console.log(maxSumTwoNoOverlap(nums, firstLen, secondLen));
