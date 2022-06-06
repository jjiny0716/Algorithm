/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  piles.sort((a, b) => a - b);
  let result = 0;
  for (let i = piles.length - 2; i >= piles.length / 3; i -= 2) {
    result += piles[i];
  }

  return result;
};

const piles = [9, 8, 7, 6, 5, 1, 2, 3, 4];
console.log(maxCoins(piles));
