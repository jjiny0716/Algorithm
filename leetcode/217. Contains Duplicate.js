/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = {};
  for (let n of nums) {
    if (map[n]) return false;
    map[n] = true;
  }
  return true;
};
