/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const map = {};
  for (let num of nums) map[num] = (map[num] || 0) + 1;

  let last = 0;
  for (let key of Object.keys(map)) {
    [last, map[key]] = [last + map[key], last];
  }
  
  return nums.map(num => map[num]);
};

const nums = [8,1,2,2,3];
console.log(smallerNumbersThanCurrent(nums));