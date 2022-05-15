/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function (target) {
  let currentBit = "0";
  let count = 0;

  for (let bit of target) {
    if (bit != currentBit) {
      count++;
      currentBit = bit;
    }
  }

  return count;
};

const target = "10111";
console.log(minFlips(target));
