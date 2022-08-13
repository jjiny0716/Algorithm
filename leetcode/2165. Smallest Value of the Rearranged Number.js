/**
 * @param {number} num
 * @return {number}
 */
var smallestNumber = function (num) {
  const isPositive = num > 0;
  num = Math.abs(num);
  const digits = [];
  while (num) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  if (isPositive) digits.sort((a, b) => a - b);
  else digits.sort((a, b) => b - a);

  if (isPositive) {
    let zeroIndex = 0, nextIndex = -1;
    for (let i = 0 ; i < digits.length ; i++) {
      if (digits[i - 1] === 0 && digits[i] !== 0) zeroIndex = i;
      else if (digits[i] !== 0) {
        nextIndex = i;
        break;
      }
    }

    if (nextIndex === -1) nextIndex = zeroIndex + 1;

    const zeros = digits.splice(0, zeroIndex);
    digits.splice(nextIndex - zeroIndex, 0, ...zeros);
  }

  return digits.join('') * (isPositive ? 1 : -1);
};

const num = 100000;
console.log(smallestNumber(num));
