/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  hours = hours.map(value => value > 8 ? 1 : -1);
  const pSum = [0];
  for (let i = 0 ; i < hours.length ; i++) pSum.push(pSum[i] + hours[i]);
  let max = 0;
  for (let i = 0 ; i < pSum.length ; i++) {
    for (let j = i + 1 ; j < pSum.length ; j++) {
      if (pSum[j] - pSum[i] > 0) max = Math.max(max, j - i);
    }
  }
  return max;
};

const hours = [9,9,6,0,6,6,9];
console.log(longestWPI(hours));