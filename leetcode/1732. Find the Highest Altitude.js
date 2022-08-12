/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let result = 0;
  let altitude = 0;
  for (const g of gain) {
    altitude += g;
    result = Math.max(result, altitude);
  }

  return result;
};

const gain = [-5,1,5,0,-7];
console.log(largestAltitude(gain));