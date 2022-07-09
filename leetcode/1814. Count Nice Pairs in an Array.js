/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
  const MOD = 10 ** 9 + 7;
  const map = {};
  let result = 0;

  for (let num of nums) {
    const diff = num - rev(num);
    result = (result + (map[diff] || 0)) % MOD;
    map[diff] = (map[diff] || 0) + 1;
  }

  function rev(x) {
    let result = 0;
    while (x) {
      result *= 10;
      result += x % 10;
      x = Math.floor(x / 10);
    }
    return result;
  }

  return result;
};

const nums = [352171103,442454244,42644624,152727101,413370302,293999243];
console.log(countNicePairs(nums));