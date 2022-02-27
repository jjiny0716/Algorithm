/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (Math.floor(num / 10) !== 0) {
    console.log(num);
    let newNum = 0;
    while (num !== 0) {
      newNum += num % 10;
      num = Math.floor(num / 10);
    }
    num = newNum;
  }

  return num;
};

console.log(addDigits(38));


