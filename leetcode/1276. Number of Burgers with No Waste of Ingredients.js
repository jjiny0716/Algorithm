/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function (tomatoSlices, cheeseSlices) {
  let jumbo = 0;
  while (cheeseSlices !== 0 && tomatoSlices / cheeseSlices > 2) {
    tomatoSlices -= 4;
    cheeseSlices -= 1;
    jumbo++;
  }
  if (tomatoSlices / cheeseSlices === 2) return [jumbo, cheeseSlices];
  return [];
};

console.log(numOfBurgers(0, 0));

// 수학
/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function (tomatoSlices, cheeseSlices) {
  if (tomatoSlices % 2 === 1) return [];
  const jumbo = (tomatoSlices - cheeseSlices * 2) / 2;
  const small = cheeseSlices - jumbo;
  if (jumbo < 0 || small < 0) return [];
  return [jumbo, small];
};
