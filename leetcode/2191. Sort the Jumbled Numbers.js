/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
  nums = nums.map((num) => [num, mapNum(num)]);
  function mapNum(num) {
    let result = 0;
    for (let digit of num.toString()) {
      result *= 10;
      result += mapping[digit];
    } 

    return result;
  }

  return nums.sort((a, b) => a[1] - b[1]).map(([a, b]) => a);
};

const mapping = [8,9,4,0,2,1,3,5,7,6], nums = [991,338,38];
console.log(sortJumbled(mapping, nums));