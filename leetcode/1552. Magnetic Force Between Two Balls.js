/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
  position.sort((a, b) => a - b);

  const poisitionAllBalls = (allowedDistance) => {
    let remainBalls = m - 1;
    let last = position[0];

    for (let i = 1 ; i < position.length && remainBalls ; i++) {
      if (position[i] - last >= allowedDistance) {
        last = position[i];
        remainBalls--;
      }
    }

    return remainBalls === 0;
  }

  let left = 1, right = position.at(-1) - position[0];
  while (left < right) {
    const allowedDistance = Math.floor((left + right) / 2);

    const possible = poisitionAllBalls(allowedDistance);
    if (possible) left = allowedDistance + 1;
    else right = allowedDistance - 1;
  }

  return poisitionAllBalls(left) ? left : left - 1;
};

const position = [1,2,3,4,5,6,7,8,9,10], m = 4;
console.log(maxDistance(position, m));