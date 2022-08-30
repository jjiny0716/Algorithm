/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
var addRungs = function(rungs, dist) {
  let result = Math.floor((rungs[0] - 1) / dist);
  for (let i = 0 ; i < rungs.length - 1 ; i++) {
    result += Math.floor((rungs[i + 1] - rungs[i] - 1) / dist);
  }

  return result;
};