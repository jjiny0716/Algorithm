/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  const result = [];

  function addNumbersStartWithN(digit) {
    for (let i = 0 ; ; i++) {
      const start = Math.pow(10, i);
      for (j = 0 ; j < start; j++) {
        if (start * digit + j > n) return;
        result.push(start * digit + j);
      }
    }
  }

  for (let digit = 1 ; digit <= 9 ; digit++) addNumbersStartWithN(digit);

  return result;
};


console.log(lexicalOrder(123));

