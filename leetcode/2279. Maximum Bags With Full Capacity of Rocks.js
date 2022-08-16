/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
  const need = capacity.map((c, i) => c - rocks[i]).sort((a, b) => a - b);
  let result = 0;

  for (let i = 0 ; i < need.length ; i++) {
    if (need[i] > additionalRocks) break;
    additionalRocks -= need[i];
    result++;
  }

  return result;
};

const capacity = [2,3,4,5], rocks = [1,2,4,4], additionalRocks = 2;
console.log(maximumBags(capacity, rocks, additionalRocks));