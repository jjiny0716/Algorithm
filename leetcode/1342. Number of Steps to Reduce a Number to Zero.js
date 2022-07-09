/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  const count = [0, 0];
  for (let bit of num.toString(2)) {
    count[bit]++;
  }
  return count[1] * 2 + count[0] - 1;
};

const num = 14;
console.log(numberOfSteps(num));