/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let result = 0,
    max = 0;
  for (let num of nums) {
    result += [...num.toString(2)].reduce((prev, bit) => (prev += bit === "1" ? 1 : 0), 0);
    max = Math.max(max, num);
  }

  return max !== 0 ? result + Math.floor(Math.log2(max)) : result;
};

const nums = [4,2,5];
console.log(minOperations(nums));
