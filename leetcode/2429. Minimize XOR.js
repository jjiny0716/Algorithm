/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function (num1, num2) {
  let bitCount = num2
    .toString(2)
    .split("")
    .reduce((prev, cur) => (prev += Number(cur)), 0);

  const ans = [];
  for (const bit of num1.toString(2)) {
    if (bit === "0") ans.push("0");
    else if (bitCount > 0) {
      ans.push("1");
      bitCount--;
    } else ans.push("0");
  }

  for (let i = ans.length - 1 ; i >= 0 && bitCount > 0 ; i--) {
    if (ans[i] === '0') {
      ans[i] = '1';
      bitCount--;
    }
  }

  return Number.parseInt('1'.repeat(bitCount) + ans.join(""), 2);
};

const num1 = 3,
  num2 = 5;
console.log(minimizeXor(num1, num2));
