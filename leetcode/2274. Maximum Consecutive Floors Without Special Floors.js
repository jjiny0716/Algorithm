/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
var maxConsecutive = function(bottom, top, special) {
  special.sort((a, b) => a - b);
  let lastFloor = bottom;
  let result = 0;
  for (let floor of special) {
    result = Math.max(result, floor - lastFloor);
    lastFloor = floor;
  }
  result = Math.max(result, top - lastFloor);

  return result;
};

const bottom = 2, top = 9, special = [4,6];
console.log(maxConsecutive(bottom, top, special));