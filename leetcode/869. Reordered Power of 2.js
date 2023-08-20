/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
  const set = new Set();
  for (let i = 1 ; i < 10 ** 9 ; i *= 2) {
    set.add(numToDigitMap(i));
  }

  return set.has(numToDigitMap(n));
};

const numToDigitMap = (n) => {
  let digitMap = 0;

  while (n !== 0) {
    const digit = n % 10;
    digitMap += 10 ** digit;
    n = Math.floor(n / 10);
  }

  return digitMap;
}

const n = 123;
console.log(reorderedPowerOf2(n));
