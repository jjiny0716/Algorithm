/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function (nums, k) {
  const compareNumberStr = (a, b) => {
    if (a.length !== b.length) return b.length - a.length;
    for (let i = 0; i < a.length; i++) {
      const code1 = a.charCodeAt(i),
        code2 = b.charCodeAt(i);
      if (code1 > code2) return -1;
      else if (code1 < code2) return 1;
    }

    return 0;
  };
  return nums.sort(compareNumberStr)[k - 1];
};

const nums = ["3", "6", "7", "10"],
  k = 4;
console.log(kthLargestNumber(nums, k));
