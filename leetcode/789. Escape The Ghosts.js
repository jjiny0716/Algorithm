/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
 var escapeGhosts = function(ghosts, target) {
  const minTurn = Math.abs(target[0]) + Math.abs(target[1]);
  let minGhostTurn = Infinity;
  for (let [x, y] of ghosts) {
    minGhostTurn = Math.min(minGhostTurn, Math.abs(x - target[0]) + Math.abs(y - target[1]));
    if (minGhostTurn <= minTurn) return false;
  }

  return true;
};

const ghosts = [[1,0],[0,3]], target = [0,1];
console.log(escapeGhosts(ghosts, target));