/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  return Number.parseInt(num.toString(2).split('').map((bit) => bit === '0' ? 1 : 0).join(''), 2);
};

const num = 5;
console.log(findComplement(num));