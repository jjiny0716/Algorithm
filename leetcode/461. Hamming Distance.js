/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  const xBinary = x.toString(2);
  const yBinary = y.toString(2);

  const length = Math.max(xBinary.length, yBinary.length);
  let distance = 0;
  for (let i = 0 ; i < length ; i++) {
    distance += xBinary.padStart(length, '0')[i] === yBinary.padStart(length, '0')[i] ? 0 : 1;
  }

  return distance;
};

const x = 1, y = 4;
console.log(hammingDistance(x, y));