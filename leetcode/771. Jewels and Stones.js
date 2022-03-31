/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let result = 0;
  const map = {};
  for (let jewel of jewels) map[jewel] = (map[jewel] || 0) + 1;
  for (let stone of stones) result += map[stone] ? 1 : 0;
  return result;  
};

const jewels = "aA", stones = "aAAbbbb";
console.log(numJewelsInStones(jewels, stones));