/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
  let xBool = false, yBool = false, zBool = false;
  for (let [x, y, z] of triplets) {
    if (x > target[0] || y > target[1] || z > target[2]) continue;
    if (x === target[0]) xBool = true;
    if (y === target[0]) yBool = true;
    if (z === target[0]) zBool = true;
  }

  return xBool && yBool && zBool;
};

const triplets = [[2,5,3],[2,3,4],[1,2,5],[5,2,3]], target = [5,5,5];
console.log(mergeTriplets(triplets, target));