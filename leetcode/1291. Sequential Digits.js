/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  function generateSequentialDigits(length) {
    let result = 0;
    for (let i = 1 ; i <= length ; i++) {
      result *= 10;
      result += i;
    }
    return result;
  }

  const result = [];
  for (let i = 2 ; i <= 9 ; i++) {
    let digits = generateSequentialDigits(i);
    const increase = Number(`${1}`.repeat(i));
    for (let j = 0 ; j < 10 - i ; j++) {
      if (digits >= low && digits <= high) result.push(digits);
      else if (digits > high) return result;
      digits += increase;
    }
  }

  return result;
};

console.log(sequentialDigits(10, 12345));
