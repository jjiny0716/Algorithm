/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
  return nums.reduce((set, num) => {
    set.add(num);
    set.add(Number(num.toString().split("").reverse().join("")));
    return set;
  }, new Set()).size;
};
