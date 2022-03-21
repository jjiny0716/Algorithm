/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  if (nums.every(num => num === 0)) return 0;
  nums.sort((a, b) => {
    const aLength = (Math.log(a) * Math.LOG10E + 1 | 0) || 1;
    const bLength = (Math.log(b) * Math.LOG10E + 1 | 0) || 1;
    return (b * 10 ** aLength + a) - (a * 10 ** bLength + b);
  })

  return result;
};

const nums = [0,0];
console.log(largestNumber(nums));

// 항상 그리디 각을 재자..
