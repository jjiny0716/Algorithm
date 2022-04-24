/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  flowerbed.push(0, 1);
  let space = 1;
  for (let isFlower of flowerbed) {
    if (isFlower) {
      space = 0;
    }
    else {
      space++;
    }
    if (space === 3) {
      n--;
      space = 1;
    }
  }

  return n <= 0;
};

const flowerbed = [0, 0, 1, 0, 1], n = 1;
console.log(canPlaceFlowers(flowerbed, n));
