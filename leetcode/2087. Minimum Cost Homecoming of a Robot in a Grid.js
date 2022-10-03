/**
 * @param {number[]} startPos
 * @param {number[]} homePos
 * @param {number[]} rowCosts
 * @param {number[]} colCosts
 * @return {number}
 */
var minCost = function(startPos, homePos, rowCosts, colCosts) {
  let result = 0;
  let [y, x] = startPos;
  const [homeY, homeX] = homePos;

  while (y !== homeY) {
    y += y < homeY ? 1 : -1;
    result += rowCosts[y];
  }
  while (x !== homeX) {
    x += x < homeX ? 1 : -1;
    result += colCosts[x];
  }
  
  return result;
};

const startPos = [1, 0], homePos = [2, 3], rowCosts = [5, 4, 3], colCosts = [8, 2, 6, 7];
console.log(minCost(startPos, homePos, rowCosts, colCosts));