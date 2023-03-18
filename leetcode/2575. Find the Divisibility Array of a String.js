/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function(word, m) {
  let lastMod = 0;
  const divArray = [];
  for (const digit of word) {
    lastMod = (lastMod * 10 + Number(digit)) % m;
    divArray.push(lastMod === 0 ? 1 : 0)
  }

  return divArray;
};

const word = "998244353", m = 3;
console.log(divisibilityArray(word, m));

// (a * 10 + c) % x == 0
// (a * 10) % x + c % x == 0

// 21 % 12 = 9
// (21 * 10) % 12 = 

// lastMod = 2
// (2 * 10 + 4) % 12 == 0???
