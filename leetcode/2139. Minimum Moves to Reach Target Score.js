/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function (target, maxDoubles) {
  let result = 0;

  while (target > 1) {
    while (maxDoubles > 0 && target % 2 === 0) {
      maxDoubles--;
      target /= 2;
      result++;
    }

    if (maxDoubles === 0) {
      return result + target - 1;
    }

    if (target > 1) {
      target--;
      result++;
    }
  }

  return result;
};

const target = 999999998, maxDoubles = 0;
console.log(minMoves(target, maxDoubles));
