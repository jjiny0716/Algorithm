/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  return nums
    .sort((a, b) => a - b)
    .reduce((arr, value, i) => {
      if (value === target) arr.push(i);
      return arr;
    }, []);
};
