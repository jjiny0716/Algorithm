/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  let left = null, largestGap = 0, right = 0;
  let range = 0;
  for (let i = 0 ; i < seats.length ; i++) {
    if (seats[i] === 1) {
      if (left === null) left = range;
      else largestGap = Math.max(largestGap, range);
      range = 0;
    }
    else range++;
  }
  right = range;

  return Math.max(left, Math.ceil(largestGap / 2), right);
};

const seats = [1,0,0,1];
console.log(maxDistToClosest(seats));