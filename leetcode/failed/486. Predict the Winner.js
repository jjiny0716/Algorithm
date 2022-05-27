/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
  function simulate(i, j, p1, p2, turn) {
    if (i > j) {
      console.log(p1, p2);
      return;
    }

    simulate(i + 1, j, p1 + (turn % 2 === 0 ? nums[i] : 0), p2 + (turn % 2 === 1 ? nums[i] : 0), turn + 1);
    simulate(i, j - 1, p1 + (turn % 2 === 0 ? nums[j] : 0), p2 + (turn % 2 === 1 ? nums[j] : 0), turn + 1);
  }
  simulate(0, nums.length - 1, 0, 0, 0);
};

const nums = [1,5,233,7];
console.log(PredictTheWinner(nums));