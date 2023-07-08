/**
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
var relocateMarbles = function (nums, moveFrom, moveTo) {
  const marbleLocations = new Map();
  for (const num of nums) {
    marbleLocations.set(num, (marbleLocations.get(num) || 0) + 1);
  }

  for (let i = 0; i < moveFrom.length; i++) {
    if (moveFrom[i] === moveTo[i]) continue;
    marbleLocations.set(
      moveTo[i],
      (marbleLocations.get(moveFrom[i]) || 0) +
        (marbleLocations.get(moveTo[i]) || 0)
    );
    marbleLocations.set(moveFrom[i], 0);
  }

  return [...marbleLocations.entries()]
    .filter(([location, count]) => count > 0)
    .map(([location, count]) => location)
    .sort((a, b) => a - b);
};
