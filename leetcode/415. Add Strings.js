/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let carry = 0;
  num1 = num1.split('').reverse().map((num) => Number(num));
  num2 = num2.split('').reverse().map((num) => Number(num));
  const n = Math.max(num1.length, num2.length);
  const result = [];
  for (let i = 0 ; i < n ; i++) {
    let sum = (num1[i] || 0) + (num2[i] || 0) + carry;
    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    } else carry = 0;
    result.push(sum);
  }
  if (carry === 1) result.push(carry);
  
  return result.reverse().join('');
};

const num1 = "456", num2 = "77";
console.log(addStrings(num1, num2));

